"use client";

import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

const applications = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    specialty: "Cardiology",
    appliedDate: "Oct 24, 2023",
    status: "Approved",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    appliedDate: "Oct 23, 2023",
    status: "Pending",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    appliedDate: "Oct 21, 2023",
    status: "Rejected",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    appliedDate: "Oct 20, 2023",
    status: "Pending",
  },
];

const statusStyles = {
  Approved: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Rejected: "bg-red-100 text-red-700",
};

export default function AdminApplications() {
  return (
    <div className="rounded-xl border bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-6 py-4">
        <h2 className="text-xl font-semibold">
          Recent Doctor Applications
        </h2>

        <button>
          <MoreHorizRoundedIcon className="text-slate-500" />
        </button>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead className="border-b bg-slate-50">
          <tr className="text-left text-sm text-slate-500">
            <th className="px-6 py-3">Applicant Name</th>
            <th className="px-6 py-3">Specialty</th>
            <th className="px-6 py-3">Applied Date</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((doctor) => (
            <tr
              key={doctor.id}
              className="border-b last:border-none hover:bg-slate-50"
            >
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                    {doctor.name
                      .split(" ")
                      .slice(1)
                      .map((word) => word[0])
                      .join("")}
                  </div>

                  <span>{doctor.name}</span>
                </div>
              </td>

              <td className="px-6 py-4">{doctor.specialty}</td>

              <td className="px-6 py-4">{doctor.appliedDate}</td>

              <td className="px-6 py-4">
                <span
                  className={`rounded-md px-2 py-1 text-xs font-medium ${
                    statusStyles[
                      doctor.status as keyof typeof statusStyles
                    ]
                  }`}
                >
                  {doctor.status}
                </span>
              </td>

              <td className="px-6 py-4 text-right">
                <button className="text-blue-600 hover:underline">
                  Review
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div className="border-t py-4 text-center">
        <button className="font-medium text-blue-600 hover:underline">
          View All Applications
        </button>
      </div>
    </div>
  );
}