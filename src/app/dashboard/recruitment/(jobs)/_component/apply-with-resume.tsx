'use client'

import jobsApi from '@/api/jobs';
import Button from '@/components/button';
import ModalLayout from '@/components/layouts/modal-layout';
import { routes } from '@/constants/routes';
import { UserResumeResponse } from '@/definition';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';


function ApplyWithResume({ job_id, local, foreign }: { job_id: string, local: UserResumeResponse, foreign: UserResumeResponse }) {
    const { data: session } = useSession();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();

    const handleApply = async (type: 'local' | 'foreign', setLoading: (loading: boolean) => void) => {
     try {
        setLoading(true);

   
        
        await jobsApi.applyForJob({
          userid: session?.user.id as string,
          coverletter: '',
          cv: '',
          session: session as Session,
          jobpostid: job_id,
          resumetype: type+'resume',
          resumeid: type==='local'?local._id:foreign._id,
          systemcv: true
        });
        enqueueSnackbar('Application successful', { variant: 'success' });
        setIsModalOpen(true);
       
      } catch (error) {
        console.error('Error uploading files:', error);
        enqueueSnackbar('There was an error uploading your files. Please try again.', { variant: 'error' });
        
      } finally {
        setLoading(false);
      }
    };

    return (<>
        <div className="flex w-full flex-col md:flex-row justify-start gap-4 lg:gap-8 md:items-center py-5">
            {local && (
                <ApplyButton handleApply={handleApply} type='local' />
            )}
            {local && foreign && <span className="text-gray-500 hidden md:inline">|</span>}
            {foreign && (
                <ApplyButton handleApply={handleApply} type='foreign' />
            )}
        </div>
        {isModalOpen && (
        <ModalLayout>
          <article className="flex w-full max-w-[806px] flex-col items-center justify-center rounded-lg bg-white px-7 py-10">
            <div className="relative mb-7 h-40 w-40 overflow-hidden rounded-full">
              <Image
                src="/images/SUCCESS.png"
                alt=""
                fill
                sizes="128px"
                className="h-full object-contain"
              />
            </div>
            <h3 className="mb-8 max-w-[635px] text-center text-2xl font-medium">
              Application Successful!
            </h3>

            <div className="mb-7 space-y-3.5 text-center font-medium text-[#667085]">
              <p>Your application has been submitted successfully.</p>
            </div>

            <Button onClick={() => {router.push(routes.RECRUITMENT_JOBS); setIsModalOpen(false); }}>OKAY</Button>
          </article>
        </ModalLayout>
      )}
            </>
    );
}




export default ApplyWithResume;



function ApplyButton({ handleApply, type }: { handleApply: (type: 'local' | 'foreign', setLoading: (loading: boolean) => void) => void, type: 'local' | 'foreign' }) {
    const [loading, setLoading] = useState(false);
    return (
         <button
                    className="rounded bg-yellow-500 px-4 py-2 text-white flex items-center justify-center hover:bg-yellow-600 disabled:opacity-50"
                    onClick={() => handleApply(type, setLoading)}
                    disabled={loading}
                >
            {loading ? <span className="flex items-center gap-2"><FaSpinner className="animate-spin" /> <span>Applying...</span></span> : (type === 'local' ? 'APPLY WITH LOCAL RESUME' : 'APPLY WITH FOREIGN RESUME')}
        </button>
    )
}