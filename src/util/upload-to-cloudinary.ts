import { CLOUDINARY_PRESET, CLOUDINARY_URL } from "@/constants/config";

const uploadToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_PRESET!);

    const response = await fetch(CLOUDINARY_URL!, {
        method: 'POST',
        body: formData
    });
    const data = await response.json();
    return data.url;
};

export default uploadToCloudinary;