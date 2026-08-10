"use client";

import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";

export default function HospitalAdminNavbar() {
  return (
    <header className="sticky top-0  h-20  bg-white/80 backdrop-blur-md">
      <div className="flex h-full items-center justify-between px-6">
    
        <div className="flex items-center gap-4">
          <SidebarTrigger/>

          <Link href="/doctor" className="text-3xl font-bold text-blue-700">
            HCMS
          </Link>
        </div>

        
        <div className="hidden w-full max-w-xl lg:flex">
          <div className="relative w-full">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

            <input type="text"  placeholder="Search patients, appointments..."
              className="w-full rounded-lg border bg-gray-50 py-2 pl-11 pr-4 outline-none transition focus:border-sky-500 focus:bg-white"/>
          </div>
        </div>

       
        <div className="flex items-center gap-5">
          <button className="relative rounded-lg p-2 transition hover:bg-gray-100">
            <NotificationsNoneIcon />

            <span className="absolute right-1 top-1 flex h-2 w-2 items-center justify-center rounded-full bg-red-500 text-[10px] text-white"> </span>
          </button>


          <button className="flex items-center gap-2 rounded-lg px-2 py-1 transition hover:bg-gray-100">
            <AccountCircleOutlinedIcon fontSize="large" />

            <div className="hidden text-left xl:block">
              <p className="text-sm font-semibold">
                Admin
              </p>
              
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}