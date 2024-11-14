import axios from 'axios';

const handleAxiosError = (error: any, defaultMessage: string) => {
  let errorMessage = defaultMessage;
  if (axios.isAxiosError(error)) {
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    } else if (error.request) {
      errorMessage = 'No response received from server';
    } else if (error.message) {
      errorMessage = error.message;
    }
  } else {
    errorMessage = 'An unexpected error occurred';
  }
  return errorMessage;
};

export default handleAxiosError;
