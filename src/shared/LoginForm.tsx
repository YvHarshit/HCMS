"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { Google } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { LoginFormData, loginSchema } from "@/validations/authData";
import { LoginFormProps } from "@/app/types/login.types";



export default function LoginForm({ onLogin }: LoginFormProps) {

  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);   
  const [role, setRole] = React.useState("patient")


  const {register, handleSubmit, control, formState: { errors, isSubmitting }} = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      role: "patient",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    await onLogin(data);
  };

  return (
    <div className="w-max rounded-xl border border-gray-200 bg-white px-8 py-10 shadow-sm">

       <div className="mb-6">
        <h1 className="text-4xl font-semibold text-gray-900 text-center"> Sign-in </h1>
        <p className="mt-1 text-md text-gray-500">  Enter your details to securely access your health portal. </p>
      </div>


      <Controller name="role" control={control}
        render={({ field: { value, onChange } }) => (
          <div className="flex justify-evenly border-2 rounded-xl mb-6 overflow-hidden border-gray-200">
            <button type="button"
              className={`p-2 w-full flex-1 font-medium transition-colors cursor-pointer ${
                value === "patient" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700 hover:bg-blue-100"}`}
              onClick={() =>{ onChange("patient")
                setRole("patient")
              }}>
              Patient  </button>

            <button type="button" className={`p-2 w-full flex-1 font-medium transition-colors ${
                value === "doctor" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700 hover:bg-blue-100" }`}
              onClick={() => {onChange("doctor")
                setRole("doctor")
              }} >
              Doctor </button>

            <button type="button" className={`p-2 w-full flex-1 font-medium transition-colors ${
                value === "hospitalAdmin" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700 hover:bg-blue-100"
              }`}
              onClick={() => {onChange("hospitalAdmin")
                setRole("hospitalAdmin")
              }}>
              Hosp. Admin </button>
          </div>
        )}/>

     
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label htmlFor="email" className="mb-2 block text-lg text-gray-800 mx-2">
            Email address
          </label>

          <input id="email" type="email" placeholder="Enter your email" {...register("email")}
            className={`h-[2rem] w-full rounded-md border px-3 text-lg outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500
              ${errors.email ? "border-red-500" : "border-gray-300"}`} />

          {errors.email && ( <p className="mt-1 text-xs text-red-500"> {errors.email.message} </p> )}
        </div>

        <div>
          <label htmlFor="password" className="mb-2 block text-lg font-semibold text-gray-700" >
            Password
          </label>

          <div className="relative">
            <input id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              {...register("password")}
              className={`h-[2rem] w-full rounded-md border px-3 pr-10 text-lg outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                ${errors.password ? "border-red-500" : "border-gray-300"}`}/>

            <button type="button" onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label={showPassword ? "Hide password" : "Show password"}>
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {errors.password && (<p className="mt-1 text-xs text-red-500">  {errors.password.message}  </p>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}
          className="h-[2.2rem] mt-[1rem] w-full rounded-md bg-blue-600 text-lg font-semibold text-white transition hover:bg-blue-700 cursor-pointer">
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <div>
         <p className="text-center m-2"> Don't have an account ? {" "}
          <span className="text-blue-700 cursor-pointer  " 
          onClick={() => {
            if(role === 'doctor')
              router.push('/signup/doctor')

            if(role  === 'patient')
              router.push('/signup/patient')

            if(role  === 'hospitalAdmin')
              router.push('/signup/hospitalAdmin')
             }}>  
             Sign Up here  </span></p>
      </div>

      <div className="my-7 flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-300" />
        <span className="text-sm text-gray-500"> Or continue with  </span>
        <div className="h-px flex-1 bg-gray-300" />
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => console.log("Login with Google")}
          className="flex py-[0.25rem] flex-1 items-center justify-center gap-2 rounded-md border border-gray-300 text-lg font-medium text-gray-700 hover:bg-blue-200 cursor-pointer"
        >
          <span>
            <Google fontSize="large" />
          </span>
          Google
        </button>
      </div>
    </div>
  );
}
