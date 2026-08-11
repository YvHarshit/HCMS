"use client";

import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";

export default function HeroSection() {
  return (
    <section className="flex max-w-8xl items-center gap-12 px-6 py-10">
     <div className="ml-9">
       
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-medium text-blue-700">
          <MonitorHeartIcon fontSize="medium" />
          Advanced Clinical Precision
        </div>
       
        <h1 className="mt-8 max-w-2xl text-6xl font-bold leading-tight text-gray-900">
          Empowering Healthcare Through Intelligent Management
        </h1>
        
        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 text-xl">
          A unified platform designed for optimal operational efficiency and
          compassionate patient care. Experience the future of medical
          administration.
        </p>
        
        <div className="mt-10 flex gap-5">
          <button className="flex text-xl  items-center gap-2 rounded-lg bg-blue-600 px-7 py-4 text-white transition hover:bg-blue-700">
            <SearchIcon />
            Find a Doctor
          </button>

          <button className="flex text-xl items-center gap-2 rounded-lg border border-gray-300 px-7 py-4 transition hover:bg-gray-100">
            <LocalHospitalIcon />
            Provider Solutions
          </button>
        </div>
      </div>

      
      <div className="relative flex-1 flex justify-end pr-7">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <Image src="/h1.jpg" alt="Hospital" width={700} height={750} loading="eager"
            className="h-[650px] w-[800px] object-cover"/>

         
          <div className="absolute bottom-8 right-8 flex items-center gap-4 rounded-2xl bg-white px-6 py-5 shadow-xl">
            <div className="rounded-full bg-green-100 p-3">
              <MonitorHeartIcon className="text-green-600" />
            </div>

            <div>
              <p className="font-semibold text-gray-700">System Status</p>
              <p className="font-bold text-green-600">  All Services Operational  </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}