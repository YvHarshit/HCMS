import { createToken } from "@/lib/jwt";
import { getDoctorById, getDoctors, loginDoctor, registerDoctor, updateDoctorStatus } from "../services/doctor.service";
import { cookies } from "next/headers";
import { doctorSignupSchema } from "@/validations/authData";
import { NextResponse } from "next/server";


export async function getDoctorsController() {
  const doctors = await getDoctors();
  return NextResponse.json({
    success: true,
    noOfDoctors : doctors.length,
    data: doctors,
  });
}

export async function createDoctorController(req: Request) {
  try {
    const body = await req.json();
    const validation = doctorSignupSchema.safeParse(body);

    if (!validation.success) {
      return Response.json({
          success: false,
          message: "Validation failed",
          errors: validation.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        }, { status: 400 }
      );
    }
  const {name,email,password,phone,specialization,qualification,experience,consultationFee} = validation.data;
  const doctor = await registerDoctor({name,email,password,phone,specialization,qualification,experience,consultationFee});
    return Response.json({
        success: true,
        message: "Doctor account created successfully. Waiting for approval.",
        data: doctor },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create Doctor Error:", error);

    return Response.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to create doctor",
      },
      { status: 500 }
    );
  }
}

export async function loginDoctorController(req: Request) {
  try {
    const body = await req.json() ;
    const {email, password} = body ;
    if (!email || !password) {
     return Response.json({
         success: false,
         message: "Email and password are required",
       }, {status: 400 }
     );
   }
   const doctor = await loginDoctor(email, password) ; 
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
    console.error("Error logging :", error);

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

export async function logoutDoctor() {
  try {
    const cookieStore = await cookies();
    cookieStore.set("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: new Date(0),
    });
    return Response.json(
      {success: true,
        message: "Doctor logged out successfully"},
      { status: 200 }
    );} 
   catch (error) {
    console.error("Doctor logout error:", error);
    return Response.json({
        success: false,
        message: "Logout failed",
      },{ status: 500 }
    );
  }
}

export async function getDoctorByIdController(params: Promise<{ id: string }>) {
  try {
    const { id } = await params;

    if (!id) {
      return Response.json(
        {
          success: false,
          message: "Doctor ID is required",
        },
        { status: 400 }
      );
    }

    const doctor = await getDoctorById(id);

    if (!doctor) {
      return Response.json(
        {
          success: false,
          message: "Doctor not found",
        },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    console.error("Get Doctor Error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to get doctor",
      },
      { status: 500 }
    );
  }
}


export async function updateDoctorStatusController(req: Request, params: Promise<{ id: string }>) {
  try {
    const { id } = await params;

    if (!id) {
      return Response.json(
        {
          success: false,
          message: "Doctor ID is required",
        },
        { status: 400 }
      );
    }

    const body = await req.json();

    const { status } = body;

    if (status !== "approved" && status !== "rejected") {
      return Response.json(
        {
          success: false,
          message: "Status must be either approved or rejected",
        },
        { status: 400 }
      );
    }

    const doctor = await updateDoctorStatus(id, status);

    if (!doctor) {
      return Response.json(
        {
          success: false,
          message: "Doctor not found",
        },
        { status: 404 }
      );
    }

    return Response.json(
      {
        success: true,
        message: `Doctor ${status} successfully`,
        data: doctor,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update Doctor Status Error:", error);

    return Response.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Failed to update doctor status",
      },
      { status: 500 }
    );
  }
}

