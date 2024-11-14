import { Session } from "next-auth";
import { createClientAxios } from "./axios-client";
import handleAxiosError from "./handle-axios-error";
import { API_BASE_URL } from "@/constants/config";

const loanUrl = 'user/loan'

const endpoints = {
    homepage: loanUrl + '/homepage',
    retrieveCategory: loanUrl + '/retrieve/category',
    retrieveSingleCategory: loanUrl + '/retrieve/single/category',
    createOffer: loanUrl + '/create/offer',
    retrievePending: loanUrl + '/retrieve/pending',
    retrieveSingleLoan: loanUrl + '/retrieve/single',
    retrievePendingLoan: loanUrl + '/retrieve/pending',
    retrieveActiveLoan: loanUrl + '/retrieve/active',
    retrieveProcessedLoan: loanUrl + '/retrieve/processed',
    checkApprovedLoan: loanUrl + '/check/approve',
    createAccount: loanUrl + '/create/account',
    retrieveAllAccounts: loanUrl + '/retrieve/all/account',
    retrieveSingleAccount: loanUrl + '/retrieve/single/account',
    deleteAccount: loanUrl + '/delete/account',
    updateJobPostPayment: API_BASE_URL + '/user/recruitment/update/jobpost/payment',
    paymentGateway: loanUrl + '/payment/gateway',
    payback: loanUrl + '/payback',


}

interface HomepageParams {
    userid: string;
    session: Session;
}

interface RetrieveCategoryParams {
    userid: string;
    category?: string;
    session: Session;
}

interface RetrieveSingleCategoryParams {
    userid: string;
    id: string;
    session: Session;
}

export interface CreateOfferParams {
    userid: string;
    category: string;
    paystackref?: string;
    amount: number;
    balance: number;
    total_installment: number;
    total_days: number;
    daily_interest: number;
    late_interest: number;
    profit: number;
    totalamount: number;
    installment_period: Array<{
        due_date: string;
        interest: number;
        principal: number;
        repay_amount: number;
        balance: number;
    }>;
    bvn: string;
    workaddress: string;
    workstatus: string;
    bankname: string;
    bankbranch: string;
    residentialaddress: string;
    utilitybill: string;
    monthlyincome: string;
    proof_of_income: string;
    bank_details: {
        accountnumber: string;
        accountname: string;
        bankname: string;
    };
    guarantor_one: {
        name: string;
        email: string;
        utility: string;
        residential_address: string;
        relationship: string;
        workstatus: string;
        phone: string;
    };
    guarantor_two: {
        name: string;
        email: string;
        utility: string;
        residential_address: string;
        relationship: string;
        workstatus: string;
        phone: string;
    };
    outstanding: {
        owe: boolean;
        amount: number;
    };
    collaterals: Array<{
        item: string;
        proof_of_item: string;
    }>;
    session: Session;
}

interface RetrievePendingParams {
    userid: string;
    session: Session;
}

export type Guarantor = Omit<CreateOfferParams, "userid" | "session">['guarantor_one'] | Omit<CreateOfferParams, "userid" | "session">['guarantor_two']
export type Collateral = Omit<CreateOfferParams, "userid" | "session">['collaterals']

const loanApi = {
    homepage: async ({ userid, session }: HomepageParams) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.homepage, { userid });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving loan homepage');
            throw new Error(errorMessage);
        }
    },

    retrieveCategory: async ({ userid, category = '', session }: RetrieveCategoryParams) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.retrieveCategory, { userid, category });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving loan category');
            throw new Error(errorMessage);
        }
    },

    retrieveSingleCategory: async ({ userid, id, session }: RetrieveSingleCategoryParams) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.retrieveSingleCategory, { userid, categoryid: id });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving loan category');
            throw new Error(errorMessage);
        }
    },

    createOffer: async (params: CreateOfferParams) => {
        const { session, ...requestParams } = params;
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.createOffer, requestParams);
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error creating loan offer');
            throw new Error(errorMessage);
        }
    },

    retrievePending: async ({ userid, session }: RetrievePendingParams) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.retrievePending, { userid });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving pending loans');
            throw new Error(errorMessage);
        }
    },

    retrieveSingleLoan: async ({ userid, loanid, session }: { userid: string; loanid: string; session: any }) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.retrieveSingleLoan, { userid, loanid });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving loan details');
            throw new Error(errorMessage);
        }
    },

    retrievePendingOrActiveOrProcessedLoan: async ({ userid, session, type }: { userid: string; session: Session, type: 'pending' | 'active' | 'processed' }) => {
        const axios = createClientAxios({ session });

        const endpoint = type === 'processed' ? endpoints.retrieveProcessedLoan : type === 'active' ? endpoints.retrieveActiveLoan : endpoints.retrievePendingLoan;

        try {
            const response = await axios.post(endpoint, { userid });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving pending loan');
            throw new Error(errorMessage);
        }
    },

    checkApprovedLoan: async ({ userid, loanid, session }: { userid: string; loanid: string; session: Session }) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.checkApprovedLoan, { userid, loanid });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving approved loan');
            throw new Error(errorMessage);
        }
    },

    createAccount: async ({ userid, cvv, cardexpiry, cardnumber, session }: {
        userid: string;
        cvv: string;
        cardexpiry: string;
        cardnumber: string;
        session: Session
    }) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.createAccount, {
                userid,
                cvv,
                cardexpiry,
                cardnumber
            });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error creating loan account');
            throw new Error(errorMessage);
        }
    },

    retrieveAllAccounts: async ({ userid, session }: { userid: string; session: Session }) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.retrieveAllAccounts, { userid });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving loan accounts');
            throw new Error(errorMessage);
        }
    },

    retrieveSingleAccount: async ({ userid, accountid, session }: { userid: string; accountid: string; session: Session }) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.retrieveSingleAccount, { userid, accountid });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving loan account');
            throw new Error(errorMessage);
        }
    },

    deleteAccount: async ({ userid, accountid, session }: { userid: string; accountid: string; session: Session }) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.deleteAccount, { userid, accountid });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error deleting loan account');
            throw new Error(errorMessage);
        }
    },

    initiatePayment: async ({ userid, email, amount, session }: { userid: string; email: string; amount: number; session: Session }) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.paymentGateway, {
                userid,
                email,
                amount
            });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error initiating loan payment');
            throw new Error(errorMessage);
        }
    },

    paybackLoan: async ({ userid, loanid, amount, ref, session }: { userid: string; loanid: string; amount: number; ref: string; session: Session }) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.payback, { userid, loanid, amount, paystackref: ref });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error processing loan payback');
            throw new Error(errorMessage);
        }
    },

}

export default loanApi;
