import React from "react";
import ResumeClient from "../../_component/resume-client";
import { getUserSession } from "@/lib/auth";
import { UserResumeResponse } from "@/definition";
import resumeApi from "@/api/local-resume";

export const metadata = {
  title: "Your Resume | Moricol",
  description: "Resume you have created on Moricol",
};



async function getResume() {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }
  try {
    const { data: local }: { data: UserResumeResponse } = await resumeApi.retrieveResume({ userId: session.user.id as string, type: 'local' });
    const { data: foreign }: { data: UserResumeResponse } = await resumeApi.retrieveResume({ userId: session.user.id as string, type: 'foreign' });

    return { local, foreign }
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}


async function Resume() {
  const resume = await getResume();

  return (
    <div className="min-h-screen">
      <ResumeClient resume={resume} />
    </div>
  );
}

export default Resume;
