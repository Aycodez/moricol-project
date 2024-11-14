import React from "react";
import ProfileClient from "./_components/profile-client";
import { ProfileData } from "@/definition";
import { getUserSession } from "@/lib/auth";
import { profileApi } from "@/api/profile";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Profile",
  description: "Profile page"
}

async function getProfileData() {
  try {
    const session = await getUserSession();
    if (!session || !session.user || !('id' in session.user)) {
      throw new Error('User session is invalid or user ID is missing');
    }
    const { data: profileData }: { data: ProfileData } = await profileApi.getProfile({ userid: session.user.id, session });
    return profileData;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to get profile data');
  }
}

export default async function Profile() {
  const profileData = await getProfileData();
  // console.log(profileData);
  return <ProfileClient profileData={profileData} />;
}
