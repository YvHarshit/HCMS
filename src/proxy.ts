import { NextResponse } from "next/server";
import connectDB from "./lib/db";

export function proxy() {
  console.log("Middleware Running.........")
  connectDB()

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};


// export async function proxy(request: NextRequest) {
//   console.log("Proxy Request...");

//   const path = request.nextUrl.pathname;
//   const isApiRoute = path.startsWith('/api/');
//   const isPublicPath = path === '/api/auth/' || path === '/api/auth/';
//   const token = request.cookies.get('token')?.value || '';

 
//   if (isApiRoute) {
//     if (!token && !isPublicPath) {
//       return NextResponse.json(
//         { success: false, message: "Unauthorized - Please log in" },
//         { status: 401 }
//       );
//     }
//     return NextResponse.next();
//   }

//   if (isPublicPath && token) {
//     return NextResponse.redirect(new URL('/', request.nextUrl));
//   }

//   if (!isPublicPath && !token) {
//     return NextResponse.redirect(new URL('/login', request.nextUrl));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/',
//     '/login',
//     '/patient',
//     '/doctor',
//     '/hospitalAdmin',
//     '/signup',
//     '/api/:path*' 
//   ],
// };
