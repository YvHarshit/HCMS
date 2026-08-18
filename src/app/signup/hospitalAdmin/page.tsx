"use client";

import AuthSideImage from "@/shared/authSharedImg";
import { LocalHospital } from "@mui/icons-material";

export default function hospitalAdminLogin() {
  return (
    <div className="flex">

      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="my-9 block lg:hidden">
          <h2 className="text-3xl font-bold flex gap-4 items-center">
            <LocalHospital fontSize="large" className="text-blue-700 bg-white rounded text-center"/>
            City General Hospital
          </h2>
          <p className="text-lg text-center">
            Access Your Centralized Hospital Admin Portal
          </p>
        </div>
        <div className=" text-7xl"> Hospital admin sign up </div>
      </div>

      <div className="relative flex-1 w-max min-h-screen hidden lg:block">
        <AuthSideImage />
      </div>
    </div>
  );
}
