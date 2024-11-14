import React from "react";
import OtherCertificateClient from "../../../_components/other-cert-client";
import { routes } from "@/constants/routes";
import { getUserSession } from "@/lib/auth";

import { UserResumeResponse } from "@/definition";
import resumeApi from "@/api/local-resume";

async function getForeignResume() {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }
  try {
    const {data} : {data: UserResumeResponse} = await resumeApi.retrieveResume({ userId: session.user.id as string, type : 'foreign' });
    return data.certification;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

async function OtherCerts() {
  const otherCerts = await getForeignResume();
  
  return (
    <OtherCertificateClient
      next_route={routes.RECRUITMENT_FOREIGN_OTHER_CERTS + "/more"}
      otherCerts={otherCerts ?? []}
      type="foreign"

    />
  );
}

export default OtherCerts;
