import { Session } from 'next-auth';
import { createServerAxios, createClientAxios } from './axios-client';
import { axiosClient, handleAxiosError } from './index';
import { Certification, Education, ResumeType } from '@/definition';

export interface UpdateBioParams {
  userId: string;
  bio: string;
  session: Session;
  type: ResumeType;
}

export interface UpdateContactDetailsParams {
  userId: string;
  contactDetails: {
    name: string;
    phone: string;
    socials: { option: string, optionUrl: string }[];
  };
  session: Session;
  type: ResumeType;
}

export interface UpdateReferenceParams {
  userId: string;
  reference: {
    name: string;
    email: string;
    phone: string;
  }
  session: Session;
  type: ResumeType;
}

export interface UpdateGradeParams {
  userId: string;
  grade: string;
  type: ResumeType;
}

export interface RetrieveResumeParams {
  userId: string;
  type: ResumeType;
}

export interface UpdateEducationParams {
  userId: string;
  education: Education[];
  session: Session;
  type: ResumeType;
}

export interface WorkExperience {
  title: string;
  company: string;
  start_date: string;
  end_date: string;
  previous_employer: string;
  leaving_reason: string;
  inview: boolean;
}

export interface UpdateWorkExperienceParams {
  userId: string;
  workExperience: WorkExperience[];
  session: Session;
  type: ResumeType;
}

export interface UpdateCoverLetterParams {
  userId: string;
  coverLetter: string;
  session: Session;
  type: ResumeType;
}

export interface DeleteWorkExperienceParams {
  userId: string;
  dataId: string;
  session: Session;
  type: ResumeType;
}

export interface DeleteEducationParams extends DeleteWorkExperienceParams { }

export interface DeleteCertificationParams extends DeleteWorkExperienceParams { }

export interface UpdateOthersParams {
  userId: string;
  skills: string[];
  languages: string[];
  hobby: string[];
  noticePeriod: string | Date;
  session: Session;
  type: ResumeType;
}

export interface UpdateCertificationParams {
  userId: string;
  certification: Omit<Certification, '_id'>[];
  session: Session;
  type: ResumeType;
}

export interface UpdateUploadsParams {
  userId: string;
  picture: string;
  cv: string;
  session: Session;
  type: ResumeType;
}

const resumeUrls = {
  local: 'user/recruitment/localresume',
  foreign: 'user/recruitment/foreignresume'
}

const resumeApi = {
  /**
   * Update user bio
   */
  updateBio: async ({ userId, bio, session, type = 'local' }: UpdateBioParams) => {
    const axios = createClientAxios({ session: session });
    const url = type === 'local' ? resumeUrls.local : resumeUrls.foreign;

    try {
      const response = await axios.post(url + '/update/bio', {
        userid: userId,
        bio
      });
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, 'Error updating bio');
      throw new Error(errorMessage);
    }
  },

  /**
   * Update contact details
   */
  updateContactDetails: async ({ userId, contactDetails, session, type = 'local' }: UpdateContactDetailsParams) => {
    const axios = createClientAxios({ session: session });
    const url = type === 'local' ? resumeUrls.local : resumeUrls.foreign;

    try {
      const response = await axios.post(url + '/update/contact/detail', {
        userid: userId,
        contact_details: contactDetails

      });
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, 'Error updating contact details');
      throw new Error(errorMessage);
    }
  },

  /**
   * Update reference
   */
  updateReference: async ({ userId, reference, session, type = 'local' }: UpdateReferenceParams) => {
    const axios = createClientAxios({ session: session });
    const url = type === 'local' ? resumeUrls.local : resumeUrls.foreign;

    try {
      const response = await axios.post(url + '/update/reference', {
        userid: userId,
        reference
      });
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, 'Error updating reference');
      throw new Error(errorMessage);
    }
  },

  /**
   * Update grade
   */
  updateGrade: async ({ userId, grade, type = 'local' }: UpdateGradeParams) => {
    const url = type === 'local' ? resumeUrls.local : resumeUrls.foreign;
    try {
      const response = await axiosClient.post(url + '/update/grade', {
        userid: userId,
        grade
      });
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, 'Error updating grade');
      throw new Error(errorMessage);
    }
  },

  /**
   * Update work experience
   */
  updateWorkExperience: async ({ userId, workExperience, session, type = 'local' }: UpdateWorkExperienceParams) => {
    const axios = createClientAxios({ session: session });
    const url = type === 'local' ? resumeUrls.local : resumeUrls.foreign;
    try {
      const response = await axios.post(url + '/update/work/experience', {
        userid: userId,
        work_experience: workExperience
      });
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, 'Error updating work experience');
      throw new Error(errorMessage);
    }
  },

  /**
   * Update education
   */
  updateEducation: async ({ userId, education, session, type = 'local' }: UpdateEducationParams) => {
    const axios = createClientAxios({ session: session });
    const url = type === 'local' ? resumeUrls.local : resumeUrls.foreign;
    try {
      const response = await axios.post(url + '/update/education', {
        userid: userId,
        education
      });
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, 'Error updating education');
      throw new Error(errorMessage);
    }
  },

  /**
   * Retrieve resume
   */
  retrieveResume: async ({ userId, type = 'local' }: RetrieveResumeParams) => {
    const serverAxios = await createServerAxios();
    const url = type === 'local' ? 'user/recruitment/retrieve/localresume' : 'user/recruitment/retrieve/foreignresume';
    try {
      const response = await serverAxios.post(url, {
        userid: userId
      });

      return response.data;

    } catch (error) {

      const errorMessage = handleAxiosError(error, 'Error retrieving resume');
      throw new Error(errorMessage);

    }
  },

  /**
   * Update cover letter
   */
  updateCoverLetter: async ({ userId, coverLetter, session, type = 'local' }: UpdateCoverLetterParams) => {
    const axios = createClientAxios({ session: session });
    const url = type === 'local' ? resumeUrls.local : resumeUrls.foreign;
    try {
      const response = await axios.post(url + '/update/coverletter', {
        userid: userId,
        coverletter: coverLetter
      });
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, 'Error updating cover letter');
      throw new Error(errorMessage);
    }
  },

  /**
   * Update certification
   */
  updateCertification: async ({ userId, certification, session, type = 'local' }: UpdateCertificationParams) => {
    const axios = createClientAxios({ session: session });
    const url = type === 'local' ? resumeUrls.local : resumeUrls.foreign;
    try {
      const response = await axios.post(url + '/update/certification', {
        userid: userId,
        certification
      });
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, 'Error updating certification');
      throw new Error(errorMessage);
    }
  },


  /**
   * Delete work experience
   */
  deleteWorkExperience: async ({ userId, dataId, session, type = 'local' }: DeleteWorkExperienceParams) => {
    const axios = createClientAxios({ session: session });
    const url = type === 'local' ? 'user/recruitment/local/resume' : 'user/recruitment/foreign/resume';
    try {
      const response = await axios.post(url + '/delete/work_experience', {
        userid: userId,
        dataid: dataId
      });
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, 'Error deleting work experience');
      throw new Error(errorMessage);
    }
  },


  /**
   * Delete education
   */
  deleteEducation: async ({ userId, dataId, session, type = 'local' }: DeleteEducationParams) => {
    const axios = createClientAxios({ session: session });
    const url = type === 'local' ? 'user/recruitment/local/resume' : 'user/recruitment/foreign/resume';
    try {
      const response = await axios.post(url + '/delete/education', {
        userid: userId,
        dataid: dataId
      });
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, 'Error deleting education');
      throw new Error(errorMessage);
    }
  },


  /**
   * Delete certification
   */
  deleteCertification: async ({ userId, dataId, session, type = 'local' }: DeleteCertificationParams) => {
    const axios = createClientAxios({ session: session });
    const url = type === 'local' ? 'user/recruitment/local/resume' : 'user/recruitment/foreign/resume';
    try {
      const response = await axios.post(url + '/delete/certification', {
        userid: userId,
        dataid: dataId
      });
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, 'Error deleting certification');
      throw new Error(errorMessage);
    }
  },


  /**
   * Update other information
   */
  updateOthers: async ({ userId, skills, languages, hobby, noticePeriod, session, type = 'local' }: UpdateOthersParams) => {
    const axios = createClientAxios({ session: session });
    const url = type === 'local' ? resumeUrls.local : resumeUrls.foreign;
    try {
      const response = await axios.post(url + '/update/others', {
        userid: userId,
        others: {
          skills: skills,
          languages: languages,
          hobby: hobby,
          notice_period: noticePeriod
        }
      });
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, 'Error updating other information');
      throw new Error(errorMessage);
    }
  },
  /**
   * Update profile picture and CV uploads
   */
  updateUploads: async ({ userId, picture, cv, session, type = 'local' }: UpdateUploadsParams) => {
    const axios = createClientAxios({ session: session });
    const url = type === 'local' ? resumeUrls.local : resumeUrls.foreign;
    try {
      const response = await axios.post(url + '/update/upload', {
        userid: userId,
        upload: {
          picture: picture,
          cv: cv
        }
      });
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, 'Error updating uploads');
      throw new Error(errorMessage);
    }
  },

};

export default resumeApi;
