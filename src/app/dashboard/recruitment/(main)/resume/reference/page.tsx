import { routes } from "@/constants/routes";
import ReferenceClient from "./_components/reference-client";
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
    
    return data.reference
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
}

export const metadata = {
  title: 'Add or edit your reference',
  description: 'Add or edit your reference'
};

async function Reference() {
  const reference = await getResume();
  return <ReferenceClient type="local" next_route={routes.RECRUITMENT_COVER_LETTER} reference={reference} />;
}

export default Reference;
