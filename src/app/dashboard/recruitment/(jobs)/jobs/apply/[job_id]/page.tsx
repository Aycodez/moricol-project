import jobsApi from "@/api/jobs";
import resumeApi from "@/api/local-resume";
import { routes } from "@/constants/routes";
import { JobPostResponse, UserResumeResponse } from "@/definition";
import { getUserSession } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import CredentialsApply from "../../../_component/credentials-apply";
import ApplyWithResume from "../../../_component/apply-with-resume";

export const metadata = {
  title: "Apply for Job",
  description: "Apply for a job with your credentials",
};

async function getResume(job_id: string,) {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }

  const uid = session.user.id as string;

  try {
    const { data: singleJob }: { data: JobPostResponse } = await jobsApi.retrieveSingleJobPost(uid, job_id, session);
    const { data: local }: { data: UserResumeResponse } = await resumeApi.retrieveResume({ userId: uid, type: 'local' });
    const { data: foreign }: { data: UserResumeResponse } = await resumeApi.retrieveResume({ userId: uid, type: 'foreign' });

    return { local, foreign, singleJob }
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}
async function ApplyJob({ params }: { params: { job_id: string } }) {
  const { local, foreign, singleJob } = await getResume(params.job_id);

  return (
    <div className="relative min-h-screen">

      <h1 className="text-2xl">Applying For : <span className="text-gray-500 capitalize font-semibold ">{singleJob.candidate_title}, </span> {singleJob.company_name}</h1>
      <p className="text-gray-500 text-sm capitalize">{singleJob.job_type} | {singleJob.job_level}</p>

      <br />
      <h2 className="font-semibold">APPLY WITH YOUR CREDENTIALS</h2>
      {/* <FileInput title="" caption="Upload Cover Letter" />
      <FileInput title="" caption="Upload CV" /> */}
      <CredentialsApply job_id={params.job_id} />


      <div className="flex w-full items-center gap-3 py-5">
        <div className="w-full border-t border-black/20" />
        <p>OR</p>
        <div className="w-full border-t border-black/20" />
      </div>

      <div>
        <h1 className="font-semibold">APPLY WITH YOUR MORICOL RESUME</h1>
        <p>Select which resume you have created to be used to apply for this job</p>
      </div>


      <ApplyWithResume job_id={params.job_id} local={local} foreign={foreign} />

      <Link href={routes.RECRUITMENT_JOBS_RESUME} className="px-4 text-md hover:text-yellow-500 py-2 underline font-semibold text-gray-700 hover:bg-gray-50">
        VIEW YOUR SAVED RESUME
      </Link>

    </div>
  );
}

export default ApplyJob;
