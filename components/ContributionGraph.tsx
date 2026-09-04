"use client";

import { useState, useMemo } from "react";

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function getLocalISO(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getColor(level: number) {
  if (level === 0) return "var(--cg-empty)";
  if (level === 1) return "var(--cg-1)";
  if (level === 2) return "var(--cg-2)";
  if (level === 3) return "var(--cg-3)";
  return "var(--cg-4)";
}

export default function ContributionGraph({ data, title = "Contributions" }: { data: any, title?: string }) {
  const [hovered, setHovered] = useState<{ x: number, y: number, date: string, count: number } | null>(null);

  const { weeks, monthPositions, total } = useMemo(() => {
    // Ensure we always have data
    if (!data || data.length === 0) return { weeks: [], monthPositions: [], total: 0 };

    const map = new Map<string, { count: number; level: number }>(
      data.map((d: any) => [d.date, { count: d.count, level: d.level }])
    );

    const last = new Date(data[data.length - 1].date);
    const end = new Date(last);
    end.setDate(end.getDate() + (6 - end.getDay()));

    const start = new Date(end);
    start.setDate(start.getDate() - 7 * 52 - 6);

    const weeksArr = [];
    let currentWeek = [];
    let total = 0;
    const monthPositions = [];
    let lastMonth = -1;

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const iso = getLocalISO(d);
      const dataForDay = map.get(iso) ?? { count: 0, level: 0 };
      const count = dataForDay.count;
      const level = dataForDay.level;
      total += count;

      if (d.getDay() === 0 && d.getMonth() !== lastMonth) {
        monthPositions.push({ week: weeksArr.length, label: MONTH_LABELS[d.getMonth()] });
        lastMonth = d.getMonth();
      }

      currentWeek.push({ date: iso, count, level, isFuture: d > last });

      if (d.getDay() === 6) {
        weeksArr.push(currentWeek);
        currentWeek = [];
      }
    }
    if (currentWeek.length) weeksArr.push(currentWeek);

    return { weeks: weeksArr, monthPositions, total };
  }, [data]);

  const cell = 11;
  const gap = 3;

  return (
    <div
      className="w-full rounded-xl bg-transparent font-sans text-neutral-500 dark:text-neutral-400 py-2 flex flex-col [--cg-empty:#ebedf0] dark:[--cg-empty:#161b22] [--cg-1:#9be9a8] dark:[--cg-1:#0e4429] [--cg-2:#40c463] dark:[--cg-2:#006d32] [--cg-3:#30a14e] dark:[--cg-3:#26a641] [--cg-4:#216e39] dark:[--cg-4:#39d353]"
    >
      <div className="w-full overflow-hidden flex justify-end">
        <div style={{ minWidth: weeks.length * (cell + gap) + 30 }}>
          {/* Month labels */}
          <div style={{ position: "relative", height: 16, width: "100%", marginLeft: 30 }}>
            {monthPositions.map((m, i) => (
              <span
                key={i}
                style={{
                  position: "absolute",
                  left: m.week * (cell + gap),
                  fontSize: 12,
                  color: "#7d8590",
                }}
              >
                {m.label}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", width: "100%" }}>
            {/* Day-of-week labels */}
            <div
              style={{
                display: "grid",
                gridTemplateRows: `repeat(7, ${cell}px)`,
                rowGap: gap,
                marginRight: 6,
                fontSize: 10,
                color: "#7d8590",
                width: 24,
              }}
            >
              <span></span>
              <span>Mon</span>
              <span></span>
              <span>Wed</span>
              <span></span>
              <span>Fri</span>
              <span></span>
            </div>

            {/* Grid */}
            <div style={{ display: "flex", gap }}>
              {weeks.map((week, wi) => (
                <div
                  key={wi}
                  style={{
                    display: "grid",
                    gridTemplateRows: `repeat(7, ${cell}px)`,
                    rowGap: gap,
                  }}
                >
                  {week.map((day, di) =>
                    day.isFuture ? (
                      <div key={di} style={{ width: cell, height: cell }} />
                    ) : (
                      <div
                        key={di}
                        onMouseEnter={(e) => {
                          const r = e.currentTarget.getBoundingClientRect();
                          setHovered({
                            x: r.left + r.width / 2,
                            y: r.top,
                            date: day.date,
                            count: day.count,
                          });
                        }}
                        onMouseLeave={() => setHovered(null)}
                        style={{
                          width: cell,
                          height: cell,
                          borderRadius: 2,
                          background: getColor(day.level),
                          cursor: "pointer",
                          outline:
                            hovered?.date === day.date
                              ? "1px solid rgba(255,255,255,0.4)"
                              : "none",
                        }}
                      />
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 12,
          fontSize: 12,
          color: "#7d8590",
        }}
      >
        <span>
          {total.toLocaleString()} {title.toLowerCase()} in the last year
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span>Less</span>
          {["var(--cg-empty)", "var(--cg-1)", "var(--cg-2)", "var(--cg-3)", "var(--cg-4)"].map(
            (c, i) => (
              <div
                key={i}
                style={{
                  width: cell,
                  height: cell,
                  borderRadius: 2,
                  background: c,
                }}
              />
            )
          )}
          <span>More</span>
        </div>
      </div>

      {/* Tooltip */}
      {hovered && (
        <div
          className="fixed -translate-x-1/2 px-2.5 py-1.5 text-xs whitespace-nowrap pointer-events-none z-50 rounded-md border bg-white dark:bg-[#1c2128] text-neutral-900 dark:text-[#c9d1d9] border-neutral-200 dark:border-[#30363d] shadow-[0_3px_6px_rgba(140,149,159,0.15)] dark:shadow-none"
          style={{
            left: hovered.x,
            top: hovered.y - 36,
          }}
        >
          <strong>{hovered.count}</strong> contribution{hovered.count === 1 ? "" : "s"}{" "}
          on{" "}
          {new Date(hovered.date + "T00:00:00").toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </div>
      )}
    </div>
  );
}
