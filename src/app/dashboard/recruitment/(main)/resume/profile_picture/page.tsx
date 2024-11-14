import React from "react";
import ProfilePictureClient from "../../../_components/profile-picture-client";
import { routes } from "@/constants/routes";
import resumeApi from "@/api/local-resume";
import { UserResumeResponse } from "@/definition";
import { getUserSession } from "@/lib/auth";



async function getResume() {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }
  try {
    const {data} : {data: UserResumeResponse} = await resumeApi.retrieveResume({ userId: session.user.id as string, type: 'local' });

    return data.upload;
  } catch (error) {

    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

export const metadata = {
  title: 'Profile Picture',
  description: 'Upload your profile picture'
};

async function ProfilePicture() {
  const upload = await getResume();
  return <ProfilePictureClient type="local" next_route={routes.RECRUITMENT_PREVIEW_RESUME} upload={upload} />;
}

export default ProfilePicture;
