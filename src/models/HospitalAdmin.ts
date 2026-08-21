import mongoose, { Schema } from "mongoose";


const HospitalAdminSchema = new Schema(
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

    hospitalName: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      enum: ["HospitalAdmin"],
      default: "HospitalAdmin",
      immutable: true,
    },
  },

  {
    timestamps: true,
  },
);

const HospitalAdmin =  mongoose.models.HospitalAdmin || mongoose.model("HospitalAdmin", HospitalAdminSchema);

export default HospitalAdmin;
