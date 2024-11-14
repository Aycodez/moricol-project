"use server";

import { routes } from "@/constants/routes";
import { redirect } from "next/navigation";

export async function prescription() {
  redirect(routes.PHARMARCYPRODUCT);
}

export async function refundPolicyAgreement() {
  redirect(routes.PHARMARCYRETURNPRODUCT);
}
