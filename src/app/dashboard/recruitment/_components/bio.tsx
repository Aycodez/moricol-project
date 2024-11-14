'use client';

import { useState } from "react";
import ContentLayout from "./content-layout";
import resumeApi from "@/api/local-resume";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/textarea";
import { useSnackbar } from 'notistack';
import { useSession } from "next-auth/react";
import { Session } from "next-auth";

import { ResumeType } from "@/definition";

export default function Bio({ next_route, bio: bioState, type }: { next_route: string, bio: string, type : ResumeType }) {
  const [bio, setBio] = useState(bioState);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const {data} = useSession();
  

  const handleSubmit = async () => {
   
    if (bio.length < 70) {
      enqueueSnackbar("Bio must be at least 70 characters", { variant: 'warning' });
      return;
    }
    try {
      setIsLoading(true);
        await resumeApi.updateBio({ userId: data?.user?.id as string, bio, session: data as Session, type: type });
      
      enqueueSnackbar("Bio updated successfully", { variant: 'success' });
      router.push(next_route);
    } catch (error) {
      enqueueSnackbar(error instanceof Error ? error.message : String(error), { variant: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContentLayout isLoading={isLoading} nextFunction={handleSubmit} next_route={next_route} pageTitle="Brief Bio" step={1}>
      <div className="flex justify-between">
        <p className="mb-4">Tell us about yourself</p>
        <p className="mt-1 hidden text-sm text-gray-500 md:block">
          Minimum 70 characters
        </p>
      </div>
      <div className="mb-4">
        <Textarea
          className="w-full rounded border border-primary-300 p-4"
          rows={6}
          placeholder="I'm motivated and a team player"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></Textarea>
        <p className="mt-1 text-sm text-gray-500 md:hidden">
          Minimum 70 characters
        </p>
      </div>
    </ContentLayout>
  );
}
