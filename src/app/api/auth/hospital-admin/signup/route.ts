import { createHospitalAdminController } from "@/app/controllers/hospitalAdmin.controller";
import { NextResponse } from "next/server"


export function GET() {
    return NextResponse.json ({
        message : "Sign-Up Route"
    })
}


export function POST(req : Request) {
  return createHospitalAdminController(req) ;
}