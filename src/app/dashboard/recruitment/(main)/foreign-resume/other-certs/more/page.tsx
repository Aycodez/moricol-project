import React from "react";
import { routes } from "@/constants/routes";
import { getUserSession } from "@/lib/auth";

import MoreOtherCertClient from "../../../resume/other-certs/more/_component/more-client";
import resumeApi from "@/api/local-resume";

async function getCertifications() {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }
  try {
    const { data } = await resumeApi.retrieveResume({ userId: session.user.id as string, type: 'foreign' });
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
      type="foreign"
      next_route={routes.RECRUITMENT_FOREIGN_REF}
      more_route={routes.RECRUITMENT_FOREIGN_OTHER_CERTS}
      otherCerts={certifications}
    />
  );
}

export default MoreOtherCert;
