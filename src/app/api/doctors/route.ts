import { NextResponse } from "next/server";
import { getAllDoctors } from "@/app/repositories/doctor.repository";

export async function GET() {
  try {
    // const user = await authCheck();
    
    // console.log("Logged in user:", user);
   
     const doctors = await getAllDoctors();
    // console.log(doctors)
    return NextResponse.json({
      success: true,
      message: "Doctors fetched successfully",
      doctors
    });

  } catch (error : unknown ) {
    if(error instanceof Error) {
      console.log("Error Message : ", error.message)
      console.log("Error Stack : ", error.stack)
    }
    else console.log("Un-expected Error : ", error)

    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }
}




