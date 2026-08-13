import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

export interface JwtPayload {
  _id: string;
}

export function createToken(payload: JwtPayload): string {
  return jwt.sign(payload, JWT_SECRET as string, {
    expiresIn: "1d",
  });
}


export function verifyToken(token: string): JwtPayload {
  try { return jwt.verify(token, JWT_SECRET as string ) as JwtPayload;
  } catch {
    throw new Error("Invalid or expired token");
  }
}