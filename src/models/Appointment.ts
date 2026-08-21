import mongoose, { Schema } from "mongoose";


const AppointmentSchema = new Schema(
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

const Appointment =  mongoose.models.Appointment ||  mongoose.model("Appointment", AppointmentSchema);

export default Appointment;