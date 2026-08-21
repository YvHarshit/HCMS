import mongoose, { Schema } from "mongoose";

const PatientSchema = new Schema(
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

const Patient =  mongoose.models.Patient || mongoose.model("Patient", PatientSchema);

export default Patient;
