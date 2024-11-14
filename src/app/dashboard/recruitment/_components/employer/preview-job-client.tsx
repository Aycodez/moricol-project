import CreateJobSuccessModal from "./create-job-success-modal";
import jobsApi, { CreateJobParams } from "@/api/jobs";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import { CLOUDINARY_PRESET, CLOUDINARY_URL } from "@/constants/config";


interface PreviewJobClientProps {
  goBack: () => void;
  formData: Omit<CreateJobParams, "userid" | "jobpostid" | "session">;
  job_id: string | null;
}

const uploadToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_PRESET!);

  const response = await fetch(CLOUDINARY_URL!, {
    method: 'POST',
    body: formData
  });
  const data = await response.json();
  return data.url;
};


export default function PreviewJobClient({ goBack, formData, job_id }: PreviewJobClientProps) {
  const { data: session } = useSession();
  const handleCreateJob = async () => {
    const logoUrl = await uploadToCloudinary(formData.company_logo as unknown as File);
    if (job_id) {
      await jobsApi.updateJobPost({ ...formData, userid: session?.user?.id as string, session: session as Session, company_logo: logoUrl, jobpostid: job_id });
    } else {
      await jobsApi.createJobPost({ ...formData, userid: session?.user?.id as string, session: session as Session, company_logo: logoUrl });
    }
  }

  return (
    <>
      <div className="min-h-screen">
        <div className="">
          <div className="rounded-lg bg-white py-6">
            <div className="mb-6 flex flex-col items-start justify-between md:flex-row md:items-center">
              <div>
                <h1 className="mb-2 text-2xl font-bold">{formData.candidate_title}</h1>
                <p className="text-gray-600">
                  {formData.state} {', '} {formData.country} <span className="text-gray-400">|</span> {formData.job_type}
                </p>
              </div>

            </div>

            <div className="mb-8 grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4">
              <JobDetail
                title="Experience (Years)"
                value={formData.min_experience.toString()}
              />
              <JobDetail title="Job Level" value={formData.job_level} />
              <JobDetail
                title="Month Max Salary"
                value={formData.max_salary.toString()}
              />
              <JobDetail
                title="Month Min Salary"
                value={formData.min_salary.toString()}
              />
            </div>
            <div className="mb-8 grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4">
              <JobDetail
                title="Qualifications required"
                value={formData.academic_qualification.join(", ")}
              />
              <JobDetail title="Gender" value={formData.gender.join(", ")} />
              <JobDetail
                title="Marital Status"
                value={formData.marital_status.join(", ")}
              />
              <JobDetail title="Religion" value={formData.religion.join(", ")} />
            </div>
          </div>

          <div className="rounded-lg border-t bg-white py-6 whitespace-pre-wrap">
            <h2 className="mb-4 text-xl font-semibold">Description</h2>
            <p className="text-gray-700 whitespace-pre-wrap break-words">{formData.description}</p>
          </div>

          <div className="mb-8 rounded-lg border-t bg-white py-6 whitespace-pre-wrap">
            <h2 className="mb-4 text-xl font-semibold">Requirements</h2>
            <ul className="list-inside list-disc whitespace-pre-wrap break-words space-y-2 text-gray-700">
              <li>{formData.requirement}</li>
            </ul>
          </div>

          <div className="mt-4 flex items-center py-6 md:mt-0">
            <CreateJobSuccessModal isEdit={job_id} createFunction={handleCreateJob} goBack={goBack} />
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
