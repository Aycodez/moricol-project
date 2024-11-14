import React from "react";
import { routes } from "@/constants/routes";
import MoreWorkExperienceClient from "../../../resume/work-experience/more/_components/more-client";
import { getUserSession } from "@/lib/auth";
import { UserResumeResponse } from "@/definition";
import resumeApi from "@/api/local-resume";



async function getForeignResume() {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }
  try {
    const {data} : {data: UserResumeResponse} = await resumeApi.retrieveResume({ userId: session.user.id as string, type: 'foreign' });
    
    return data?.work_experience ?? null
  } catch (error) {    
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}


async function MoreWorkExperience() {
  const work_experience = await getForeignResume();
  
  return (
    <MoreWorkExperienceClient
      work_experience={work_experience ?? []}
      type="foreign"
      next_route={routes.RECRUITMENT_FOREIGN_EDUCATION}
      more_route={routes.RECRUITMENT_FOREIGN_WORK_EXPERIENCE}
    />
  );
}

export default MoreWorkExperience;
