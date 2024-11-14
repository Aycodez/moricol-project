import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const getUserSession = async () => {
  return await getServerSession(authOptions);
}