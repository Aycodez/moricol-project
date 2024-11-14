import React from "react";
import Bio from "../../_components/bio";
import { routes } from "@/constants/routes";
import { getUserSession } from "@/lib/auth";
import { UserResumeResponse } from "@/definition";
import resumeApi from "@/api/local-resume";


// import FPersonalInformation from "../../_components/f-personal-info";

// function ForeignResume() {
//   return <FPersonalInformation />;
// }

// export default ForeignResume;
async function getForeignResume() {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }
  try {
    const { data }: { data: UserResumeResponse } = await resumeApi.retrieveResume({ userId: session.user.id as string, type: 'foreign' });

    return data?.bio ?? null
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}


export const metadata = {
  title: "Bio | Foreign Resume",
  description: "add or edit your bio for Foreign Resume",
};

export default async function ForeignBio() {
  let bio = await getForeignResume();
  if (!bio) {
    bio = ''
  }
  return <Bio type="foreign" next_route={routes.RECRUITMENT_FOREIGN_WORK_EXPERIENCE} bio={bio} />;
}
