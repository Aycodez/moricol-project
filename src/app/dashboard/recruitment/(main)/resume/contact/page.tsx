
import { routes } from "@/constants/routes";
import ContactClient from "./_components/contact_client";
import resumeApi from "@/api/local-resume";
import { UserResumeResponse } from "@/definition";
import { getUserSession } from "@/lib/auth";

async function getResume() {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }
  try {
    const { data }: { data: UserResumeResponse } = await resumeApi.retrieveResume({ userId: session.user.id as string, type: 'local' });

    return data.contact_details;
  } catch (error) {

    throw new Error(error instanceof Error ? error.message : String(error));
  }
}


export const metadata = {
  title: 'Contact',
  description: 'Add or edit your contact'
};

export default async function Contact() {
  const contact = await getResume();
  return (
    <ContactClient type="local" next_route={routes.RECRUITMENT_PROFILE_PICTURE} contact={contact} />
  );
}
