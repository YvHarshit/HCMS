import { NextResponse } from "next/server";
import { getPatientById, getPatients, loginPatient, registerPatient } from "../services/patient.service";
import { createToken } from "@/lib/jwt";
import { cookies } from "next/headers";
import { patientSignupSchema } from "@/validations/authData";


export async function getPatientsController() {
    const patients = await getPatients() 
    return NextResponse.json ({
    success: true,
    noOfPatients : patients.length,
    data: patients,
    })

}


export async function createPatientController(req: Request) {
  try {
    const body = await req.json();
    const validation = patientSignupSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validation.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      password,
      phone,
      dateOfBirth,
      gender,
      address,
    } = validation.data;

    const patient = await registerPatient({
      name,
      email,
      password,
      phone,
      dateOfBirth,
      gender,
      address,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Patient account created successfully",
        data: patient,
      },
      { status: 201 }
    );

  } catch (error: unknown) {
    console.error("Create Patient Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create patient account",
      },
      { status: 500 }
    );
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


export async function loginPatientController(req: Request) {
  try {
      const body = await req.json() ;
      const {email, password} = body ;
  
      if (!email || !password) {
       return Response.json(
         {
           success: false,
           message: "Email and password are required",
         },
         { status: 400 }
       );
     }
     const doctor = await loginPatient(email, password) ;   
  
     const token = createToken({_id: doctor._id.toString()});
     console.log("Token generated for user:", doctor.email, "Token:", token);
  
     const cookieStore = await cookies();
    
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
    return Response.json ({
      success : true ,
      message : `${doctor.name} get logged-in successfully.`,
    }) 
      }  catch (error: unknown) {
      console.error("Patient login failed :", error);
  
      if (error instanceof Error) {
        return Response.json(
          {
            success: false,
            message: error.message,
          },
          { status: 401 }
        );
      }
  
      return Response.json(
        {
          success: false,
          message: "Login failed",
        },
        { status: 500 }
      );
    }
  }

export async function logoutPatient() {
  try {
    const cookieStore = await cookies();

    cookieStore.set("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: new Date(0),
    });

    return Response.json({
        success: true,
        message: "Patient logged out successfully",
      }, { status: 200 }
    );
  } 
   catch (error) {
    console.error("Patient logout error:", error);
    return Response.json({
        success: false,
        message: "Logout failed",
      },
      { status: 500 }
    );}
}