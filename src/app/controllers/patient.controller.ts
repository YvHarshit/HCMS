import { NextResponse } from "next/server";
import { getPatientById, getPatients, registerPatient } from "../services/patient.service";


export async function getPatientsController() {
    const patients = await getPatients() 

    return Response.json ({
    success: true,
    noOfPatients : patients.length,
    data: patients,
    })

}



export async function createPatientController(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, phone, dateOfBirth, gender, address } = body;

    if ( !name || !email || !password || !phone || !dateOfBirth || !gender || !address) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, password and phone are required",
        },
        { status: 400 },
      );
    }
    const patient = await registerPatient({name, email, password, phone, dateOfBirth, gender, address });

    return NextResponse.json(
      {
        success: true,
        message: "Patient account created successfully",
        data: patient,
      },
      { status: 201 },
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Error message : ", error.message);
      console.log("Error Stack : ", error.stack);
    } else console.log("Un-expexted Error : ", error);

    NextResponse.json({
      success: false,
      message: "Failed to Create Patient Account",
    });
  }
}



export async function getPatientByIdController(params: Promise<{ id: string }>) {
  try {
    const { id } = await params;

    if (!id) {
      return Response.json(
        {
          success: false,
          message: "Patient ID is required",
        },
        { status: 400 }
      );
    }

    const patient = await getPatientById(id);

    if (!patient) {
      return Response.json(
        {
          success: false,
          message: "Patient not found",
        },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      data: patient,
    });
  } catch (error) {
    console.error("Get Patient Error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to get patient",
      },
      { status: 500 }
    );
  }
}