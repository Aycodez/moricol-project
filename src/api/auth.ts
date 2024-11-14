
import { API_BASE_URL } from '@/constants/config';
import axios from 'axios';
import handleAxiosError from './handle-axios-error';


// Base URL of the external API

export interface SignupData {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  gender: string;
  maritalstatus: string;
  occupation: string;
  dob: string;
  religion: string;
  country: string;
  state: string;
  language: string;
}

/**
 * Function to handle user signup.
 *
 * @param userData - Object containing user details for signup.
 */
export const signup = async (userData: SignupData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/signup`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error, 'Error signing up');
    throw new Error(errorMessage);

  }
};

/**
 * Function to confirm verification code.
 *
 * @param code - Verification code to confirm.
 */
export const confirmVerificationCode = async (code: string) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/user/confirmcode`,
      { code },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {

    const errorMessage = handleAxiosError(error, 'Error verifying verification code');
    throw new Error(errorMessage);

  }
};

/**
 * Function to confirm password reset verification code.
 * 
 * @param code - Verification code to confirm.
 */
export const confirmPasswordResetCode = async (code: string, email: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/confirm/forgotpassword/code`, { code, email }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error, 'Error verifying password reset code');
    throw new Error(errorMessage);
  }
};

export interface ResetPasswordData {
  email: string;
  currentpassword: string;
  newpassword: string;
}

/**
 * Function to reset user password.
 *
 * @param resetData - Object containing email, current password, and new password.
 */
export const resetPassword = async (resetData: ResetPasswordData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/user/reset/password`,
      resetData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {

    const errorMessage = handleAxiosError(error, 'Error resetting password');
    throw new Error(errorMessage);

  }
};

/**
 * Function to initiate password reset via email.
 *
 * @param email - The user's email for password recovery.
 */
export const forgotPassword = async (email: string) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/user/forgot/password`,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {

    const errorMessage = handleAxiosError(error, 'Error initiating password reset');
    throw new Error(errorMessage);

  }
};

/**
 * Function to change user password.
 * 
 * @param email - The user's email, new password and confirm password.
 */
export const changePassword = async (new_password: string, confirm_password: string, code: string) => {
  if (new_password !== confirm_password) {
    throw new Error("Passwords do not match");
  }
  try {
    const response = await axios.post(`${API_BASE_URL}/user/change/password`, { password: new_password, code }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    const errorMessage = handleAxiosError(error, 'Error changing password');
    throw new Error(errorMessage);
  }
};

export interface LoginData {
  email: string;
  password: string;
}

/**
 * Function to log in the user.
 *
 * @param loginData - Object containing email and password for login.
 */

export const login = async (loginData: LoginData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/login`, loginData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    let errorMessage = "Login error";
    if (axios.isAxiosError(error)) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage = error.response.data.message;
      } else if (error.request) {
        errorMessage = "No response received from server";
      } else if (error.message) {
        errorMessage = error.message;
      }
    } else {
      errorMessage = "An unexpected error occurred";
    }
    throw new Error(errorMessage);
  }
};
