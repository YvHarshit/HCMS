"use client";

import { Button } from "@/components/ui/button";

const activities = [
  {
    id: 1,
    date: "Today, 9:00 AM",
    title: "Blood pressure reading logged:",
    description: "120/80",
    color: "bg-emerald-500",
  },
  {
    id: 2,
    date: "Yesterday, 2:30 PM",
    title: "Lab results published for",
    description: "Routine Blood Panel",
    color: "bg-blue-600",
  },
  {
    id: 3,
    date: "Oct 24, 11:15 AM",
    title: "Completed telehealth visit with",
    description: "Dr. Lee",
    color: "bg-gray-400",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-xl border bg-white shadow-sm">
     
      <div className="border-b px-6 py-5">
        <h2 className="text-2xl font-bold">Recent Activity</h2>
      </div>

      {/* Timeline */}
      <div className="px-6 py-5">
        {activities.map((activity, index) => (
          <div key={activity.id} className="relative flex gap-4 pb-8 last:pb-0">
            {/* Timeline */}
            <div className="relative flex flex-col items-center">
              {/* Dot */}
              <span className={`h-3 w-3 rounded-full ${activity.color} z-10`}/>
              
              {index !== activities.length - 1 && (<span className="absolute top-3 h-full w-px bg-gray-200" /> )}
            </div>

            
            <div className="-mt-1 flex-1">
              <p className="text-sm font-medium text-gray-500"> {activity.date} </p>
              <p className="mt-2 text-lg font-medium text-gray-900"> {activity.title} </p>
              <p className="font-semibold text-blue-600"> {activity.description} </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t px-6 py-4">
        <Button variant="ghost" className="w-full text-lg font-semibold text-blue-600 hover:text-blue-700">
          View All History
        </Button>
      </div>
    </div>
  );
}