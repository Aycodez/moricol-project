"use client";
import { useState } from "react";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import ContentLayout from "./content-layout";
import { Certification, ResumeType, UserResumeResponse } from "@/definition";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import resumeApi from "@/api/local-resume";

import { Session } from "next-auth";

export default function OtherCertificateClient({
  next_route,
  otherCerts,
  type,
  order
}: {
  next_route: string;
  otherCerts: UserResumeResponse['certification'];
  type: ResumeType;
  order?: number;
}) {
  const router = useRouter();
  const { data: session } = useSession();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState<Omit<Certification, '_id'>>({
    training_type: "",
    course_learnt: "",
    start_date: "",
    end_date: "",
    course_description: "",
    grade: "",
    inview: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      inview: e.target.checked
    }));
  };

  const handleSubmit = async () => {
    if (!session?.user?.id) {
      enqueueSnackbar("User session not found", { variant: "error" });
      return;
    }

    // Validation
    if (!formData.training_type || !formData.course_learnt || !formData.start_date || (!formData.inview && !formData.end_date)) {
      enqueueSnackbar("Please fill in all required fields", { variant: "error" });
      return;
    }

    if (formData.course_description.length < 70) {
      enqueueSnackbar("Description must be at least 70 characters", { variant: "error" });
      return;
    }

    try {
      let payload;

      if (otherCerts instanceof Array) {
       payload = {
        userId: session.user.id as string,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        certification: [...otherCerts.map(({_id, ...rest}) => rest), {...formData}],
        session: session as Session
      };
      } else {
        payload = {
          userId: session.user.id as string,
          certification: [formData],
          session: session as Session
        };
      }

      setIsLoading(true);

        await resumeApi.updateCertification({...payload, type: type});
     

      enqueueSnackbar("Certificate added successfully", { variant: "success" });
      router.push(next_route);
    } catch (error) {
      console.error("Error adding certificate:", error);
      enqueueSnackbar("Failed to add certificate", { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContentLayout
      next_route={next_route}
      pageTitle="Other Certificates"
      step={order ?? 3}
      nextFunction={handleSubmit}
      isLoading={isLoading}
    >
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <div>
              <Label
                htmlFor="bootcampOrOnlineLearning"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Bootcamp/Online Learning
              </Label>
              <Input
                type="text"
                id="bootcampOrOnlineLearning"
                name="training_type"
                value={formData.training_type}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 p-2 focus:p-2"
                placeholder="e.g. Udacity, Coursera, edX"
              />
            </div>
            <div>
              <Label
                htmlFor="courseLearnt"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Course Learnt
              </Label>
              <Input
                type="text"
                id="courseLearnt"
                name="course_learnt"
                value={formData.course_learnt}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 p-2 focus:p-2"
                placeholder="e.g. Full Stack Web Development"
              />
            </div>
            <div>
              <Label
                htmlFor="grade"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Grade/Score
              </Label>
              <Input
                type="text"
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 p-2 focus:p-2"
                placeholder="e.g. A, 95%, Pass"
              />
            </div>
            <div className="flex items-center">
              <Input
                type="checkbox"
                id="inview"
                name="inview"
                checked={formData.inview}
                onChange={handleCheckboxChange}
                className="h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
              />
              <Label
                htmlFor="inview"
                className="ml-2 block text-sm text-gray-900"
              >
                In Progress
              </Label>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <Label
                  htmlFor="schoolStarted"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  School Started
                </Label>
                <Input
                  type="date"
                  id="schoolStarted"
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 p-2 focus:p-2"
                />
              </div>
              <div>
                <Label
                  htmlFor="schoolEnded"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  School Ended
                </Label>
                <Input
                  type="date"
                  id="schoolEnded"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleChange}
                  disabled={formData.inview}
                  className="w-full rounded border border-gray-300 p-2 focus:p-2"
                />
              </div>
            </div>
          </div>

          <div>
            <Label
              htmlFor="description"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Description
            </Label>
            <Textarea
              id="description"
              name="course_description"
              rows={8}
              value={formData.course_description}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 focus:p-2"
              placeholder="Describe the skills and knowledge gained from this course or bootcamp"
            />
            <p className="mt-1 text-sm text-gray-500">Minimum 70 characters</p>
          </div>
        </div>
      </form>
    </ContentLayout>
  );
}
