import { BiStar } from "react-icons/bi";
import Link from "next/link";
import { routes } from "@/constants/routes";
import { JobPostResponse } from "@/definition";
import SaveJobButton from "../../(jobs)/_component/save-job-button";

interface JobListingsProps {
  jobs?: JobPostResponse[]
  malformedJobs?: { jobpostid: JobPostResponse }[];
}

const JobListings: React.FC<JobListingsProps> = ({ jobs, malformedJobs }) => {

  return (
    <div className="space-y-4 capitalize">
      {jobs && jobs.map((job) => (
        <JobListing key={job._id} job={job} />
      ))}
      {malformedJobs && malformedJobs.map(({ jobpostid: job }) => (
        <JobListing key={job._id} job={job} />
      ))}
    </div>
  );
};

export default JobListings;




function JobListing({ job }: { job: JobPostResponse }) {
  return <div
    className="rounded-lg bg-white p-4 shadow-sm xl:flex xl:justify-between"
  >
    <div className="mb-2 flex items-center">
      <SaveJobButton job_id={job._id} Icon={BiStar} />
      <img
        src={job.company_logo}
        alt={job.company_name}
        className="mr-4 h-12 w-12 rounded-full"
      />
      <div>
        <Link href={routes.RECRUITMENT_JOBS + "/details/" + job._id}>
          <h2 className="text-lg font-semibold">{job.candidate_title}</h2>
        </Link>
        <p className="text-gray-600">
          {job.company_name} • {job.state}, {job.country} • {job.start_date}
        </p>
      </div>
    </div>
    <div className="mt-2 flex flex-wrap items-center justify-between gap-x-4">
      <div className="mb-2 flex flex-wrap gap-2 md:mb-0">
        <span
          className={`rounded-full px-3 py-1 text-sm ${job.job_type === "Full Time" ? "bg-blue-100 text-blue-800" : "bg-pink-100 text-pink-800"}`}
        >
          {job.job_type}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-sm ${job.job_level === "Senior Level" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}
        >
          {job.job_level}
        </span>
      </div>
      <Link
        href={routes.RECRUITMENT_JOBS + "/details/" + job._id}
        className="w-fit rounded-lg bg-yellow-500 px-4 py-2 text-white transition duration-300 hover:bg-yellow-600 md:w-auto"
      >
        Apply Now
      </Link>
    </div>
  </div>
}