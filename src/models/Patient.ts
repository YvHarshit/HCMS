import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPatient extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;

  dateOfBirth?: Date;
  gender?: "male" | "female" | "other";

  address?: string;

  role: string;

  createdAt: Date;
  updatedAt: Date;
}

const PatientSchema = new Schema<IPatient>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    dateOfBirth: {
      type: Date,
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },

    address: {
      type: String,
      trim: true,
    },

    role: {
      type: String,
      enum: ["Patient"],
      default: "Patient",
      immutable: true,
    },
  },
  {
    timestamps: true,
  },
);

const Patient: Model<IPatient> =
  mongoose.models.Patient || mongoose.model<IPatient>("Patient", PatientSchema);

export default Patient;
