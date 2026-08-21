import * as z from "zod";
// import { emailSchema, nameSchema, passwordSchema, phoneSchema, qualificationSchema, specializationSchema } from "./dummy";
import { Gender, roleEnum } from "@/constants";
// import { dummy } from "./dummy";


export const loginSchema = z.object({
  role: z.enum(roleEnum),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
});
export type LoginFormData = z.infer<typeof loginSchema>;


 


export const patientSignupSchema = z.object({
  name: z.string().min(1,"Required Field").min(2, "Name must contain at least 2 characters").regex(/^[a-zA-Z\s]+$/, "Only Alphabets are allowed"),
  dateOfBirth: z.string().min(1, "Please select a date of birth"),
  phone: z.string().min(1, "Required field").max(10, "Maximum character should be 10").regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  email: z.string().min(1, "Required field").email("Enter a valid email"),
  password: z.string().min(6, "Minimum 6 characters required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/, "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number & 1 special character"),
  gender: z.nativeEnum(Gender, { message: "Please select a valid gender" }),
  address: z.string().min(1, "Required field")
})
export type PatientSignupData = z.infer<typeof patientSignupSchema>



export const hospitalAdminSignupSchema = z.object({
  name: z.string().min(1, "Required Field").min(2, "Name must contain at least 2 characters").regex(/^[a-zA-Z\s]+$/, "Only Alphabets are allowed"),
  phone: z.string().min(1, "Required field").max(10, "Maximum character should be 10").regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  email: z.string().min(1, "Required field").email("Enter a valid email"),
  password: z.string().min(6, "Minimum 6 characters required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/, "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number & 1 special character"),
  passkey: z.string().min(1, "Mandatory to enter") ,
  hospitalName: z.string().min(1, "Required field")
})
export type HospitalAdminSignupData = z.infer<typeof hospitalAdminSignupSchema>



// export const doctorSignupSchema = z.object({
//   name : dummy.name ,
//   email : dummy.email ,
//   phone : dummy.phone ,
//   password : dummy.password ,
//   specialization : dummy.specialization ,
//   qualification : dummy.qualification ,

//   experience : z.number() ,
//   consultationFee : z.number() ,
// })


// export const doctorSignupSchema = z.object({
//   name: nameSchema,
//   phone: phoneSchema ,
//   email: emailSchema  ,
//   password: passwordSchema ,
//   specialization : specializationSchema ,
//   qualification : qualificationSchema ,
//   experience : z.number() ,
//   consultationFee : z.number() ,
// })


export const doctorSignupSchema = z.object({
    name: z.string().min(1, "Required Field").min(2, "Name must contain at least 2 characters").regex(/^[a-zA-Z\s]+$/, "Only Alphabets are allowed"),
    phone: z.string().min(1, "Required field").max(10, "Maximum character should be 10").regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    email: z.string().min(1, "Required field").email("Enter a valid email"),
    password: z.string().min(6, "Minimum 6 characters required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/, "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number & 1 special character"),
    specialization : z.string().min(1, "Required Field") ,
    qualification : z.string().min(1, "Required Field") ,
  experience : z.number() ,
  consultationFee : z.number() ,
})
export type DoctorSignupData = z.infer<typeof doctorSignupSchema>
