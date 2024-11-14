import { Session } from "next-auth";
import { createClientAxios } from "./axios-client";
import handleAxiosError from "./handle-axios-error";

const telemedicineUrl = 'user/telemedicine'

const endpoints = {
    homepage: telemedicineUrl + '/homepage',
    retrieveCategory: telemedicineUrl + '/category/subcategory',
    createReview: telemedicineUrl + '/create/review',
    organization: {
        create: telemedicineUrl + '/create/organization',
        my: telemedicineUrl + '/my/organization',
        addMember: telemedicineUrl + '/organization/add/member',
        removeMember: telemedicineUrl + '/organization/remove/member',
        retrieveMembers: telemedicineUrl + '/retrieve/organization/member',
        retrieveMembership: telemedicineUrl + '/my/membership',
    },
}

interface HomepageParams {
    userid: string;
    session: Session;
}

interface RetrieveCategoryParams {
    categoryid?: string;
    session: Session;
}

interface CreateReviewParams {
    userid: string;
    rating: number;
    comment: string;
    session: Session;
}

interface OrganizationParams {
    userid: string;
    session: Session;
}

export interface CreateOrganizationParams extends OrganizationParams {
    userid: string;
    start_date: string;
    end_date: string;
    name: string;
    duration: string;
    plan_type: string;
    amount: number;
    user_limit: number;
}

interface MemberParams extends OrganizationParams {
    organizationid: string;
    memberId: string;
    email: string;
}

export const availablePlansList = [
    {
        title: "1 - 5 PERSONS",
        plan_type: "1-5",
        min_members: 1,
        max_members: 5,
        subtitle: "For Organization who wants to cater for not so many persons all at once",
        durations: [
            { label: "WEEKLY", price: "5000" },
            { label: "MONTHLY", price: "8000" },
            { label: "QUARTERLY", price: "10000" },
        ],
    },
    {
        title: "6 - 10 PERSONS",
        plan_type: "6-10",
        min_members: 6,
        max_members: 10,
        subtitle: "For Organization who wants to cater for for many person in their company",
        durations: [
            { label: "WEEKLY", price: "10000" },
            { label: "MONTHLY", price: "20000" },
            { label: "QUARTERLY", price: "50000" },
        ],
        highlighted: true,
    },
    {
        title: "11 - 30 PERSONS",
        plan_type: "11-30",
        min_members: 11,
        max_members: 30,
        subtitle: "For Organization who wants to cater for so many persons all at once",
        durations: [
            { label: "WEEKLY", price: "25000" },
            { label: "MONTHLY", price: "30000" },
            { label: "QUARTERLY", price: "50000" },
        ],
    },
]

const telemedicineApi = {
    homepage: async ({ userid, session }: HomepageParams) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.homepage, { userid });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving telemedicine homepage');
            throw new Error(errorMessage);
        }
    },

    retrieveSingleCategory: async ({ categoryid, session }: RetrieveCategoryParams) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.retrieveCategory, { categoryid });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving telemedicine category');
            throw new Error(errorMessage);
        }
    },

    createReview: async ({ userid, rating, comment, session }: CreateReviewParams) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.createReview, { userid, rating, comment });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error creating review');
            throw new Error(errorMessage);
        }
    },

    organization: {
        create: async ({ userid, start_date, end_date, name, duration, plan_type, amount, user_limit, session }: CreateOrganizationParams) => {
            const axios = createClientAxios({ session });

            try {
                const response = await axios.post(endpoints.organization.create, { userid, start_date, end_date, name, duration, plan_type, amount, user_limit });
                return response.data;
            } catch (error) {
                const errorMessage = handleAxiosError(error, 'Error creating organization');
                throw new Error(errorMessage);
            }
        },

        my: async ({ userid, session }: OrganizationParams) => {
            const axios = createClientAxios({ session });

            try {
                const response = await axios.post(endpoints.organization.my, { userid });
                return response.data;
            } catch (error) {
                const errorMessage = handleAxiosError(error, 'Error retrieving organization');
                throw new Error(errorMessage);
            }
        },

        addMember: async ({ userid, organizationid, email, session }: Omit<MemberParams, 'memberId'>) => {
            const axios = createClientAxios({ session });

            try {
                const response = await axios.post(endpoints.organization.addMember, { userid, organizationid, email });
                return response.data;
            } catch (error) {
                const errorMessage = handleAxiosError(error, 'Error adding member');
                throw new Error(errorMessage);
            }
        },

        removeMember: async ({ userid, organizationid, memberId, session }: Omit<MemberParams, 'email'>) => {
            const axios = createClientAxios({ session });

            try {
                const response = await axios.post(endpoints.organization.removeMember, { userid, organizationid, memberid: memberId });
                return response.data;
            } catch (error) {
                const errorMessage = handleAxiosError(error, 'Error removing member');
                throw new Error(errorMessage);
            }
        },

        retrieveMembers: async ({ userid, organizationid, session }: Omit<MemberParams, 'memberId' | 'email'>) => {
            const axios = createClientAxios({ session });
            try {
                const response = await axios.post(endpoints.organization.retrieveMembers, { userid, organizationid });
                return response.data;
            } catch (error) {
                const errorMessage = handleAxiosError(error, 'Error retrieving members');
                throw new Error(errorMessage);
            }
        },

        retrieveMembership: async ({ userid, session }: OrganizationParams) => {
            const axios = createClientAxios({ session });

            try {
                const response = await axios.post(endpoints.organization.retrieveMembership, { userid });
                return response.data;
            } catch (error) {
                const errorMessage = handleAxiosError(error, 'Error retrieving membership');
                throw new Error(errorMessage);
            }
        }
    }
}

export default telemedicineApi;
