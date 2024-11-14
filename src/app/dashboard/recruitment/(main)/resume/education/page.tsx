import React from "react";
import EducationClient from "../../../_components/education-client";
import { routes } from "@/constants/routes";
import { getUserSession } from "@/lib/auth";
import resumeApi from "@/api/local-resume";

async function getResume() {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }
  try {
    const {data}  = await resumeApi.retrieveResume({ userId: session.user.id as string, type: 'local' });
    
    return data.education;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

export const metadata = {
  title: 'Education',
  description: 'Add or edit your education'
};

async function Education() {
  const education = await getResume();
  return (
    <EducationClient
      type="local"
      education={education ?? [] }
      next_route={routes.RECRUITMENT_EDUCATION + "/more"}
    />
  );
}

export default Education;
