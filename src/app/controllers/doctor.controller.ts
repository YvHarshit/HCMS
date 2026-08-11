import { getDoctorById, getDoctors, registerDoctor, updateDoctorStatus } from "../services/doctor.service";


export async function getDoctorsController() {
  const doctors = await getDoctors();

  return Response.json({
    success: true,
    noOfDoctors : doctors.length,
    data: doctors,
  });
}



export async function createDoctorController(req: Request) {
  try {
    const body = await req.json();

    const { name, email, password, phone, hospitalId, specialization, qualification, experience, consultationFee } = body;

    

    if (!name || !email || !password || !phone || !hospitalId || !specialization || !qualification || experience === undefined || consultationFee === undefined) {
      return Response.json(
        {
          success: false,
          message: "All required fields must be provided",
        },
        { status: 400 }
      );
    }

    const doctor = await registerDoctor({name, email, password, phone, hospitalId, specialization, qualification, experience, consultationFee});

    return Response.json(
      {
        success: true,
        message:"Doctor account created successfully. Waiting for approval.",
        data: doctor,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create Doctor Error:", error);

    return Response.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Failed to create doctor",
      },
      { status: 500 }
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