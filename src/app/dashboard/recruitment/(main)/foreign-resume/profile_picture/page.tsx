import React from "react";
import ProfilePictureClient from "../../../_components/profile-picture-client";
import { routes } from "@/constants/routes";
import { getUserSession } from "@/lib/auth";

import { UserResumeResponse } from "@/definition";
import resumeApi from "@/api/local-resume";


async function getResume() {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }
  try {
    const {data} : {data: UserResumeResponse} = await resumeApi.retrieveResume({ userId: session.user.id as string, type: 'foreign' });

    return data.upload;
  } catch (error) {

    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

export const metadata = {
  title: 'Profile Picture | Foreign Resume',
  description: 'Upload your profile picture'
};

async function ProfilePictureCV() {
  const upload = await getResume();
  return <ProfilePictureClient type="foreign" next_route={routes.RECRUITMENT_PREVIEW_FOREIGN_RESUME} upload={upload} />;
}

export default ProfilePictureCV;
