import { editPrescription, findPrescriptionById, removePrescription } from "@/app/services/prescription.service";



interface Params {params: Promise<{id: string;}>;}

export async function GET(req: Request,{ params }: Params) {
  try {
    const { id } = await params;
    const prescription = await findPrescriptionById(id);

    if (!prescription) {
      return Response.json(
        {
          success: false,
          message: "Prescription not found",
        },
        { status: 404 }
      );
    }

    return Response.json(
      {
        success: true,
        data: prescription,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get Prescription Error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to fetch prescription",
      },
      { status: 500 }
    );
  }
}


//----------------------------------

export async function PATCH(req: Request, { params }: Params) {
  try {
    const { id } = await params;
    const body = await req.json();

    const prescription = await editPrescription(id, body);

    if (!prescription) {
      return Response.json(
        {
          success: false,
          message: "Prescription not found",
        },
        { status: 404 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Prescription updated successfully",
        data: prescription,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update Prescription Error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to update prescription",
      },
      { status: 500 }
    );
  }
}

//----------------------------------------------

export async function DELETE(req: Request, { params }: Params) {
  try {
    const { id } = await params;

    const prescription = await removePrescription(id);

    if (!prescription) {
      return Response.json(
        {
          success: false,
          message: "Prescription not found",
        },
        { status: 404 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Prescription deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete Prescription Error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to delete prescription",
      },
      { status: 500 }
    );
  }
}