import React from "react";
import JobApplicationsClient from "../../_component/job-applications-client";
import { getUserSession } from "@/lib/auth";
import jobsApi from "@/api/jobs";
export const revalidate = 10;


export const metadata = {
  title: "Job Applications | Moricol",
  description: "Job applications you have submitted on Moricol",
};

async function getJobApplications() {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }
  try {
    const { data: applications } = await jobsApi.retrieveMyJobApplication(session.user.id as string, session);

    return applications;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

const JobApplications = async () => {
  const applications = await getJobApplications();

  return (
    <div className="min-h-screen">
      <JobApplicationsClient applications={applications} />
    </div>
  );
}

export default JobApplications;
