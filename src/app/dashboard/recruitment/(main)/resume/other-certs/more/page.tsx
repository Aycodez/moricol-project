import React from "react";
import MoreOtherCertClient from "./_component/more-client";
import { routes } from "@/constants/routes";
import { getUserSession } from "@/lib/auth";
import resumeApi from "@/api/local-resume";
import { UserResumeResponse } from "@/definition";

async function getCertifications() {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }
  try {
      const { data } : {data: UserResumeResponse} = await resumeApi.retrieveResume({ userId: session.user.id as string, type: 'local' });
      return data.certification;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

export const metadata = {
  title: 'More Certificates',
  description: 'Add or edit your additional certificates'
};

async function MoreOtherCert() {
  const certifications = await getCertifications();
  return (
    <MoreOtherCertClient
      type="local"
      next_route={routes.RECRUITMENT_FOREIGN_REF}
      more_route={routes.RECRUITMENT_FOREIGN_OTHER_CERTS}
      otherCerts={certifications ?? []}
    />
  );
}

export default MoreOtherCert;
