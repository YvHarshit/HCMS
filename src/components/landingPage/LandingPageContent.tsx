"use client"
import {ChildFriendly, EmergencyShare, PersonAddAltSharp, Vaccines} from "@mui/icons-material";
import {
  ArrowRightIcon,
  ArrowUpRightFromSquareIcon,
  BoneFracture,
  Brain,
  Heart,
  LucideStethoscope,
  Syringe,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function LandingPageContent() {
    const router = useRouter();
  return (
    <>
      <div className="w-full bg-blue-200/15 py-9 px-22">
        <h2 className="text-3xl text-center font-gray-700">
           
          Centeralize Access Portals 
        </h2>
        <p className="text-xl text-center font-gray-500 mt-4">
           
          Secure, role based gateway designed for efficient, clarity and
          precision in medical <br />
          management 
        </p>

        <div className="grid grid-cols-3 gap-4 mt-10">
          <div className="w-full  p-7 rounded bg-white shadow-xl">
            <PersonAddAltSharp fontSize="large" />
            <h2 className="text-3xl pt-3 font-semibold"> Patient Portal</h2>
            <p className="text-lg text-gray-600">
               
              Manage your health records, view test results, and book <br />
              appointments.
            </p>
            <button className="text-blue-700 text-xl cursor-pointer mt-5 inline-flex items-center gap-3 p-2 rounded"
             onClick={() => router.push("/login")}>
               
              Access Portal <ArrowRightIcon /> 
            </button>
          </div>

          <div className="w-full  p-7 rounded bg-white shadow-xl">
            <LucideStethoscope fontSize="large" />
            <h2 className="text-3xl pt-3 font-semibold"> Doctor Portal</h2>
            <p className="text-lg text-gray-600">
               
              Manage your health records, view test results, and book <br />
              appointments.
            </p>
            <button className="text-blue-700 text-xl cursor-pointer mt-5 inline-flex items-center gap-3 p-2 rounded"
            onClick={() => router.push("/login")}>
               
              Access Portal <ArrowRightIcon /> 
            </button>
          </div>

          <div className="w-full  p-7 rounded bg-white shadow-xl">
            <Vaccines fontSize="large" />
            <h2 className="text-3xl pt-3 font-semibold">
               
              Hospital Admin Portal
            </h2>
            <p className="text-lg text-gray-600">
               
              Manage your health records, view test results, and book <br />
              appointments.
            </p>
            <button className="text-blue-700 text-xl cursor-pointer mt-5 inline-flex items-center gap-3 p-2 rounded"
            onClick={() => router.push("/login")}>
               
              Access Portal <ArrowRightIcon /> 
            </button>
          </div>
        </div>
      </div>

      <div className="w-full py-9 px-22 mt-5">
        <h2 className="text-4xl text-gray-800 font-semibold">
          Comprehensive Care Specialties 
        </h2>
        <div className="flex mt-3 text-xl justify-between">
          <span className="text-gray-600">
            Our network of specialties utlilizes state-of-art diagnostic tools
            integrated <br />
            directly into the HCMS plateformfor coordinated care.
          </span>
          <button className="text-blue-700 inline-flex gap-5 items-center">
             
            View all Specialties <ArrowUpRightFromSquareIcon /> 
          </button>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-8 text-xl">
            
          <div className="flex flex-col gap-3 p-8 shadow-xl rounded-2xl bg-white justify-center items-center border hover:bg-blue-700/10 transition duration-300 ">
            <div className="flex items-center justify-center h-15 w-15 rounded-full bg-blue-500/20 text-gray-700">
              <Heart fontSize="large" />
            </div>
            <span> Cardiologist</span>
          </div>
          
          <div className="flex flex-col gap-3 p-8 shadow-xl rounded-2xl bg-white justify-center items-center border hover:bg-blue-700/10 transition duration-300">
            <div className="flex items-center justify-center h-15 w-15 rounded-full bg-blue-500/20 text-gray-700">
              <Brain fontSize="large" />
            </div>
            <span> Neurology </span>
          </div>
          
          <div className="flex flex-col gap-3 p-8 shadow-xl rounded-2xl bg-white justify-center items-center border hover:bg-blue-700/10 transition duration-300">
            <div className="flex items-center justify-center h-15 w-15 rounded-full bg-blue-500/20 text-gray-700">
              <Syringe fontSize="large" />
            </div>
            <span> Oncology </span>
          </div>
          
          <div className="flex flex-col gap-3 p-8 shadow-xl rounded-2xl bg-white justify-center items-center border hover:bg-blue-700/10 transition duration-300">
            <div className="flex items-center justify-center h-15 w-15 rounded-full bg-blue-500/20 text-gray-700">
              <ChildFriendly fontSize="large" />
            </div>
            <span> Pediatrics </span>
          </div>
          
          <div className="flex flex-col gap-3 p-8 shadow-xl rounded-2xl bg-white justify-center items-center border hover:bg-blue-700/10 transition duration-300">
            <div className="flex items-center justify-center h-15 w-15 rounded-full bg-blue-500/20 text-gray-700">
              <BoneFracture fontSize="large" />
            </div>
            <span> Orthopedics </span>
          </div>
          
          <div className="flex flex-col gap-3 p-8 shadow-xl rounded-2xl bg-white justify-center items-center border hover:bg-blue-700/10 transition duration-300">
            <div className="flex items-center justify-center h-15 w-15 rounded-full bg-blue-500/20 text-gray-700">
              <EmergencyShare fontSize="large" />
            </div>
            <span> Emergency </span>
          </div>
          
        </div>
      </div>
    </>
  );
}
