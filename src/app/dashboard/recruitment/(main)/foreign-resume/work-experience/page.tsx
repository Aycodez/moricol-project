import { routes } from "@/constants/routes";
import WorkExperienceClient from "../../../_components/work-experience-client";
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

export const metadata = {
  title: "Work Experience | Foreign Resume",
  description: "add or edit your work experience for Foreign Resume",
};

export default async  function WorkExperience() {
  const work_experience = await getForeignResume();
  return (
    <WorkExperienceClient
      work_experience={work_experience ?? []}
      type="foreign"
      next_route={routes.RECRUITMENT_FOREIGN_WORK_EXPERIENCE + "/more"}
    />
  );
}
