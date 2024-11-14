"use client";
import { useState } from "react";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import ContentLayout from "./content-layout";
import { Education, ResumeType } from "@/definition";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import resumeApi from "@/api/local-resume";


export default function EducationClient({
  education,
  next_route,
  type
}: {
  education: Education[];
  next_route: string;
  type: ResumeType;
}) {
  const [inView, setInView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    start_date: "",
    end_date: "",
    course_description: "",
    what_you_learnt: "",
    inview: false
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
    if (!formData.school) {
      enqueueSnackbar("School is required", { variant: 'warning' });
      return;
    }

    if (!formData.degree) {
      enqueueSnackbar("Degree is required", { variant: 'warning' });
      return;
    }

    if (!formData.start_date) {
      enqueueSnackbar("Start date is required", { variant: 'warning' });
      return;
    }

    if (!inView && !formData.end_date) {
      enqueueSnackbar("End date is required", { variant: 'warning' });
      return;
    }

    // if (formData.course_description.length < 70) {
    //   enqueueSnackbar("Course description must be at least 70 characters", { variant: 'warning' });
    //   return;
    // }

   
    try {
      setIsLoading(true);
      let educationData;
      if (education instanceof Array) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        educationData = [...education.map(({_id, ...rest}) => rest), {...formData, inview: inView}];
      } else {
        educationData = [{...formData, inview: inView}];
      }
      
      await resumeApi.updateEducation({
        userId: data?.user?.id as string,
        type: type,
        education: educationData as Education[],
          session: data as Session
        });
      


      enqueueSnackbar("Education added successfully", { variant: 'success' });
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
      pageTitle="Academic History"
      step={3}
      isLoading={isLoading}
      nextFunction={handleSubmit}
    >
      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <div>
              <Label
                htmlFor="school"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                School
              </Label>
              <Input
                type="text"
                id="school"
                name="school"
                value={formData.school}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 p-2 focus:p-2"
                placeholder="University of Ife"
              />
            </div>
            <div>
              <div>
                <Label
                  htmlFor="degree"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Degree/Specialization
                </Label>
                <Input
                  type="text"
                  id="degree"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 p-2 focus:p-2"
                  placeholder="BS Accounting"
                />
              </div>

              <div className="flex items-center pt-5">
                <Input
                  type="checkbox"
                  id="inView"
                  checked={inView}
                  onChange={(e) => setInView(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                />
                <Label
                  htmlFor="inView"
                  className="ml-2 block text-sm text-gray-900"
                >
                  in view
                </Label>
              </div>
            </div>
             <div>
                <Label
                  htmlFor="degree"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Course
                </Label>
                <Input
                  type="text"
                  id="what_you_learnt"
                  name="what_you_learnt"
                  value={formData.what_you_learnt}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 p-2 focus:p-2"
                  placeholder="Pharmacy"
                />
              </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <Label
                  htmlFor="start_date"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  School Started
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
                  School Ended
                </Label>
                <Input
                  type="date"
                  id="end_date"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleChange}
                  disabled={inView}
                  className="w-full rounded border border-gray-300 p-2 focus:p-2"
                />
              </div>
            </div>
           
          </div>

          <div>
            <Label
              htmlFor="course_description"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Course Description
            </Label>
            <Textarea
              id="course_description"
              name="course_description"
              value={formData.course_description}
              onChange={handleChange}
              rows={8}
              className="w-full rounded border border-gray-300 p-2 focus:p-2"
              placeholder="Studied accounting principles in Taxation"
            />
            <p className="mt-1 text-sm text-gray-500">Required</p>
            {/* <p className="mt-1 text-sm text-gray-500">Minimum 70 characters</p> */}
          </div>
        </div>
      </form>
    </ContentLayout>
  );
}
