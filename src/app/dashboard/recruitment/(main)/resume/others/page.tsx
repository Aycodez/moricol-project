import React from "react";
import OtherInformationClient from "../../../_components/other-information-client";
import { routes } from "@/constants/routes";
import { getUserSession } from "@/lib/auth";
import resumeApi from "@/api/local-resume";
import { UserResumeResponse } from "@/definition";

async function getResume() {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }
  try {
    const {data} : {data: UserResumeResponse} = await resumeApi.retrieveResume({ userId: session.user.id as string, type: 'local' });
    
    return data.others
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

export const metadata = {
  title: 'Other Information',
  description: 'Add or edit your other information'
};

async function OtherInformation() {
  const others = await getResume();
  return <OtherInformationClient type="local" next_route={routes.RECRUITMENT_CONTACT} others={others} />;
}

export default OtherInformation;
