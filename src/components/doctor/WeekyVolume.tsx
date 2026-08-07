"use client";

const values = [45, 65, 92, 55, 38];
const labels = ["M", "T", "W", "Tu", "F"];

export default function WeeklyVolume() {
  return (
    <div className="rounded-2xl border bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4">
        <h2 className="text-sm font-bold tracking-wide text-slate-700 uppercase">
          Weekly Volume
        </h2>

        <button className="text-gray-400">
          •••
        </button>
      </div>

      {/* Chart */}
      <div className="flex h-44 items-end justify-evenly px-6 pb-5">
        {values.map((height, index) => (
          <div
            key={labels[index]}
            className="flex flex-col items-center gap-2"
          >
            <div
              style={{ height: `${height}px` }}
              className={`w-10 rounded-t-md ${
                index === 2
                  ? "bg-blue-600"
                  : "bg-blue-200"
              }`}
            />

            <span className="text-xs font-medium text-gray-500">
              {labels[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}