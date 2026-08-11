import { NextRequest } from "next/server";

import {createAppointmentController, getAppointmentsController} from "@/app/controllers/appointment.controller";

export async function POST(req: NextRequest) {
  return createAppointmentController(req);
}




export async function GET(req: NextRequest) {
  return getAppointmentsController(req);
}