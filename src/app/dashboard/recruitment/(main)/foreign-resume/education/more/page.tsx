import React from "react";
import MoreEducationClient from "../../../resume/education/more/_components/more-client";
import { routes } from "@/constants/routes";
import { getUserSession } from "@/lib/auth";
import resumeApi from "@/api/local-resume";


async function getForeignResume() {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }
  try {
    const {data}  = await resumeApi.retrieveResume({ userId: session.user.id as string, type: 'foreign' });
    
    return data.education;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

async function MoreEducation() {
  const education = await getForeignResume();
  return (
    <MoreEducationClient
      education={education ?? []}
      type="foreign"
      next_route={routes.RECRUITMENT_FOREIGN_OTHER_CERTS}
      more_route={routes.RECRUITMENT_FOREIGN_EDUCATION}
    />
  );
}

export default MoreEducation;
