import mongoose, { Schema } from "mongoose";



const FeedbackReviewSchema =  new Schema(
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

const FeedbackReview =  mongoose.models.FeedbackReview || mongoose.model("FeedbackReview", FeedbackReviewSchema);

export default FeedbackReview;