import z from "zod/v3";



export const nameSchema = z.string().min(1, "Required Field").min(2, "Name must contain at least 2 characters").regex(/^[a-zA-Z\s]+$/, "Only Alphabets are allowed") ;
export const phoneSchema = z.string().min(1, "Required field").max(10, "Maximum character should be 10").regex(/^\d{10}$/, "Phone number must be exactly 10 digits") ;
export const emailSchema = z.string().min(1, "Required field").email("Enter a valid email") ;
export const passwordSchema = z.string().min(6, "Minimum 6 characters required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/, "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number & 1 special character") ;
export const specializationSchema = z.string().min(1, "Required Field") ;
export const qualificationSchema = z.string().min(1, "Required Field") ;




export const dummy = {
    name: z.string().min(1, "Required Field").min(2, "Name must contain at least 2 characters").regex(/^[a-zA-Z\s]+$/, "Only Alphabets are allowed"),
    phone: z.string().min(1, "Required field").max(10, "Maximum character should be 10").regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    email: z.string().min(1, "Required field").email("Enter a valid email"),
    password: z.string().min(6, "Minimum 6 characters required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/, "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number & 1 special character"),
    specialization : z.string().min(1, "Required Field") ,
    qualification : z.string().min(1, "Required Field") ,
}