import { routes } from "@/constants/routes";
import CoverLetterClient from "./_components/cover-letter-client";
import { getUserSession } from "@/lib/auth";
import resumeApi from "@/api/local-resume";
import { UserResumeResponse } from "@/definition";

async function getResume() {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }
  try {
    const { data }: { data: UserResumeResponse } = await resumeApi.retrieveResume({ userId: session.user.id as string, type: 'local' });

    return data.coverletter;
  } catch (error) {

    throw new Error(error instanceof Error ? error.message : String(error));
  }
}


export const metadata = {
  title: 'Cover Letter',
  description: 'Add or edit your cover letter'
};

async function CoverLetter() {
  const cover_letter = await getResume();
  return (
    <CoverLetterClient type="local" cover_letter={cover_letter} next_route={routes.RECRUITMENT_OTHERS} />
  );
}

export default CoverLetter;
