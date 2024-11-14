import { JobPostResponse } from "@/definition";
import EmployerJobClient from "./_components/employer-job-client";
import { getUserSession } from "@/lib/auth";
import jobsApi from "@/api/jobs";

export const metadata = {
  title: "Create a job post | Employer",
  description: "Create a job post on Moricol",
};

async function getJobPost(job_id: string) {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }
  try {
    const { data: jobpost }: { data: JobPostResponse } = await jobsApi.retrieveSingleJobPost(session.user.id as string, job_id, session);

    return jobpost;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

export default async function Employer({ searchParams }: { searchParams: { job: string } }) {
  const jobpost = searchParams.job ? await getJobPost(searchParams.job) : null;

  return (
    <EmployerJobClient jobpost={jobpost} />
  );
}

