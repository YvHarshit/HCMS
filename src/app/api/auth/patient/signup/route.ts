import { createPatientController } from "@/app/controllers/patient.controller"
import { NextResponse } from "next/server"


export function GET() {
    return NextResponse.json ({
        message : "Sign-Up Route"
    })
}

export function POST(req: Request) {
    return createPatientController(req)
}