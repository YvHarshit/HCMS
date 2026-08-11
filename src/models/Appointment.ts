import mongoose, { Document, Model, Schema } from "mongoose";

export type AppointmentStatus = "confirmed" | "completed" | "cancelled";

export interface IAppointment extends Document {
  doctorId: mongoose.Types.ObjectId;
  patientId: mongoose.Types.ObjectId;

  appointmentDate: Date;
  appointmentTime: string;

  status: AppointmentStatus;

  createdAt: Date;
  updatedAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>(
  {
    doctorId: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    patientId: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    appointmentDate: {
      type: Date,
      required: true,
    },

    appointmentTime: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["confirmed", "completed", "cancelled"],
      default: "confirmed",
    },
  },
  {
    timestamps: true,
  }
);

const Appointment: Model<IAppointment> =  mongoose.models.Appointment ||  mongoose.model<IAppointment>("Appointment", AppointmentSchema);

export default Appointment;