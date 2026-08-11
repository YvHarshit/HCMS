
import { NextRequest, NextResponse } from "next/server";
import { getAppointments, registerAppointment } from "../services/appointment.service";

export async function createAppointmentController(req: NextRequest) {
  try {
    const body = await req.json();

    const {doctorId, patientId, appointmentDate, appointmentTime} = body;

    if (!doctorId || !patientId || !appointmentDate || !appointmentTime) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Doctor, patient, appointment date and appointment time are required",
        },
        { status: 400 }
      );
    }

    const appointment = await registerAppointment({
      doctorId,
      patientId,
      appointmentDate: new Date(appointmentDate),
      appointmentTime,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Appointment created successfully",
        data: appointment,
      },
      { status: 201 }
    );
  }
     catch (error: unknown) {
        if(error instanceof Error){
            console.log("Error Message : ", error.message)
            console.log("Error Stack : ", error.stack)
        }
        else console.log("Un-expected error in Create Appointment : ", error)
        
        return Response.json ({
            message : "Appointment Creation failed",
            success : false 
        })
    }
}



export async function getAppointmentsController(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const doctorId = searchParams.get("doctorId");
    const patientId = searchParams.get("patientId");

    const appointments = await getAppointments({ doctorId: doctorId || undefined,  patientId: patientId || undefined });

    return NextResponse.json(
      {
        success: true,
        message: "Appointments fetched successfully",
        noOfAppointments : appointments.length ,
        data: appointments,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get Appointments Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Failed to fetch appointments",
      },
      { status: 500 }
    );
  }
}