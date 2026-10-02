import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill out all fields (name, email, message)." },
        { status: 400 }
      );
    }

    const recipientEmail = "work.ayanpal@gmail.com";

    // 1. Primary sender: FormSubmit (Direct instant delivery to work.ayanpal@gmail.com)
    try {
      const fsController = new AbortController();
      const fsTimeout = setTimeout(() => fsController.abort(), 8000);

      const fsRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://www.ayanpal.tech",
          Referer: "https://www.ayanpal.tech/contact",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio Message from ${name}`,
          _replyto: email,
        }),
        signal: fsController.signal,
      });

      clearTimeout(fsTimeout);

      if (fsRes.ok) {
        const fsData = await fsRes.json();
        if (fsData.success === "true" || fsData.success === true) {
          return NextResponse.json({
            success: true,
            provider: "formsubmit",
            message: "Message sent successfully!",
          });
        }
      }
    } catch (fsErr) {
      console.warn("FormSubmit primary attempt failed, trying fallback...", fsErr);
    }

    // 2. Secondary fallback: Web3Forms
    try {
      const web3Key =
        process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
        process.env.WEB3FORMS_KEY;

      const web3Controller = new AbortController();
      const web3Timeout = setTimeout(() => web3Controller.abort(), 8000);

      const web3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3Key,
          name,
          email,
          message,
          from_name: name,
          replyto: email,
          subject: `Portfolio Message from ${name}`,
        }),
        signal: web3Controller.signal,
      });

      clearTimeout(web3Timeout);

      if (web3Res.ok) {
        const web3Data = await web3Res.json();
        if (web3Data.success) {
          return NextResponse.json({
            success: true,
            provider: "web3forms",
            message: "Message sent successfully!",
          });
        }
      }
    } catch (web3Err) {
      console.warn("Web3Forms fallback also failed:", web3Err);
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email. Please use the direct email link below.",
      },
      { status: 500 }
    );
  } catch (err) {
    console.error("API contact error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
