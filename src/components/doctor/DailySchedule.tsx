import MoreVertIcon from "@mui/icons-material/MoreVert";

const appointments = [
  {
    time: "09:00 AM",
    initials: "RE",
    name: "Robert Evans",
    reason: "Follow-up (Hypertension)",
    status: "IN PROGRESS",
    action: "Resume",
    active: true,
  },
  {
    time: "09:45 AM",
    initials: "AM",
    name: "Alice Morgan",
    reason: "New Consultation",
    status: "ARRIVED",
    action: "Start Consult",
  },
  {
    time: "10:30 AM",
    initials: "SC",
    name: "Sarah Connor",
    reason: "Vaccination",
    status: "SCHEDULED",
  },
  {
    time: "11:15 AM",
    initials: "DJ",
    name: "David Jones",
    reason: "Routine Checkup",
    status: "SCHEDULED",
  },
  {
    time: "11:45 AM",
    initials: "SL",
    name: "Shyam Lal",
    reason: "Diagnosis",
    status: "SCHEDULED",
  },
];

export default function DailySchedule() {
  return (
    <div className="rounded-2xl border bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-6 py-5">
        <h2 className="text-xl font-bold">Daily Schedule</h2>

        <button className="font-medium text-blue-600 hover:text-blue-700">
          View Full Calendar →
        </button>
      </div>

      {/* Appointments */}
      <div className="space-y-3 p-5">
        {appointments.map((item) => (
          <div
            key={item.time}
            className={`flex items-center rounded-xl border p-4 transition
            ${
              item.active
                ? "border-blue-500 border-l-4 bg-blue-50"
                : "hover:bg-slate-50"
            }`}
          >
            {/* Time */}
            <div className="w-24 text-center">
              <p className="font-semibold">{item.time.split(" ")[0]}</p>
              <p className="text-sm text-gray-500">
                {item.time.split(" ")[1]}
              </p>
            </div>

            {/* Avatar */}
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-200/50 font-semibold">
              {item.initials}
            </div>

            {/* Details */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.name}</h3>

              <p className="text-sm text-gray-500">{item.reason}</p>
            </div>

            {/* Status */}
            <div className="mr-5">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold
                  ${
                    item.status === "IN PROGRESS"
                      ? "bg-blue-100 text-blue-700"
                      : item.status === "ARRIVED"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
              >
                {item.status}
              </span>
            </div>

           
            {item.action ? (
              <button
                className={`rounded-lg px-5 py-2 font-medium
                  ${
                    item.active
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border text-blue-600 hover:bg-blue-50"
                  }`}
              >
                {item.action}
              </button>
            ) : (
              <button className="rounded-lg p-2 hover:bg-gray-100">
                <MoreVertIcon />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}