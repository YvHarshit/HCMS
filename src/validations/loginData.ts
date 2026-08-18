import * as z from "zod";


const roleEnum = ["patient", "doctor", "hospitalAdmin"] as const;    

export const loginSchema = z.object({
  role: z.enum(roleEnum),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
});
export type LoginFormData = z.infer<typeof loginSchema>;


export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}   


export const patientSignupSchema = z.object({
  name: z.string().min(1, "Required Field").min(2, "Minimum 2 characters needed"),
  dateOfBirth: z.string().min(1, "Please select a date of birth"),
  phone: z.string().min(1, "Required field").max(10, "Maximum character should be 10"),
  email: z.string().min(1, "Required field").email("Enter a valid email"),
  password: z.string().min(6, "Minimum 6 characters required"),
  gender: z.nativeEnum(Gender, { message: "Please select a valid gender" }),
  address: z.string().min(1, "Required field")
})

export type PatientSignupData = z.infer<typeof patientSignupSchema>