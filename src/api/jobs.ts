

import { Session } from "next-auth";
import { createClientAxios } from "./axios-client";
import handleAxiosError from "./handle-axios-error";

export interface CreateJobParams {
    userid: string;
    slot: number;
    min_experience: number;
    min_salary: number;
    max_salary: number;
    state: string;
    working_condition: string;
    job_level: string;
    job_type: "fulltime" | "parttime" | "contract";
    candidate_title: string;
    company_email: string;
    company_name: string;
    company_logo: string | File;
    end_date: string;
    start_date: string;
    religion: string[];
    marital_status: string[];
    gender: string[];
    description: string;
    country: string;
    company_bio: string;
    company_address: string;
    company_phone: string;
    academic_qualification: string[];
    requirement: string;
    session: Session;
}

interface UpdateJobPostParams {
    userid: string;
    jobpostid: string;
    slot: number;
    min_experience: number;
    min_salary: number;
    max_salary: number;
    state: string;
    working_condition: string;
    job_level: string;
    job_type: string;
    candidate_title: string;
    company_email: string;
    company_name: string;
    company_logo: string;
    end_date: string;
    start_date: string;
    religion: string[];
    marital_status: string[];
    gender: string[];
    description: string;
    country: string;
    company_bio: string;
    company_address: string;
    company_phone: string;
    academic_qualification: string[];
    requirement: string;
    session: Session;
}

interface RetrieveAllJobPostsParams {
    state?: string;
    job_type?: string[];
    job_level?: string[];
    min_salary?: number[];
    max_salary?: number[];
    page?: number;
    moricol_job?: boolean;
    session: Session;
}

const jobsUrl = 'user/recruitment'

const endpoints = {
    createJobPost: jobsUrl + '/create/jobpost',
    updateJobPost: jobsUrl + '/update/jobpost',
    retrieveSingleJobPost: jobsUrl + '/retrieve/singlejob',
    makePayment: "/user/training/make/jobpost/payment",
    saveJobPost: jobsUrl + "/save/jobpost",
    retrieveSavedJobPost: jobsUrl + "/retrieve/save/jobpost",
    myJobPost: jobsUrl + "/retrieve/myjobpost",
    updateMyJobPostPayment: jobsUrl + "/update/jobpost/payment",
    applyForJob: jobsUrl + "/apply/jobpost",
    retrieveMyJobApplication: jobsUrl + "/retrieve/my/jobappication",
    retrieveAllJobPost: jobsUrl + "/retrieve/all/jobpost", //jjobs moricl careers et general
    jobPostFilterData: jobsUrl + "/retrieve/all/jobpost/filterdata",
}

const jobsApi = {
    createJobPost: async (params: CreateJobParams) => {
        const { session, ...paramsWithoutSession } = params;
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.createJobPost, { ...paramsWithoutSession });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error creating job post');
            throw new Error(errorMessage);
        }
    },

    updateJobPost: async (params: UpdateJobPostParams) => {
        const { session, ...paramsWithoutSession } = params;
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.updateJobPost, { ...paramsWithoutSession });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error updating job post');
            throw new Error(errorMessage);
        }
    },

    retrieveSingleJobPost: async (userid: string, jobpostid: string, session: Session) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.retrieveSingleJobPost, {
                userid,
                jobpostid
            });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving single job post');
            throw new Error(errorMessage);
        }
    },

    makePayment: async (userid: string, email: string, amount: number, session: Session) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.makePayment, {
                userid,
                email,
                amount
            });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error making payment for job post');
            throw new Error(errorMessage);
        }
    },

    saveJobPost: async (userid: string, jobpostid: string, session: Session) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.saveJobPost, {
                userid,
                jobpostid
            });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error saving job post');
            throw new Error(errorMessage);
        }
    },

    retrieveSavedPost: async (userid: string, session: Session) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.retrieveSavedJobPost, {
                userid
            });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving saved post');
            throw new Error(errorMessage);
        }
    },

    //myjobpost 
    myJobPost: async (userid: string, hirejob: boolean, session: Session) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.myJobPost, {
                userid,
                hirejob
            });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving my job post');
            throw new Error(errorMessage);
        }
    },


    updateJobPostPayment: async ({ userid, jobpostid, amount, session }: { userid: string; jobpostid: string; amount: number; session: Session }) => {
        const axios = createClientAxios({ session });
        try {
            const response = await axios.post(endpoints.updateMyJobPostPayment, {
                userid,
                jobpostid,
                amount
            });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error updating job post payment');
            throw new Error(errorMessage);
        }
    },


    applyForJob: async ({ userid, jobpostid, resumetype, resumeid, coverletter, cv, systemcv, session }: { userid: string; jobpostid: string; resumetype: string; resumeid: string; coverletter: string; cv: string; systemcv: boolean; session: Session }) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.applyForJob, {
                userid,
                jobpostid,
                resumetype,
                resumeid,
                coverletter,
                cv,
                systemcv
            });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error applying for job');
            throw new Error(errorMessage);
        }
    },


    retrieveMyJobApplication: async (userid: string, session: Session) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.retrieveMyJobApplication, {
                userid
            });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving my job application');
            throw new Error(errorMessage);
        }
    },

    retrieveAllJobPosts: async (params: RetrieveAllJobPostsParams) => {
        const { session, ...paramsWithoutSession } = params;
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.retrieveAllJobPost, { ...paramsWithoutSession });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving all job posts');
            throw new Error(errorMessage);
        }
    },

    jobPostFilterData: async (params: { session: Session }) => {
        const axios = createClientAxios({ session: params.session });

        try {
            const response = await axios.post(endpoints.jobPostFilterData, params);
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving job post filter data');
            throw new Error(errorMessage);
        }
    },
}

export default jobsApi;