"use client";
import { useState } from "react";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import ContentLayout from "./content-layout";
import resumeApi from "@/api/local-resume";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";
import { ResumeType, UserResumeResponse } from "@/definition";


type WorkExperience = UserResumeResponse["work_experience"][number];

export default function WorkExperienceClient({
  next_route,
  work_experience,
  type
}: {
  next_route: string;
  work_experience: WorkExperience[]
  type: ResumeType
}) {

  const [currentlyWork, setCurrentlyWork] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    start_date: "",
    end_date: "",
    previous_employer: "",
    leaving_reason: "nil",
    inview: true
  });

  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { data } = useSession();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // if (formData.leaving_reason.length < 70) {
    //   enqueueSnackbar("Reason for leaving must be at least 70 characters", { variant: 'warning' });
    //   return;
    // }

    if (!formData.title) {
      enqueueSnackbar("Title is required", { variant: 'warning' });
      return;
    }

    if (!formData.company) {
      enqueueSnackbar("Company is required", { variant: 'warning' });
      return;
    }

    if (!formData.start_date) {
      enqueueSnackbar("Start date is required", { variant: 'warning' });
      return;
    }

    if (!currentlyWork) {
      if (!formData.end_date) {
        enqueueSnackbar("End date is required", { variant: 'warning' });
        return;
      }
    }

    if (currentlyWork) {
      formData.leaving_reason = "nil";
      formData.end_date = "Present";
    }

    if (formData.leaving_reason === "") {
      formData.leaving_reason = "nil";
    }


    try {
      setIsLoading(true);
      let WorkExperience;
      if (work_experience instanceof Array) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        WorkExperience = [...work_experience.map(({ _id, ...rest }) => rest), formData];

      } else {
        WorkExperience = [formData];
      }
      // based on type
      await resumeApi.updateWorkExperience({
        userId: data?.user?.id as string,
        type: type,
        workExperience: WorkExperience,
        session: data as Session
      });

      enqueueSnackbar("Work experience added successfully", { variant: 'success' });
      router.push(next_route);
    } catch (error) {
      enqueueSnackbar(error instanceof Error ? error.message : String(error), { variant: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContentLayout
      next_route={next_route}
      pageTitle="Work Experience (Including Study, atleast 10years)"
      step={2}
      isLoading={isLoading}
      nextFunction={handleSubmit}
    >
      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md :grid-cols-2">
          <div>
            <Label
              htmlFor="title"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Title
            </Label>
            <Input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 focus:p-2"
              placeholder="Payable accountant"
            />
          </div>
          <div>
            <Label
              htmlFor="company"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Company
            </Label>
            <Input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 focus:p-2"
              placeholder="Enter company name"
            />
          </div>
        </div>
        <div className="flex items-center">
          <Input
            type="checkbox"
            id="currentlyWork"
            checked={currentlyWork}
            onChange={(e) => setCurrentlyWork(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
          />
          <Label
            htmlFor="currentlyWork"
            className="ml-2 block text-sm text-gray-900"
          >
            I currently work here
          </Label>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Label
              htmlFor="start_date"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Started
            </Label>
            <Input
              type="date"
              id="start_date"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 focus:p-2"
            />
          </div>
          <div>
            <Label
              htmlFor="end_date"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Ended
            </Label>
            <Input
              type="date"
              id="end_date"
              name="end_date"
              value={formData.end_date}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 focus:p-2"
              disabled={currentlyWork}
            />
          </div>
        </div>
        <div>
          <Label
            htmlFor="previous_employer"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Previous Employer
          </Label>
          <Input
            type="text"
            id="previous_employer"
            name="previous_employer"
            value={formData.previous_employer}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 p-2 focus:p-2"
            placeholder="Previous employer name"
          />
        </div>
        <div>
          <Label
            htmlFor="leaving_reason"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Reason for leaving
          </Label>
          <Textarea
            rows={6}
            id="leaving_reason"
            name="leaving_reason"
            value={formData.leaving_reason}
            onChange={handleChange}
            placeholder="Lorem ipsum dolor sit amet consectetur. Faucibus rutrum eget vel viverra eget etiam sit. Dictum vivamus amet diam sit nulla ut mattis pulvinar. Turpis in purus dui gravida risus massa. Sed tortor non diam non aenean gravida turpis."
          />
          <p className="mt-1 text-sm text-gray-500">Minimum 70 characters</p>
        </div>
      </form>
    </ContentLayout>
  );
}
