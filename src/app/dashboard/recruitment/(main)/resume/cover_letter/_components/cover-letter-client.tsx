"use client";

import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/textarea";
import ContentLayout from "@/app/dashboard/recruitment/_components/content-layout";
import resumeApi from "@/api/local-resume";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Session } from "next-auth";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import { ResumeType } from "@/definition";


function CoverLetterClient({
  cover_letter: cover_letter_value,
    next_route,
    type  
}: {
    cover_letter: string,
    next_route: string,
    type: ResumeType

}) {

    const [cover_letter, setCoverLetter] = useState(cover_letter_value);
    const [loading, setLoading] = useState(false);
    const {data} = useSession();
    const {enqueueSnackbar} = useSnackbar();
    const router = useRouter();

    const handleSubmit = async() => {
      if(cover_letter.length < 70) {
        return enqueueSnackbar("Cover letter must be at least 70 characters", { variant: "error" });
      }
      try {
        setLoading(true);
            await resumeApi.updateCoverLetter({userId: data?.user.id as string, coverLetter: cover_letter, session: data as Session, type: type});
       
        enqueueSnackbar("Cover letter updated successfully", { variant: "success" });
        router.push(next_route);
    } catch (error) {
        enqueueSnackbar(error instanceof Error ? error.message : String(error), { variant: "error" });
    } finally {
        setLoading(false);
    }
  }

  return (
    <ContentLayout
      next_route={next_route}
      pageTitle="Cover Letter"
      step={6}
      isLoading={loading}
      nextFunction={handleSubmit}
    >
      <div className="max-w-2xl">
        <div>
          <Label
            htmlFor="reasonForLeaving"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Write a cover letter.
          </Label>
          <Textarea
            value={cover_letter}
            onChange={(e) => setCoverLetter(e.target.value)}
            rows={12}
            id="reasonForLeaving"
            name="reasonForLeaving"
            placeholder="Lorem ipsum dolor sit amet consectetur. Faucibus rutrum eget vel viverra eget etiam sit. Dictum vivamus amet diam sit nulla ut mattis pulvinar. Turpis in purus dui gravida risus massa. Sed tortor non diam non aenean gravida turpis."
          />
          <p className="mt-1 text-sm text-gray-500">Minimum 70 characters</p>
        </div>
      </div>
    </ContentLayout>
  );
}

export default CoverLetterClient;
