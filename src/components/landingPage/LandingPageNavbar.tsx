"use client"
import { Login } from "@mui/icons-material";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import { useState } from "react"
import { LogIn } from "lucide-react"

export default function LandingPageNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex py-6 px-22 ">
      <div className="flex flex-1 items-center gap-4">
        <LocalHospitalRoundedIcon fontSize="large" className="text-blue-800"/>
        <span className="text-3xl font-semibold text-blue-700"> City General </span>
      </div>

      <div className="flex flex-2 gap-9 justify-center">
        <button className="text-xl "> About </button>
        <button className="text-xl ">  Services </button>
        <button className="text-xl ">  Specialties </button>
        <button className="text-xl ">  Doctors </button>
        <button className="text-xl ">  Contact </button>
      </div>

      {/* <div className="flex flex-1 justify-end ">
        <button className="bg-blue-600 py-2 px-3 rounded text-lg cursor-pointer text-white hover:bg-blue-700"> <span> <Login/> </span> Login </button>
      </div> */}
      <div className="relative flex flex-1 justify-end">
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded bg-blue-600 px-3 py-2 text-lg text-white hover:bg-blue-700 cursor-pointer">
        <LogIn className="size-5" />
        <span>Login</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-md border bg-white  shadow-lg z-50 text-lg">
          <a href="/login/patient" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Login as Patient </a>
          <a href="/login/doctor" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Login as Doctor </a>
          <a href="/login/hospitalAdmin" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> Login as Admin </a>
        </div>
      )}
    </div>
    </div>
  );
}
