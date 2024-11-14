import { Session } from 'next-auth';
import { createClientAxios } from './axios-client';
import handleAxiosError from './handle-axios-error';
import { API_BASE_URL } from '@/constants/config';
import { ProfileData } from '@/definition';

const endpoints = {
    getProfile: `${API_BASE_URL}/user/retrieve/profile`,
    resetPassword: `${API_BASE_URL}/user/reset/password`,
    updateProfile: `${API_BASE_URL}/user/update/profile`,
};


export const profileApi = {
    getProfile: async ({ userid, session }: { userid: string; session: Session }): Promise<{ data: ProfileData }> => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.getProfile, { userid });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving profile');
            throw new Error(errorMessage);
        }
    },

    resetPassword: async ({ userid, newpassword, currentpassword, session }: { userid: string; newpassword: string; currentpassword: string; session: Session }) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.resetPassword, {
                userid,
                newpassword,
                currentpassword
            });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error resetting password');
            throw new Error(errorMessage);
        }
    },

    updateProfile: async (profile: ProfileData, session: Session) => {
        const axios = createClientAxios({ session });

        try {
            const response = await axios.post(endpoints.updateProfile, {
                ...profile
            });
            return response.data;
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error updating profile');
            throw new Error(errorMessage);
        }
    },


};



