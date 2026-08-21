"use client";

import { LocalHospital } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import axios from "axios";
import AuthSideImage from "@/shared/authSharedImg";
import { LoginFormData } from "@/validations/authData";
import LoginForm from "@/shared/LoginForm";

export default function Login() {
  const router = useRouter();

  const handleLogin = async (data: LoginFormData) => {
    
    const { role } = data;

    try {
      
      let endpoint = "";
      let redirectPath = "";

      if (role === "patient") {
        endpoint = "http://localhost:3000/api/auth/patient/login";
        redirectPath = "/patient";
      } else if (role === "doctor") {
        endpoint = "http://localhost:3000/api/auth/doctor/login";
        redirectPath = "/doctor";
      } else if (role === "hospitalAdmin") {
        endpoint = "http://localhost:3000/api/auth/hospital-admin/login";
        redirectPath = "/hospitalAdmin"; 
      }


      if (!endpoint) {
        console.log("Invalid role configuration");
        return;
      }

      const response = await axios.post(endpoint, data);
      console.log(response.data);

      if (response.data.success) {
        console.log(response.data.message);
        router.push(redirectPath);
      } else {
        console.log("Something went wrong with authentication parameters.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data?.message || "Axios error occurred");
      } else {
        console.log("Something went wrong");
      }
    }
  };

  return (
    <div className="flex">
      <div className="relative flex-1 w-max min-h-screen hidden lg:block">
        <AuthSideImage />
      </div>

      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="my-9 block lg:hidden">
          <h2 className="text-3xl font-bold flex gap-4 items-center">
            <LocalHospital fontSize="large" className="text-blue-700 bg-white rounded text-center" />
            City General Hospital
          </h2>
          <p className="text-lg text-center text-gray-600"> Access Your Centralized Portal </p>
        </div>

        <div>
          <LoginForm onLogin={handleLogin} />
        </div>
      </div>
    </div>
  );
}
