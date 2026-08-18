"use client"

import AuthSideImage from "@/shared/authSharedImg";
import LoginForm from "@/shared/LoginForm";
import { LoginFormData } from "@/validations/loginData";
import { LocalHospital } from "@mui/icons-material";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function hospitalAdminLogin() {
    const router = useRouter()
     const handleLogin = async (data: LoginFormData) => {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/hospital-admin/login", data)

      console.log(response.data);
      if(response.data.success){
        console.log(response.data.message)
        router.push("/hospitalAdmin");
      }
      else console.log("Something wrong")

      // Login successful
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data?.message);
      } else {
        console.log("Something went wrong");
      }
    }
  };
    return (
       


            <div className="flex-1 flex flex-col justify-center items-center">
            <div className="my-9 block lg:hidden">
                <h2 className="text-3xl font-bold flex gap-4 items-center"> 
                 <LocalHospital fontSize="large" className="text-blue-700 bg-white rounded text-center"/> City General Hospital 
                </h2>
                <p className="text-lg text-center"> Access Your Centralized Hospital Admin Portal</p>
            </div>
            <div>    Hospital admin sign up     </div>
              

             <div className="flex">
            <div className="relative flex-1 w-max min-h-screen hidden lg:block">
               <AuthSideImage/>
            </div>
        </div>
      </div>
    );
}
