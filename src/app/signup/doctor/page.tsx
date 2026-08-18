"use client";


import { LocalHospital } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import axios from "axios"
import AuthSideImage from "@/shared/authSharedImg";
import { LoginFormData } from "@/validations/loginData";

export default function hospitalAdminLogin() {
  const router = useRouter();

  const handleSignup = async (data: LoginFormData) => {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/doctor/login", data)

      console.log(response.data);
      if(response.data.success){
        console.log(response.data.message)
        router.push("/doctor");
      }
      else console.log("Something wrong")

     
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data?.message);
      } else {
        console.log("Something went wrong");
      }
    }
  };
  return (
    <div className="flex">
      

      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="my-9 block lg:hidden">
          <h2 className="text-3xl font-bold flex gap-4 items-center">
            <LocalHospital fontSize="large" className="text-blue-700 bg-white rounded text-center"/>
            City General Hospital
          </h2>
          <p className="text-lg text-center"> Access Your Centralized Hospital Admin Portal  </p>
        </div>

        <div className="text-7xl">  sign up </div>
      </div>


      <div className="relative flex-1 w-max min-h-screen hidden lg:block">
        <AuthSideImage/>
      </div>
    </div>
  );
}
