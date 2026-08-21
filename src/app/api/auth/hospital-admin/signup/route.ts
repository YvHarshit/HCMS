import { createHospitalAdminController } from "@/app/controllers/hospitalAdmin.controller";
import { NextResponse } from "next/server"


export function GET() {
    return NextResponse.json ({
        message : "Sign-Up Route"
    })
}



export async function POST(req: Request) {
  return await createHospitalAdminController(req);
}