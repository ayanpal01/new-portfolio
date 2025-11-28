import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Ayan Pal | ayanpal01 - Flutter & Full-Stack Developer',
  description: 'Learn about Ayan Pal (ayanpal01), professional Flutter & Full-Stack Web Developer. Skills, experience, education, and services offered.',
  keywords: [
    'About Ayan Pal',
    'ayanpal01 about',
    'Ayan Pal biography',
    'developer background',
    'Flutter developer experience'
  ],
}

export default function AboutPage() {
  const faqData = [
    {
      question: "Who is Ayan Pal (ayanpal01)?",
      answer: "Ayan Pal, known online as ayanpal01, is a professional Flutter & Full-Stack Web Developer specializing in React, Next.js, Node.js, and MongoDB. He creates modern, responsive web applications and mobile apps."
    },
    {
      question: "What services does Ayan Pal offer?",
      answer: "Ayan Pal offers Flutter mobile app development, React web development, Next.js applications, Node.js backend development, MongoDB database design, and full-stack web development services."
    },
    {
      question: "Where is Ayan Pal located?",
      answer: "Ayan Pal is based in West Bengal, India, and offers both local and remote development services worldwide."
    },
    {
      question: "What technologies does ayanpal01 specialize in?",
      answer: "ayanpal01 specializes in Flutter, React, Next.js, Node.js, MongoDB, TypeScript, JavaScript, Tailwind CSS, Firebase, and modern web development frameworks."
    },
    {
      question: "How to contact Ayan Pal for projects?",
      answer: "You can contact Ayan Pal through his portfolio website at www.ayanpal.tech, LinkedIn (ayanpal01), GitHub (ayanpal01), or through the contact form on his website."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-20 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
            About Ayan Pal (ayanpal01)
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Professional Flutter & Full-Stack Web Developer creating modern digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Professional Background</h2>
            <p className="text-slate-300 mb-4">
              Ayan Pal (ayanpal01) is a skilled Flutter & Full-Stack Web Developer with expertise in modern 
              web technologies. Specializing in React, Next.js, Node.js, and MongoDB, he creates 
              responsive, user-friendly applications.
            </p>
            <p className="text-slate-300">
              Currently pursuing MCA at Adamas University while working as a freelance developer, 
              Ayan combines academic knowledge with practical industry experience.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Technical Expertise</h2>
            <ul className="text-slate-300 space-y-2">
              <li>• Flutter Mobile App Development</li>
              <li>• React & Next.js Web Applications</li>
              <li>• Node.js Backend Development</li>
              <li>• MongoDB Database Design</li>
              <li>• TypeScript & JavaScript</li>
              <li>• Tailwind CSS & Responsive Design</li>
              <li>• Firebase Integration</li>
              <li>• Full-Stack Architecture</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-slate-700 pb-4">
                <h3 className="text-lg font-semibold text-slate-200 mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Get In Touch</h2>
            <p className="text-slate-300 mb-6">
              Ready to work with Ayan Pal? Contact for web development, mobile app development, 
              or consulting services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/"
                className="px-6 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
              >
                View Portfolio
              </a>
              <a
                href="/#contact"
                className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-slate-950 transition-colors"
              >
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}