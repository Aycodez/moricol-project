"use client";
import { useState } from "react";
// import { BiStar } from "react-icons/bi";
import Link from "next/link";
import { routes } from "@/constants/routes";
import SearchAndFilter from "../../_components/jobs/search-filter";
import { FilterValues, JobPostResponse } from "@/definition";
import NoJobsFound from "../../_components/jobs/no-jobs-found";


export default function JobApplicationsClient({ applications }: { applications: { jobpostid: JobPostResponse }[] }) {

  const [applicationList, setApplicationList] = useState(applications ?? []);


  // const toggleStar = (id: number) => {
  //   setApplicationList((prevApplications) =>
  //     prevApplications.map((application) =>
  //       application.id === id
  //         ? { ...application, starred: !application.starred }
  //         : application,
  //     ),
  //   );
  // };

  const filterApplications = (filters: FilterValues) => {

    if (filters.job_types.length === 0 &&
      filters.job_level.length === 0 &&
      filters.job_titles.length === 0 &&
      filters.state === '' &&
      filters.max_salaries.length === 0 &&
      filters.min_salaries.length === 0) {
      setApplicationList(applications);
      return;
    }

    const filteredList = applications.filter((application) => {
      return (
        filters.job_types.includes(application.jobpostid.job_type as never) ||
        filters.job_level.includes(application.jobpostid.job_level as never) ||
        filters.job_titles.includes(application.jobpostid.candidate_title as never) ||
        filters.state.includes(application.jobpostid.state as never) ||
        filters.max_salaries.includes(application.jobpostid.max_salary as never) ||
        filters.min_salaries.includes(application.jobpostid.min_salary as never)
      );
    });
    setApplicationList(filteredList);
  };

  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1">
        <SearchAndFilter
          handleFilterJobs={filterApplications}
        />
        <div className="space-y-4">
          {applicationList.map((application) => (
            <div
              key={application.jobpostid._id}
              className="rounded-lg bg-white p-4 shadow-sm lg:flex lg:justify-between"
            >
              <div className="mb-2 flex items-center">
                {/* <button
                  onClick={() => toggleStar(application.id)}
                  className="mr-4 text-2xl"
                >
                  <BiStar
                    className={
                      application.starred ? "text-yellow-500" : "text-gray-300"
                    }
                  />
                </button> */}
                <img
                  src={application.jobpostid.company_logo}
                  alt={application.jobpostid.candidate_title}
                  className="mr-4 h-12 w-12 rounded-full"
                />
                <div>
                  <Link
                    href={
                      routes.RECRUITMENT_JOBS + "/details/" + application.jobpostid._id
                    }
                  >
                    <h2 className="text-lg font-semibold">
                      {application.jobpostid.candidate_title}
                    </h2>
                  </Link>
                  <p className="text-sm text-gray-600">
                    {application.jobpostid.company_name} • {application.jobpostid.state}{" "}
                    <span className="uppercase text-secondary-500">
                      • CLOSING : {application.jobpostid.end_date}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-x-4">
                <button
                  className={`w-full rounded-lg px-4 py-2 text-white transition duration-300 md:w-auto ${application.jobpostid.status === "Open"
                    ? "bg-green-500 hover:bg-primary-500"
                    : "bg-red-500 hover:bg-secondary-500"
                    }`}
                >
                  {application.jobpostid.status}
                </button>
              </div>
            </div>
          ))}
        </div>
        {applicationList.length === 0 && <NoJobsFound />}

      </div>
    </div>
  );
}
