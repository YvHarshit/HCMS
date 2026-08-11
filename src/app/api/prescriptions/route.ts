import { createPrescriptionController } from "@/app/controllers/prescription.controller";
import { findAllPrescriptions } from "@/app/services/prescription.service";
import "@/models/Doctor"
import "@/models/Patient"
import "@/models/Appointment"

export async function POST(req: Request) {
  return await createPrescriptionController(req);
}

export async function GET() {
  try {
    const prescriptions = await findAllPrescriptions();

    return Response.json(
      {
        success: true,
        noOfPrescriptions : prescriptions.length,
        data: prescriptions,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get Prescriptions Error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to fetch prescriptions",
      },
      { status: 500 }
    );
  }
}