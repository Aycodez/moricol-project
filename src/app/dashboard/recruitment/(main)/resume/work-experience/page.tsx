import { routes } from "@/constants/routes";
import WorkExperienceClient from "../../../_components/work-experience-client";
import { getUserSession } from "@/lib/auth";
import resumeApi from "@/api/local-resume";

 async function getResume() {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }
  try {
    const {data}  = await resumeApi.retrieveResume({ userId: session.user.id as string, type: 'local' });
    
    return data.work_experience;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

export const metadata = {
  title: 'Work Experience',
  description: 'Add or edit your work experience details'
};


export default async function WorkExperience() {
  const work_experience = await getResume();
  return (
    <WorkExperienceClient
      type="local"
      work_experience={work_experience}
      next_route={routes.RECRUITMENT_WORK_EXPERIENCE + "/more"}
    />
  );
}
