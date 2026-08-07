"use client";

import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";

const queue = [
  {
    initials: "AM",
    image: "https://i.pravatar.cc/100?img=3",
    name: "Alice Morgan",
    waiting: "Waiting 15m",
  },
  {
    initials: "",
    image:"https://i.pravatar.cc/100?img=21",
    name: "Martha Stuart",
    waiting: "Waiting 5m (Walk-in)",
  },
];

export default function LobbyQueue() {
  return (
    <div className="rounded-2xl border bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-5 py-4">
        <h2 className="text-2xl font-bold">
          Lobby Queue
        </h2>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
          3 Waiting
        </span>
      </div>

      {/* Queue */}
      <div className="space-y-4 p-5">
        {queue.map((patient) => (
          <div key={patient.name}
            className="flex items-center">
            {/* Avatar */}
            {patient.image ? (
              <img
                src={patient.image}
                alt={patient.name}
                className="h-11 w-11 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-200 font-semibold">
                {patient.initials}
              </div>
            )}

            {/* Info */}
            <div className="ml-3 flex-1">
              <h3 className="font-semibold">
                {patient.name}
              </h3>

              <p className="text-sm text-gray-500">
                {patient.waiting}
              </p>
            </div>

            {/* Status Icon */}
            <button className="rounded-lg p-2 hover:bg-slate-100">
              <LocalHospitalOutlinedIcon
                fontSize="small"
                className="text-blue-600"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}