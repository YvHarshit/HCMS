import { logoutDoctor } from "@/app/controllers/doctor.controller";


export function GET() {
    return Response.json ({
        message : "Logout Route"
    })
}

// export async function POST(req: NextRequest) {    
//     try {
//         const cookieStore = await cookies();
//         cookieStore.delete("token");
        
//         return NextResponse.json({
//             success: true,
//             message: "Logged out successfully."
//         });
        
//     }
//     catch (error : unknown) {
//         if(error instanceof Error) {
//             console.log("Error message : ", error.message)
//             console.log("Error stack : ", error.stack)
//         }
//         else console.log("Un-expected Error : ", error)

//         return NextResponse.json ({
//             success : false ,
//             message : "Logout failed."
//         }, { status: 500 })
        
//     }
// }

//==================== Another Method =====================
// try {
//         const response = NextResponse.json({
//             success: true,
//             message: "Logged out successfully."
//         });

//         response.cookies.delete("token");
//         return response;        
//     } 


export async function POST() {
  return await logoutDoctor();
}