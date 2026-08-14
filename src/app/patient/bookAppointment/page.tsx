import { Check, SearchIcon } from "lucide-react";

const steps = [
  { id: 1, label: 'Select Doctor' },
  { id: 2, label: 'Choose Slot' },
  { id: 3, label: 'Details' },
  { id: 4, label: 'Confirm' },
];

export default function BookAppointment() {
  const stepsCnt = 1; 

  return (
    <div className="mt-12 mx-12">



      <div className="md:flex justify-between items-center gap-4 mb-8">
        <div className="mb-4 md:mb-0">
          <h2 className="text-4xl font-semibold">Book Your Appointment</h2> 
          <p className="mt-2 text-lg text-gray-600 hidden md:block">
            Schedule a consultation with a specialist.
          </p>
        </div>
        <div>
          <div className="relative w-full md:w-[400px]">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text"  
              placeholder="Search patients, appointments..."
              className="w-full rounded-lg border bg-gray-50 py-2 pl-11 pr-4 outline-none transition focus:border-sky-500 focus:bg-white"
            />
          </div>
        </div>
      </div>



      <div className="flex justify-between w-full border border-slate-200 rounded-xl px-4 md:px-12 py-5 bg-white shadow-sm text-sm">
        {steps.map((step) => {
          const isCompleted = step.id < stepsCnt;
          const isActive = step.id === stepsCnt;

          return (
            <div key={step.id} className="flex flex-col items-center gap-2">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold transition-colors ${
                  isCompleted  ? 'bg-emerald-700 text-white'  : isActive 
                    ? 'bg-blue-600 text-white'  : 'bg-slate-100 text-slate-500 border border-slate-200' }`}>
                 {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : step.id}
              </div>

              <span  className={`font-medium ${ isCompleted  ? 'text-emerald-700'  : isActive ? 'text-blue-600' : 'text-slate-600' }`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>



      


    </div>
  );
}