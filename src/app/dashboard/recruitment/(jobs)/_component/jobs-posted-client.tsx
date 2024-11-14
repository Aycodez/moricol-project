"use client";

import { useState, useMemo } from "react";
import Button from "@/components/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { JobPostResponse } from "@/definition";
import { ShadButton } from "@/components/shadcn-button";
import MakePaymentButton from "./make-payment-button";



export default function JobsPostedClient({ unhired_jobposts, hired_jobposts }: { unhired_jobposts: JobPostResponse[], hired_jobposts: JobPostResponse[] }) {

  const [jobPosts] = useState<Record<string, JobPostResponse[]>>({ unhired: unhired_jobposts, hired: hired_jobposts });

  const [activeTab, setActiveTab] = useState<"unhired" | "hired">("unhired");
  const [sortOrder, setSortOrder] = useState("newest");



  const filteredAndSortedJobs = useMemo(() => {
    return jobPosts[activeTab]
      .sort((a, b) => {
        if (sortOrder === "newest") {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        } else {
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        }
      });
  }, [activeTab, sortOrder]);



  return (
    <div className="min-h-screen">
      <div className="mb-6 flex items-center justify-end">
        <Link href={routes.RECRUITMENT_EMPLOYER}>
          <Button className="w-fit bg-primary-500 text-sm text-white hover:bg-primary-600">
            CREATE A NEW JOB POSTING
          </Button>
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="flex border-b">
          <button
            className={`flex-1 px-4 py-2 ${activeTab === "unhired" ? "bg-primary-500 text-white" : "bg-gray-100"}`}
            onClick={() => setActiveTab("unhired")}
          >
            Ongoing Jobs
          </button>
          <button
            className={`flex-1 px-4 py-2 ${activeTab === "hired" ? "bg-primary-500 text-white" : "bg-gray-100"}`}
            onClick={() => setActiveTab("hired")}
          >
            Hired Jobs
          </button>
        </div>

        <div className="p-4 capitalize">
          <div className="mb-4 flex justify-between">
            <h1 className="font-bold md:text-2xl">My Posted Job List</h1>

            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company Name</TableHead>
                <TableHead>Job Title</TableHead>
                <TableHead>Date posted</TableHead>
                <TableHead>Job Post Ends</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedJobs.map((job) => (
                <TableRow key={job._id}>
                  <TableCell>{job.company_name}</TableCell>
                  <TableCell>
                    <Link className="underline" href={`${routes.RECRUITMENT_JOBS + '/details'}/${job._id}`}>
                      {job.candidate_title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {new Date(job.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {new Date(job.end_date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {job.status.toUpperCase() !== 'PAY' && <ShadButton
                      className={`w-full px-5 py-1 text-lgfont-semibold uppercase ${job.status === "PAY"
                        ? "bg-green-500 text-white"
                        : job.status.toUpperCase() === "PENDING"
                          ? "bg-primary-500 text-white"
                          : job.status.toUpperCase() === "DENIED"
                            ? "bg-red-500 text-white"
                            : "bg-primary-500 text-white"
                        }`}
                    >
                      {job.status.toUpperCase()}
                    </ShadButton>}
                    {job.status.toUpperCase() === 'PAY' &&
                      <MakePaymentButton jobpostid={job._id} price={job.price} status={job.status} />
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
