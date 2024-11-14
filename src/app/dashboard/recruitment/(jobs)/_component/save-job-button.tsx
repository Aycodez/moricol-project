'use client'

import React from "react";
import { useState } from "react";
import jobsApi from "@/api/jobs";
import { FiBookmark, FiLoader } from "react-icons/fi";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import { BsFillBookmarkFill } from "react-icons/bs";


const SaveJobButton = ({ job_id, Icon }: { job_id: string, Icon?: React.ElementType }) => {
    const [isSaved, setIsSaved] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const session = useSession();

  const handleSaveJob = async () => {
    if (!session || !session.data || !('user' in session.data)) {
      enqueueSnackbar('User session is invalid or user ID is missing', { variant: 'error' });
      return;
    }

    try {
      setIsLoading(true);
      await jobsApi.saveJobPost(session.data.user.id, job_id, session.data);
      setIsSaved(true);
      enqueueSnackbar('Job saved successfully!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error instanceof Error ? error.message : String(error), { variant: 'error' });
    } finally {
      setIsLoading(false);
    }   
  };

  return (
    
     <button className="mr-4" onClick={handleSaveJob} disabled={isLoading}>
                {isLoading ? <FiLoader className="h-6 w-6 animate-spin" /> : isSaved ? 
               Icon?  <Icon className='h-6 w-6 text-primary-500' /> : <BsFillBookmarkFill className='h-6 w-6 text-primary-500' /> : Icon? <Icon className="h-6 w-6 text-gray-400" /> : <FiBookmark className="h-6 w-6 text-gray-400" />}
                </button>
  );
};

export default SaveJobButton;