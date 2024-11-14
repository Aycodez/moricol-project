"use client";
import { useState } from "react";
import SearchAndFilter from "./jobs/search-filter";
import JobListings from "./jobs/jobs-listing";
import { FilterValues } from "@/definition";
import { JobPostResponse } from "@/definition";



export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  postedDate: string;
  job_type: "fulltime" | "parttime" | "contract";
  job_level: "senior" | "junior";
  logo: string;
  starred: boolean;
}



export default function SavedJobsClient({ savedPosts }: { savedPosts: { jobpostid: JobPostResponse }[] }) {

  const [jobList, setJobList] = useState(savedPosts);



  const filterApplications = (filters: FilterValues) => {

    if (filters.job_types.length === 0 &&
      filters.job_level.length === 0 &&
      filters.job_titles.length === 0 &&
      filters.state === '' &&
      filters.max_salaries.length === 0 &&
      filters.min_salaries.length === 0) {
      setJobList(savedPosts);
      return;
    }

    const filteredList = savedPosts.filter(({ jobpostid: job }) => {
      return (
        filters.job_types.includes(job.job_type as never) ||
        filters.job_level.includes(job.job_level as never) ||
        filters.job_titles.includes(job.candidate_title as never) ||
        filters.state.includes(job.state as never) ||
        filters.max_salaries.includes(job.max_salary as never) ||
        filters.min_salaries.includes(job.min_salary as never)
      );
    });
    setJobList(filteredList);
  };


  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1">
        <SearchAndFilter
          handleFilterJobs={filterApplications}
        />

        <JobListings malformedJobs={jobList} />
      </div>
    </div>
  );
}
