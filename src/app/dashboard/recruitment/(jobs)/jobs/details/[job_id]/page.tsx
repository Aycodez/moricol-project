import jobsApi from "@/api/jobs";
import { routes } from "@/constants/routes";
import { JobPostResponse } from "@/definition";
import { getUserSession } from "@/lib/auth";
import Link from "next/link";
import SaveJobButton from "../../../_component/save-job-button";


export const revalidate = 10;


export const metadata = {
  title: "My Posted Jobs | Moricol",
  description: "Jobs you have posted on Moricol",
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

export default async function JobDetails({ params }: { params: { job_id: string } }) {
  const jobpost = await getJobPost(params.job_id);
  const session = await getUserSession();
  const postIsMine = jobpost.userid === session?.user?.id;


  return (
    <>
      <div className="min-h-screen">
        <div className="">
          <div className="rounded-lg bg-white p-6">
            <div className="mb-6 flex flex-col items-start justify-between md:flex-row md:items-center">
              <div>
                <h1 className="mb-2 text-2xl capitalize font-bold">{jobpost.candidate_title}</h1>
                <p className="text-gray-600 capitalize">
                  {jobpost.state}, {jobpost.country}
                  <span className="mx-2">•</span>
                  ({jobpost.job_type})
                </p>
              </div>
              <div className="mt-4 flex items-center md:mt-0">
                {!postIsMine && <SaveJobButton job_id={jobpost._id} />}
                {!postIsMine && <Link
                  href={routes.RECRUITMENT_JOBS + "/apply/" + jobpost._id}
                  className="rounded-lg bg-yellow-500 px-6 py-2 text-white transition duration-300 hover:bg-yellow-600"
                >
                  Apply Now
                </Link>}
                {postIsMine && <Link
                  href={routes.RECRUITMENT_EMPLOYER + '?job=' + jobpost._id}
                  className="rounded-lg bg-yellow-500 px-6 py-2 text-white transition duration-300 hover:bg-yellow-600"
                >
                  Edit
                </Link>}
              </div>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4">
              <JobDetail
                title="Experience"
                value={jobpost.min_experience + " years"}
              />
              <JobDetail title="Job Level" value={jobpost.job_level} />
              <JobDetail
                title="Month Gross Salary"
                value={jobpost.max_salary.toLocaleString()}
              />
              <JobDetail
                title="Month Net Salary"
                value={jobpost.min_salary.toLocaleString()}
              />
            </div>
            <div className="mb-8 grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4">
              <JobDetail
                title="Qualification"
                value={jobpost.academic_qualification.join(", ")}
              />
              <JobDetail title="Gender" value={jobpost.gender.join(", ")} />
              <JobDetail
                title="Marital Status"
                value={jobpost.marital_status.join(", ")}
              />
              <JobDetail title="Religion" value={jobpost.religion.join(", ")} />
            </div>
          </div>

          <div className="rounded-lg border-t bg-white p-6">
            <h2 className="mb-4 text-xl font-semibold">Description</h2>
            <p className="text-gray-700 break-all">{jobpost.description}</p>
          </div>

          <div className="mb-8 rounded-lg border-t bg-white p-6">
            <h2 className="mb-4 text-xl font-semibold">Requirements</h2>
            {/* <ul className="list-inside list-disc space-y-2 text-gray-700">
                {jobpost.requirement.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul> */}
            <p className="text-gray-700 break-all">{jobpost.requirement}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function JobDetail({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg bg-gray-50 p-4">
      <h3 className="mb-1 text-sm font-medium text-gray-500">{title}</h3>
      <p className="font-semibold text-gray-900">{value}</p>
    </div>
  );
}
