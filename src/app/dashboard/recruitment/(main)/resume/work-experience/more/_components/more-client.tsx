"use client";
import ContentLayout from "@/app/dashboard/recruitment/_components/content-layout";
import { ResumeType, UserResumeResponse } from "@/definition";
import Link from "next/link";
import { useState } from "react";
import { BiBriefcase, BiChevronRight } from "react-icons/bi";
import { BsFillPlusSquareFill, BsTrash2 } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import resumeApi from "@/api/local-resume";


type WorkExperience = UserResumeResponse["work_experience"][number];

export default function MoreWorkExperienceClient({
  next_route,
  more_route,
  work_experience,
  type
}: {
  next_route: string;
  more_route: string;
  work_experience: WorkExperience[];
  type: ResumeType
}) {
  const {data} = useSession();
  const {enqueueSnackbar} = useSnackbar();
  const router = useRouter();
    const [experiences, setExperiences] = useState<WorkExperience[]>(work_experience); 
    
 

  const deleteExperience = async(id: string, setLoading: (loading: boolean) => void) => {

    try {
      const userId = data?.user?.id;
      if (!userId) {
        enqueueSnackbar("User session not found", { variant: "error" });
        return;
      }
      await resumeApi.deleteWorkExperience({
        userId,
        type: type,
        dataId: id,
        session: data
      });
      
      setExperiences(experiences.filter(exp => exp._id !== id));
      enqueueSnackbar("Work experience deleted successfully", { variant: "success" });
    } catch (error) {
      console.error("Error deleting work experience:", error);
      enqueueSnackbar("Failed to delete work experience", { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    router.push(next_route);
  };

  return (
    <ContentLayout
      next_route={next_route}
      pageTitle="Your Work Experience"
      step={2}
      nextFunction={handleNext}
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {experiences.map((experience) => (
          <MoreWorkExperienceClientItem key={experience._id} experience={experience} deleteExperience={deleteExperience} />
        ))}

      

        {experiences.length === 0 && (
          <div className="flex flex-col items-center justify-center py-8 text-red-500">
            <p className="text-lg text-secondary-500">No work experience added yet</p>
           
          </div>
        )}

      </div>
      <Link
        href={more_route}
        className="mt-4 flex w-fit items-center font-semibold hover:text-gray-600 transition-colors"
      >
        <BsFillPlusSquareFill className="mr-2" /> Add more work experience
      </Link>
    </ContentLayout>
  );
}




  function MoreWorkExperienceClientItem({experience, deleteExperience}: {experience: WorkExperience, deleteExperience: (id: string, setLoading: (loading: boolean) => void) => void}) {

  const [loading, setLoading] = useState(false);

  const handleDelete = async() => {
    setLoading(true);
    deleteExperience(experience._id, setLoading);
  }

  return  <div key={experience._id}>
            <div className="rounded-lg bg-[#FFF8E7] p-4 shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <BiBriefcase className="text-3xl text-gray-500" />
                  <div>
                    <h3 className="font-semibold">{experience.title}</h3>
                    <p className="text-sm text-gray-600">
                      {experience.company}
                    </p>
                    <p className="text-sm text-gray-500">{`${experience.start_date} - ${experience.end_date}`}</p>
                  </div>
                </div>
                <BiChevronRight className="text-3xl text-gray-400" />
              </div>
            </div>
            <button
              disabled={loading}
              onClick={handleDelete}
              className="mt-2 flex items-center text-sm text-red-500"
            >
              {loading ? "Deleting..." : "Delete"}
              <BsTrash2 className="ml-1 h-4 w-4" />
            </button>
          </div>
}