import { NextRequest, NextResponse } from "next/server";
import { registerReview } from "../services/review.service";

export async function createReviewController(
  req: NextRequest
) {
  try {
    const body = await req.json();

    const {
      doctorId,
      patientId,
      appointmentId,
      rating,
      comment,
    } = body;

    if (
      !doctorId ||
      !patientId ||
      !appointmentId ||
      rating === undefined
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Doctor, patient, appointment and rating are required",
        },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        {
          success: false,
          message: "Rating must be between 1 and 5",
        },
        { status: 400 }
      );
    }

    const review = await registerReview({
      doctorId,
      patientId,
      appointmentId,
      rating,
      comment,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Review submitted successfully",
        data: review,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create Review Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to create review",
      },
      { status: 500 }
    );
  }
}