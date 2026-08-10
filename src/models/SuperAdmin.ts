import mongoose, { Document, Model, Schema } from "mongoose";

export interface ISuperAdmin extends Document {
  name: string;
  email: string;
  password: string;

  role: string;

  createdAt: Date;
  updatedAt: Date;
}

const SuperAdminSchema = new Schema<ISuperAdmin>(
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

    role: {
      type: String,
      enum: ["SuperAdmin"],
      default: "SuperAdmin",
      immutable: true,
    },
  },
  {
    timestamps: true,
  },
);

const SuperAdmin: Model<ISuperAdmin> =
  mongoose.models.SuperAdmin ||
  mongoose.model<ISuperAdmin>("SuperAdmin", SuperAdminSchema);

export default SuperAdmin;
