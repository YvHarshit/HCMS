import { NextRequest } from "next/server";
import { verifyToken, JwtPayload } from "./jwt";

export function authenticateRequest(req: NextRequest): JwtPayload {
  const token = req.cookies.get("token")?.value;

  if (!token)  
    throw new Error("Not authorized, login again");  

  return verifyToken(token);
}