import { landingPageServices } from "@/constants";

export const DEFAULT_KEY = 'icolsijfk33647jckd';

export const storeToLocalStorage = (value: {
    service: keyof typeof landingPageServices,
    link?: string,
    toSend: any
}, key?: string) => {
    localStorage.setItem(key ?? DEFAULT_KEY, JSON.stringify(value));
};

export const getFromLocalStorage = (key?: string) => {
    const value = localStorage.getItem(key ?? DEFAULT_KEY);
    return value ? JSON.parse(value) : null;
};

export const deleteFromLocalStorage = (key?: string) => {
    localStorage.removeItem(key ?? DEFAULT_KEY);
};