"use client"
import MedicineTracker from "@/components/patient/MedicineTracker";
import PatientCard from "@/components/patient/PatientCard";
import RecentActivity from "@/components/patient/RecentActivity";

export default function PatientDashboard()  {
  return (
    <div>

    <div className="flex mt-5 px-12">
      <div className="flex-1">
        <h2 className="text-3xl"> Welcome Back, Jack !</h2>
        <p className="text-lg text-gray-700"> Here is a summary of your health data.</p>
      </div>
      <div className="flex-1 flex justify-center items-center border-2 text-lg rounded"
      onClick={() => console.log("AI Symptom Checker")}>
        <p> Know your Department through <b className="text-green-600 text-xl"> AI Symptom Checker </b> </p>        
      </div>
    </div>

      <div className="mt-5 px-12"> <PatientCard/> </div>

      <div className="flex mt-5 p-12 gap-5">
      <div className="flex-2"> <MedicineTracker/> </div>
      <div className="flex-1"> <RecentActivity/> </div>

      </div>

    </div>
  )
}

