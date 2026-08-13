import { cookies } from "next/headers";
import { verifyToken } from "./jwt";

export async function authCheck() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  try {
    const user = verifyToken(token);

    return user;
  } catch {
    throw new Error("Invalid or expired token");
  }
}