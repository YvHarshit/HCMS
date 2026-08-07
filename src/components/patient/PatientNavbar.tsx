import { AccountCircleOutlined, NotificationsNone } from "@mui/icons-material";
import { SidebarTrigger } from "../ui/sidebar";
import Link from "next/link";

export default function PatientNavbar() {
  return (
    <header className="sticky top-0  h-20 border-b bg-white/80 backdrop-blur-md  px-12">
      <div className="flex h-full items-center justify-between">
    
        <div className="flex items-center gap-4">
          <SidebarTrigger/>
          <Link href="/patient" className="text-3xl font-bold text-blue-700"> HCMS  </Link>
        </div>
       
        <div className="flex items-center gap-5">
          <button className="relative rounded-lg p-2 transition hover:bg-gray-100">
            <NotificationsNone />
            <span className="absolute right-1 top-1 flex h-2 w-2 items-center justify-center rounded-full bg-red-500 text-[10px] text-white"> </span>
          </button>

          <button className="flex items-center gap-2 rounded-lg px-2 py-1 transition hover:bg-gray-100">
            <AccountCircleOutlined fontSize="large" />
            <div className="hidden text-left xl:block">
              <p className="text-md font-semibold"> Mr. Jack </p>
              <p className="text-sm text-gray-500"> As a Patient </p>
            </div>
          </button>

        </div>
      </div>
    </header>
  );
}