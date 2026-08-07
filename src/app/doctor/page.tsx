import CalendarDemo from "@/components/doctor/CalendarDemo";
import DailySchedule from "@/components/doctor/DailySchedule";
import InfoCards from "@/components/doctor/InfoCards";
import LobbyQueue from "@/components/doctor/LobbyQueue";
import WeeklyVolume from "@/components/doctor/WeekyVolume";
import { AlertTriangleIcon } from "lucide-react";

export default function DoctorPage() {

  return (
    <div className="">
      <div className="flex">
        <div className="flex flex-col gap-2 flex-1 ">
          <span className="text-4xl font-bold"> Good Morning Dr. Harshit </span>
          <span> You have <span className="text-blue-600 text-lg font-semibold"> 12 appointments </span> today. </span>
        </div>

        {/* <div className="flex flex-col gap-2">
          <span className="text-gray-700 text-xl font-semibold ml-auto"> TODAY'S DATE </span>
          <span className="text-3xl font-semibold">  Thursday  06.08.2026 </span>
        </div> */}
      </div>

      <InfoCards />


      <div className="flex gap-9  mt-4 md:mt-9">
        <div className="flex-3">
          <DailySchedule />
        </div>

        <div className="flex-2 w-full">

          <div className="flex gap-5 ">
            <CalendarDemo />
            <div className="flex flex-col gap-3 border border-red-500 p-5 bg-red-500/10 rounded-lg text-red-800 h-fit">
              <p className="flex items-center gap-2 font-medium">
                <AlertTriangleIcon className="shrink-0" />
                <span>Urgent: Lab Result Available</span>
              </p>
              <p className="text-sm leading-relaxed">
                Critical high potassium levels for patient <b>M. Ashokan</b>. <br />
                <span className="border-b border-red-900 cursor-pointer">
                  Review immediately.
                </span>
              </p>
            </div>
          </div>

            <div className="mt-4 "> <WeeklyVolume /> </div>
            {/* <div className="mt-4"> <LobbyQueue/> </div> */}

       
        </div>


      </div>
      </div>

      ) ;
}

