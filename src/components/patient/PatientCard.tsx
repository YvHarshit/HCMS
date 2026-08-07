import {CalendarDays, Pill, Lightbulb} from "lucide-react";

export default function PatientCard() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100">
            <CalendarDays className="h-5 w-5 text-blue-600" />
          </div>

          <h3 className="text-2xl font-semibold text-slate-900"> Next Appointment </h3>
        </div>

        <div className="p-4">
          <p className="text-lg"> Dr. Harshit </p>
          <p className="text-sm text-slate-500"> Cardiology </p>
          <p className="text-lg text-blue-600"> Tomorrow at 10:00 AM </p>
        </div>
      </div>

      
      <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100">
            <Pill className="h-5 w-5 text-green-600" />
          </div>

          <h3 className="text-2xl font-semibold text-slate-900">  Active Medications  </h3>
        </div>

        <div className="flex items-end gap-3">
          <span className="text-6xl font-bold text-slate-900"> 3 </span>
          <span className="pb-2 text-slate-500"> items tracked </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-md bg-slate-100 px-3 py-1 text-md"> Amoxicillin </span>
          <span className="rounded-md bg-slate-100 px-3 py-1 text-md"> Vit D </span>
          <span className="rounded-md bg-slate-100 px-3 py-1 text-md"> Biotin </span>
        </div>
      </div>

      
      <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-100">
            <Lightbulb className="h-5 w-5 text-violet-600" />
          </div>

          <h3 className="text-2xl font-semibold text-slate-900"> Health Insight </h3>
        </div>

        <p className="leading-7 text-slate-800 text-lg">
          Based on your recent logs, consider increasing your
          water <br/> intake today to alleviate minor headaches.
        </p>
      </div>
    </div>
  );
}