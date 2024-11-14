import React from "react";
import JobsPostedClient from "../../_component/jobs-posted-client";
import { getUserSession } from "@/lib/auth";
import jobsApi from "@/api/jobs";
import { JobPostResponse } from "@/definition";


export const revalidate = 10

export const metadata = {
  title: "My Posted Jobs | Moricol",
  description: "Jobs you have posted on Moricol",
};

async function getJobPosts() {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }
  try {
    const { data: unhired_jobposts }: { data: JobPostResponse[] } = await jobsApi.myJobPost(session.user.id as string, false, session);
    const { data: hired_jobposts }: { data: JobPostResponse[] } = await jobsApi.myJobPost(session.user.id as string, true, session);

    return { unhired_jobposts, hired_jobposts };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

const JobsPosted = async () => {
  const jobposts = await getJobPosts();

  return <JobsPostedClient unhired_jobposts={jobposts.unhired_jobposts} hired_jobposts={jobposts.hired_jobposts} />;
}

export default JobsPosted;
