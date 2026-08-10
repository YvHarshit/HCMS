import mongoose, { Document, Model, Schema } from "mongoose";

export interface IFeedbackReview extends Document {
  doctorId: mongoose.Types.ObjectId;
  patientId: mongoose.Types.ObjectId;
  appointmentId: mongoose.Types.ObjectId;

  rating: number;
  comment?: string;

  createdAt: Date;
  updatedAt: Date;
}

const FeedbackReviewSchema =
  new Schema<IFeedbackReview>(
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

      rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
      },

      comment: {
        type: String,
        trim: true,
      },
    },
    {
      timestamps: true,
    }
  );

const FeedbackReview: Model<IFeedbackReview> =
  mongoose.models.FeedbackReview ||
  mongoose.model<IFeedbackReview>(
    "FeedbackReview",
    FeedbackReviewSchema
  );

export default FeedbackReview;