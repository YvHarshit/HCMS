import { loginDoctorController } from "@/app/controllers/doctor.controller";
import { NextResponse } from "next/server";


export function GET() { return NextResponse.json ({  message : "Login Route" }) }


export async function POST(req : Request) {
    return await loginDoctorController(req)
}