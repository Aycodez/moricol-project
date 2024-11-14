"use client";
import { useEffect, useState } from "react";
import SearchAndFilter from "./search-filter";
import JobListings from "./jobs-listing";
import { FilterValues, JobPostResponse } from "@/definition";
import { routes } from "@/constants/routes";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import NoJobsFound from "./no-jobs-found";
import jobsApi from "@/api/jobs";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";


export default function AllJobsClient({ type }: { type: string }) {
  const [jobposts, setJobposts] = useState<JobPostResponse[]>([]);
  const [loading, setLoading] = useState(true);

  const auth: { data: Session | null } = useSession();
  const session = auth.data as Session;

  async function getAllJobs(type: string, filterSelected?: FilterValues) {
    const filterParams = filterSelected
      ? {
        page: 1,
        job_level: filterSelected.job_level as string[],
        job_type: filterSelected.job_types as (
          | "fulltime"
          | "parttime"
          | "contract"
        )[],
        max_salary: filterSelected.max_salaries as number[],
        min_salary: filterSelected.min_salaries as number[],
        state: filterSelected.state as string,
      }
      : {
        state: "",
        job_level: [],
        job_type: [],
        max_salary: [],
        min_salary: [],
      };
    try {
      const { data: jobposts }: { data: JobPostResponse[] } =
        await jobsApi.retrieveAllJobPosts({
          session,
          moricol_job: type !== "general",
          page: 1,
          ...filterParams,
        });
      return jobposts;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  }

  useEffect(() => {
    getAllJobs(type)
      .then(setJobposts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [type]);

  const router = useRouter();

  const handleFilterJobs = (filterSelected: FilterValues) => {
    setLoading(true);
    return getAllJobs(type, filterSelected)
      .then(setJobposts)
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex min-h-[50vh]">
      {/* Main Content */}
      <div className="flex-1">
        <SearchAndFilter handleFilterJobs={handleFilterJobs} />

        {/* Tabs */}

        <div className="flex items-center justify-center">
          <Button
            variant="outline"
            onClick={() => router.replace(routes.RECRUITMENT_JOBS)}
            className={`uppercase ${type !== "general" ? "bg-primary-500 text-white" : "bg-gray-100"}`}
          >
            Careers
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              router.replace(routes.RECRUITMENT_JOBS + "?type=general")
            }
            className={`uppercase ${type === "general" ? "bg-primary-500 text-white" : "bg-gray-100"}`}
          >
            General Job
          </Button>
        </div>
        {!loading && <JobListings jobs={jobposts} />}
        {loading && (
          <div className="flex h-[300px] items-center justify-center">
            <Loader2 className="animate-spin" />
          </div>
        )}
        {jobposts.length === 0 && !loading && <NoJobsFound />}
      </div>
    </div>
  );
}
