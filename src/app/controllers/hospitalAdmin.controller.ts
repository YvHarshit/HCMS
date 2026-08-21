import {loginHospitalAdmin} from "../services/hospitalAdmin.service";

import { createToken } from "@/lib/jwt";
import { cookies } from "next/headers";
import { registerHospitalAdmin } from "../services/hospitalAdmin.service";

export async function createHospitalAdminController(req: Request) {
  try {
    const body = await req.json();

    const {name, email, hospitalName, passkey, phone, password } = body;

    if (!name || !email || !password || !passkey || !hospitalName || !phone ) {
      return Response.json(
        {
          success: false,
          message: "All required fields must be provided",
        },
        { status: 400 }
      );
    }

    const hospitalAdmin = await registerHospitalAdmin({name, email, hospitalName, passkey, phone, password});

    return Response.json(
      {
        success: true,
        message:
          "Hospital Admin Account Created Successfully.",
        data: hospitalAdmin,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error creating hospital admin:", error);

    if (error instanceof Error) {
      if (
        error.message ===
        "Hospital admin with this email already exists"
      ) {
        return Response.json(
          {
            success: false,
            message: error.message,
          },
          { status: 409 }
        );
      }

      if (error.message === "Invalid passkey") {
        return Response.json(
          {
            success: false,
            message: error.message,
          },
          { status: 400 }
        );
      }
    }

    return Response.json(
      {
        success: false,
        message: "Failed to create Hospital Admin Account",
      },
      { status: 500 }
    );
  }
}

export async function loginHospitalAdminController(req: Request) {
  try {
    const body = await req.json();

    const { email, password } = body;

    if (!email || !password) {
      return Response.json(
        {
          success: false,
          message: "Email and password are required",
        },
        { status: 400 }
      );
    }

    const hospitalAdmin = await loginHospitalAdmin(email,password);

    const token = createToken({_id: hospitalAdmin._id.toString()});

    const cookieStore = await cookies();

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return Response.json(
      {
        success: true,
        message: "Hospital Admin logged in successfully",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error logging in hospital admin:", error);

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

export async function logoutHospitalAdminController() {
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
      {
        success: true,
        message: "Hospital Admin logged out successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Hospital Admin logout error:", error);

    return Response.json(
      {
        success: false,
        message: "Logout failed",
      },
      { status: 500 }
    );
  }
}