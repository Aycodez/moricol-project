import { API_BASE_URL } from '@/constants/config';
import axios from 'axios';
import { getServerSession, Session } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { signOut } from 'next-auth/react';
const BASE_URL = API_BASE_URL;
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json'
};

// Create the base axios client
const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: DEFAULT_HEADERS,
  timeout: 10000
});

// Request interceptor for adding auth token
axiosClient.interceptors.request.use(
  (error) => Promise.reject(error)
);

// Response interceptor for handling common errors
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error('Unauthorized access');
          signOut();
          break;
        case 401:
          console.error('Unauthorized access');
          signOut();
          break;
        case 404:
          console.error('Resource not found');
          break;
        case 500:
          console.error('Server error');
          break;
        default:
          console.error('API Error:', error.response.data);
      }
    } else if (error.request) {
      console.error('Network error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Server-side axios instance factory
export async function createServerAxios() {
  const session = await getServerSession(authOptions);


  const serverConfig = {
    ...axiosClient.defaults,
    headers: {
      ...DEFAULT_HEADERS,
      ...(session?.user.token && {
        Authorization: `Bearer ${session.user.token}`
      }),
    },
  };

  return axios.create(serverConfig);
}

export default axiosClient;

// Export a hook for components that need fresh session data
export function createClientAxios({ session }: { session: Session }) {

  const config = {
    ...axiosClient.defaults,
    headers: {
      ...DEFAULT_HEADERS,
      ...(session?.user.token && {
        Authorization: `Bearer ${session.user.token}`
      }),
    },
  };

  return axios.create(config);
}



/*

in server component
import { createServerAxios } from '@/lib/axios';

export default async function ServerComponent() {
  const serverAxios = await createServerAxios();
  const response = await serverAxios.get('/api/endpoint');
}




*/