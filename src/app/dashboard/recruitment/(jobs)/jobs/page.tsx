
import React from "react";
import AllJobsClient from "../../_components/jobs/all-jobs-client";



export const metadata = {
  title: "All Jobs available for you | Moricol",
  description: "Find your dream job with Moricol",
};




async function Jobs({ searchParams }: { searchParams: { type: string } }) {

  return (
    <div>
      <AllJobsClient type={searchParams.type} />
    </div>
  );
}

export default Jobs;
