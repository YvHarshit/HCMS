"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { DoctorSignupData, doctorSignupSchema } from "@/validations/authData";
import { Google } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function DoctorSignupForm() {  
   const router = useRouter()
   const [showPassword, setShowPassword] = React.useState(false);

  const {register, handleSubmit, formState: { errors, isSubmitting }} = useForm<DoctorSignupData>({
    resolver: zodResolver(doctorSignupSchema),
    defaultValues: {
      name: "" ,
      email: "",
      password: "",
      phone : "" ,
      specialization : "" ,
      qualification : "" ,
      experience : undefined ,
      consultationFee : undefined ,

    },
  })

  const onSubmit = async (data: DoctorSignupData) => {
    console.log("Submitting Doctor Signup Data:", {data})
    try {
       const { name, email, password, phone, specialization, qualification, experience, consultationFee } = data
       const response = await axios.post("http://localhost:3000/api/auth/doctor/signup", {name, email, password, phone, specialization, qualification, experience, consultationFee})

      if (response.data.success) {
        console.log(response.data.message)
        router.push("/login")
      } else {
        console.log("Something went wrong in Doctor Signup")
      }
    } catch (error) {
      
      if (axios.isAxiosError(error)) {
        
        console.log(error.response?.data?.message || "Axios error occurred")
      } else {
        console.log("Something went wrong")
      }
      return Response.json({ message: "This email is already registered." },
        {status : 409 }
      )
}
}

  return (
    <div className="rounded-xl border border-gray-200 bg-white px-8 py-10 shadow-sm">
      <div className="mb-6">
        <h1 className="text-4xl font-semibold text-gray-900 text-center">Create Doctor Account</h1>
        <p className="mt-1 text-md text-gray-500 text-center">Enter your details to securely access your portal.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

    <div className="grid grid-cols-1 gap-5 md: grid-cols-2">
      
        <div>
          <label htmlFor="name" className="mb-2 block text-lg text-gray-800 mx-2">Name: <span className="text-red-500">*</span> </label>
          <input  id="name"  type="text"  placeholder="Enter Name"
            {...register("name")}
            className={`h-[2.5rem] w-full rounded-md border px-3 text-lg outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
            ${errors.name ? "border-red-500" : "border-gray-300"}`}/>
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name?.message}</p>}
        </div>

        
        <div>
          <label htmlFor="email" className="mb-2 block text-lg text-gray-800 mx-2">Email: <span className="text-red-500">*</span> </label>
          <input 
            id="email" 
            type="text" 
            placeholder="Enter Email ID"
            {...register("email")}
            className={`h-[2.5rem] w-full rounded-md border px-3 text-lg outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
            ${errors.email ? "border-red-500" : "border-gray-300"}`}/>
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email?.message}</p>}
        </div>

       
        
       
        <div>
          <label htmlFor="qualification" className="mb-2 block text-lg text-gray-800 mx-2"> Qualification: <span className="text-red-500">*</span> </label>
          <input 
            id="qualification" 
            type="text" 
            placeholder="Enter your qualification"
            {...register("qualification")} 
            className={`h-[2.5rem] w-full rounded-md border px-3 text-lg outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${errors.qualification ? "border-red-500" : "border-gray-300"}`}/>
          {errors.qualification && <p className="mt-1 text-xs text-red-500">{errors.qualification?.message}</p>}
        </div>

        <div>
          <label htmlFor="specialization" className="mb-2 block text-lg text-gray-800 mx-2"> Specialization: <span className="text-red-500">*</span> </label>
          <input 
            id="specialization" 
            type="text" 
            placeholder="Enter your specialization"
            {...register("specialization")} 
            className={`h-[2.5rem] w-full rounded-md border px-3 text-lg outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${errors.specialization ? "border-red-500" : "border-gray-300"}`}/>
          {errors.specialization && <p className="mt-1 text-xs text-red-500">{errors.specialization?.message}</p>}
        </div>

        <div>
          <label htmlFor="experience" className="mb-2 block text-lg text-gray-800 mx-2"> Experience: <span className="text-red-500">*</span> </label>
          <input 
            id="experience" 
            type="number" 
            placeholder="Enter Experience"
            {...register("experience", { valueAsNumber: true })} 
            className={`h-[2.5rem] w-full rounded-md border px-3 text-lg outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${errors.experience ? "border-red-500" : "border-gray-300"}`}/>
          {errors.experience && <p className="mt-1 text-xs text-red-500">{errors.experience?.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-lg text-gray-800 mx-2"> Phone: <span className="text-red-500">*</span> </label>
          <input 
            id="phone" 
            type="tel" 
            placeholder="Enter Phone Number"
            {...register("phone")} 
            className={`h-[2.5rem] w-full rounded-md border px-3 text-lg outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${errors.phone ? "border-red-500" : "border-gray-300"}`}/>
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone?.message}</p>}
        </div>

        <div>
          <label htmlFor="consultationFee" className="mb-2 block text-lg text-gray-800 mx-2">Consultation Fee: <span className="text-red-500">*</span> </label>
          <input 
            id="consultationFee" 
            type="number" 
            placeholder="Enter Consultation Fee"
            {...register("consultationFee", { valueAsNumber: true })} 
            className={`h-[2.5rem] w-full rounded-md border px-3 text-lg outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${errors.consultationFee ? "border-red-500" : "border-gray-300"}`}/>
          {errors.consultationFee && <p className="mt-1 text-xs text-red-500">{errors.consultationFee?.message}</p>}
        </div>



        
        <div>
          <label htmlFor="password" className="mb-2 block text-lg text-gray-800 mx-2">Password: <span className="text-red-500">*</span> </label>
          <div className="relative">
            <input  id="password"  type={showPassword ? "text" : "password"}  placeholder="Enter Password" 
              {...register("password")}
              className={`h-[2.5rem] w-full rounded-md border px-3 pr-10 text-lg outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                ${errors.password ? "border-red-500" : "border-gray-300"}`}/>

            <button  type="button"  onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" 
              aria-label={showPassword ? "Hide password" : "Show password"}>
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password?.message}</p>}
        </div>
    </div>    


        <button 
          type="submit" 
          disabled={isSubmitting}
          className="h-[2.5rem] mt-4 w-full rounded-md bg-blue-600 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50 cursor-pointer">
          {isSubmitting ? "Signing up..." : "Sign up"}
        </button>
      </form>

    <div>
     <p className="text-center m-2"> Have an account ? {" "}
         <span className="text-blue-700 cursor-pointer" 
         onClick={() =>  router.push('/login')}>  
            Log In here  </span></p>
     </div>
     <div className="my-7 flex items-center gap-3">
       <div className="h-px flex-1 bg-gray-300" />
       <span className="text-sm text-gray-500"> Or continue with  </span>
       <div className="h-px flex-1 bg-gray-300" />
     </div>
     <div className="flex gap-3">
       <button type="button" onClick={() => console.log("Login with Google")}
         className="flex py-[0.25rem] flex-1 items-center justify-center gap-2 rounded-md border border-gray-300 text-lg font-medium text-gray-700 hover:bg-blue-200 cursor-pointer">
         <span>
           <Google fontSize="large" /> </span> Google </button>
     </div>             
    </div>
  )
}
