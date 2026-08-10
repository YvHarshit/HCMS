import mongoose, { Document, Model, Schema } from "mongoose";

export interface IHospitalAdmin extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;

  hospitalName: string;

  role: string;

  createdAt: Date;
  updatedAt: Date;
}

const HospitalAdminSchema = new Schema<IHospitalAdmin>(
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

const HospitalAdmin: Model<IHospitalAdmin> =
  mongoose.models.HospitalAdmin ||
  mongoose.model<IHospitalAdmin>("HospitalAdmin", HospitalAdminSchema);

export default HospitalAdmin;
