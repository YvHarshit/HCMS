import { registerPrescription } from "../services/prescription.service";

export async function createPrescriptionController(req: Request) {
  try {
    const body = await req.json();
    const {doctorId, patientId, appointmentId, diagnosis, medicines, notes, followUpDate} = body;

    if (!doctorId || !patientId || !appointmentId || !medicines) {
      return Response.json(
        {
          success: false,
          message: "Required fields are missing",
        },
        { status: 400 }
      );
    }

    const prescription = await registerPrescription({doctorId, patientId, appointmentId, diagnosis, medicines, notes, followUpDate});

    return Response.json(
      {
        success: true,
        message: "Prescription created successfully",
        data: prescription,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create Prescription Error:", error);

    return Response.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to create prescription",
      },
      { status: 500 }
    );
  }
}

