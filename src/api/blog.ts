import handleAxiosError from './handle-axios-error';
import { API_BASE_URL } from '@/constants/config';

const endpoints = {
    getSingleBlog: `${API_BASE_URL}/user/blog/retrieve/single`,
    getAllBlogs: `${API_BASE_URL}/user/blog/retrieve/all`,
    getCategories: `${API_BASE_URL}/user/blog/retrieve/category`
};

interface BlogParams {
    blogId: string;
}

interface GetAllBlogsParams {
    category?: string;
    page?: number;
}

export interface BlogPost {
    _id: string;
    upload: string;
    title: string;
    blog: string;
    category: {
        _id: string;
        name: string;
    };
    createdAt: string;
    __v: number;
    adminid: {
        _id: string;
        name: string;
    };
}

export interface BlogResponse {
    data: BlogPost[];
}

export interface BlogCategory {
    _id: string;
    name: string;
    status: 'active' | 'inactive';
    blog: number;
    createdAt: string;
    __v: number;
}

export interface BlogCategoryResponse {
    status_code: number;
    status: boolean;
    message: string;
    data: BlogCategory[];
}

export const blogApi = {
    getSingleBlog: async ({ blogId }: BlogParams): Promise<{ data: BlogPost }> => {
        try {
            const response = await fetch(endpoints.getSingleBlog, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    blogid: blogId
                }),
                cache: 'reload'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving blog post');
            throw new Error(errorMessage);
        }
    },

    getBlogsByCategory: async ({ category, page = 1 }: GetAllBlogsParams): Promise<BlogResponse> => {
        try {
            const response = await fetch(endpoints.getAllBlogs, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                cache: 'reload',
                body: JSON.stringify({
                    categoryid: category,
                    page
                })
            });
            console.log(response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.log(error);
            const errorMessage = handleAxiosError(error, 'Error retrieving blog categories');
            throw new Error(errorMessage);
        }
    },

    getAllBlogs: async ({ category = '', page = 1 }: GetAllBlogsParams): Promise<BlogResponse> => {
        try {
            const response = await fetch(endpoints.getAllBlogs, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    category,
                    page
                }),
                cache: 'reload'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving all blogs');
            throw new Error(errorMessage);
        }
    },

    getCategories: async (): Promise<BlogCategoryResponse> => {
        try {
            const response = await fetch(endpoints.getCategories, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                cache: 'reload'
            });
            return await response.json();
        } catch (error) {
            const errorMessage = handleAxiosError(error, 'Error retrieving categories');
            throw new Error(errorMessage);
        }
    }
};



