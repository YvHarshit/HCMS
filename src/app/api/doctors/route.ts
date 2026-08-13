import { createDoctorController, getDoctorsController } from "@/app/controllers/doctor.controller";
import { NextResponse } from "next/server";
import { authCheck } from "@/lib/authCheck";
import { getAllDoctors } from "@/app/repositories/doctor.repository";

export async function GET() {
  try {
    const user = await authCheck();
    // User is authenticated
    console.log("Logged in user:", user);
    // Your API logic here
    // const doctors = await getAllDoctors();
    // console.log(doctors)
    return NextResponse.json({
      success: true,
      message: "Doctors fetched successfully",
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      { status: 401 }
    );

  }
}




export async function POST(req: Request) {
  return createDoctorController(req);
}