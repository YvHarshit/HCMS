import mongoose, { Schema } from "mongoose";


const SuperAdminSchema = new Schema(
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

const SuperAdmin = mongoose.models.SuperAdmin || mongoose.model("SuperAdmin", SuperAdminSchema);

export default SuperAdmin;
