import * as React from "react";
import ContributionGraph from "./ContributionGraph";

async function fetchGithubContributions(username: string) {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.contributions.map((d: any) => ({ date: d.date, count: d.count, level: d.level }));
  } catch (error) {
    console.error("Failed to fetch Github activity on server:", error);
    return null;
  }
}

export default async function Activity() {
  const data = await fetchGithubContributions("ayanpal01");

  return (
    <section className="py-8 px-6 border-b border-neutral-200 dark:border-neutral-800/50" id="activity">
      <h2 className="text-[17px] font-medium mb-6 text-neutral-900 dark:text-neutral-100 tracking-tight">Activity</h2>
      <div className="w-full">
        {data ? (
          <ContributionGraph data={data} title="Contributions" />
        ) : (
          <div className="h-[120px] w-full flex items-center justify-center text-sm text-neutral-500">Failed to load activity</div>
        )}
      </div>
    </section>
  );
}
