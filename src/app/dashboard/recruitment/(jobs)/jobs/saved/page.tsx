import { getUserSession } from "@/lib/auth";
import SavedJobsClient from "../../../_components/saved-jobs-client";
import { JobPostResponse } from "@/definition";
import jobsApi from "@/api/jobs";

export const revalidate = 10;

export const metadata = {
  title: "My Posted Jobs | Moricol",
  description: "Jobs you have posted on Moricol",
};

async function getSavedPosts() {
  const session = await getUserSession();
  if (!session || !session.user || !('id' in session.user)) {
    throw new Error('User session is invalid or user ID is missing');
  }
  try {
    const { data: jobposts }: { data: { jobpostid: JobPostResponse }[] } = await jobsApi.retrieveSavedPost(session.user.id as string, session);

    return jobposts;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));

  }
}

export default async function SavedJobsPage() {
  const savedPosts = await getSavedPosts();

  return <SavedJobsClient savedPosts={savedPosts} />;
}
