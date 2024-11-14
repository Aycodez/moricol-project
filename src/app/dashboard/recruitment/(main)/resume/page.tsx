import React from "react";
import Bio from "../../_components/bio";
import { routes } from "@/constants/routes";
import { getUserSession } from "@/lib/auth";
import resumeApi from "@/api/local-resume";
import { UserResumeResponse } from "@/definition";

async function getResume() {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }
  try {
    const {data} : {data: UserResumeResponse} = await resumeApi.retrieveResume({ userId: session.user.id as string, type: 'local' });
    
    return data?.bio ?? null
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

export const metadata = {
  title: 'Add or edit your bio',
  description: 'Add or edit your bio'
};

async   function Resume() {
  let bio = await getResume();
  if (!bio) {
    bio = ''
  }
  return <Bio type="local" next_route={routes.RECRUITMENT_WORK_EXPERIENCE} bio={bio} />;
}

export default Resume;
