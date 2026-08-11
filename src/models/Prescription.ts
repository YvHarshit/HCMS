import mongoose, { Document, Model, Schema } from "mongoose";

export interface IMedicineTracking {
  date: Date;
  scheduleTime: string;
  status: "taken" | "missed";
}

export interface IMedicine {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;

  tracking?: IMedicineTracking[];
}

export interface IPrescription extends Document {
  doctorId: mongoose.Types.ObjectId;
  patientId: mongoose.Types.ObjectId;
  appointmentId: mongoose.Types.ObjectId;

  diagnosis?: string;

  medicines: IMedicine[];

  notes?: string;
  followUpDate?: Date;

  createdAt: Date;
  updatedAt: Date;
}

const PrescriptionSchema = new Schema<IPrescription>(
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

    appointmentId: {
      type: Schema.Types.ObjectId,
      ref: "Appointment",
      required: true,
    },

    diagnosis: {
      type: String,
      trim: true,
    },

    medicines: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },

        dosage: {
          type: String,
          required: true,
          trim: true,
        },

        frequency: {
          type: String,
          required: true,
          trim: true,
        },

        duration: {
          type: String,
          required: true,
          trim: true,
        },

        tracking: [
          {
            date: {
              type: Date,
              required: true,
            },

            scheduleTime: {
              type: String,
              required: true,
            },

            status: {
              type: String,
              enum: ["taken", "missed"],
              required: true,
            },
          },
        ],
      },
    ],

    notes: {
      type: String,
      trim: true,
    },

    followUpDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Prescription: Model<IPrescription> =  mongoose.models.Prescription ||  mongoose.model<IPrescription>("Prescription", PrescriptionSchema);

export default Prescription;