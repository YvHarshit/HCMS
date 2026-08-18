// "use client";

// import * as React from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Eye, EyeOff } from "lucide-react";
// import { Google } from "@mui/icons-material";

// const loginSchema = z.object({
//   email: z.string().min(1, "Email is required").email("Enter a valid email address"),
//   password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
// });

// type LoginFormData = z.infer<typeof loginSchema>;

// export default function LoginForm() {
//   const [showPassword, setShowPassword] = React.useState(false);

//   const {register, handleSubmit, formState: { errors, isSubmitting }} = useForm<LoginFormData>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       email: "",
//       password: ""
//     },
//   });

//   const onSubmit = async (data: LoginFormData) => {
//     console.log("Login data:", data);

//     // API call here
//     // const response = await fetch("/api/login", {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     //   body: JSON.stringify(data),
//     // });
//   };

// return (
//     <div className="w-max rounded-xl border border-gray-200 bg-white px-8 py-10 shadow-sm">
     
//       <div className="mb-6">
//         <h1 className="text-4xl font-semibold text-gray-900">Sign in to your account</h1>
//         <p className="mt-1 text-md text-gray-500">Enter your details to securely access your health portal.</p>
//       </div>

//       <div className="mb-7 flex h-[2.1rem] rounded-lg bg-gray-100 p-1">
//         <button type="button" className="flex-1 rounded-md bg-white text-md font-medium text-blue-600 shadow-sm"> Login </button>
//         <button type="button" className="flex-1 rounded-md text-md font-medium text-gray-600 hover:text-gray-900"> Create Account </button>
//       </div>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//         <div>
//           <label htmlFor="email" className="mb-2 block text-lg text-gray-800 mx-2">Email address</label>
//           <input id="email" type="email" placeholder="Enter your email"
//             {...register("email")}
//             className={`h-[2rem] w-full rounded-md border px-3 text-lg outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500
//               ${errors.email ? "border-red-500" : "border-gray-300"}`}/>
//           {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
//         </div>

//         <div>
//           <label htmlFor="password" className="mb-2 block text-lg font-semibold text-gray-700">Password</label>
//           <div className="relative">
//             <input id="password" type={showPassword ? "text" : "password"} placeholder="Enter Password" {...register("password")}
//               className={`h-[2rem] w-full rounded-md border px-3 pr-10 text-lg outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500
//                 ${errors.password ? "border-red-500" : "border-gray-300"}`}/>
//             <button type="button" onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" aria-label={showPassword ? "Hide password" : "Show password"} >
//               {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//             </button>
//           </div>
//           {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
//         </div>

//         <button type="submit" disabled={isSubmitting}
//           className="h-[2.2rem] mt-[1rem] w-full rounded-md bg-blue-600 text-lg font-semibold text-white transition hover:bg-blue-700 cursor-pointer">
//           {isSubmitting ? "Signing in..." : "Sign in"}
//         </button>
//       </form>

   
//       <div className="my-7 flex items-center gap-3">
//         <div className="h-px flex-1 bg-gray-300" />
//         <span className="text-sm text-gray-500">Or continue with</span>
//         <div className="h-px flex-1 bg-gray-300" />
//       </div>

     
//       <div className="flex gap-3">
//         <button type="button" onClick={()=> console.log("Login with Google")}
//           className="flex py-[0.25rem] flex-1 items-center justify-center gap-2 rounded-md border border-gray-300 text-lg font-medium text-gray-700 hover:bg-blue-200 cursor-pointer">
//           <span><Google fontSize="large"/> </span> Google
//         </button>
//       </div>
//     </div>
//   );
// }
