"use client";
import React, { useState } from "react";
import JobDetailsForm from "../../../_components/employer/job-details-form";
import JobRoleDescriptionForm from "../../../_components/employer/job-description-client";
import PersonalDetailsClient from "../../../_components/employer/personal-details-client";
import CompanySetupClient from "../../../_components/employer/company-setup-client";
import PreviewJobClient from "../../../_components/employer/preview-job-client";
import { CreateJobParams } from "@/api/jobs";
import { JobPostResponse } from "@/definition";



function EmployerJobClient({ jobpost }: { jobpost?: JobPostResponse | null }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Omit<CreateJobParams, "userid" | "jobpostid" | "session">>(

    {
      min_experience: jobpost ? jobpost.min_experience : 0,
      min_salary: jobpost ? jobpost.min_salary : 0,
      max_salary: jobpost ? jobpost.max_salary : 0,
      state: jobpost ? jobpost.state : "",
      working_condition: jobpost ? jobpost.working_condition : "",
      job_level: jobpost ? jobpost.job_level : "",
      job_type: jobpost ? jobpost.job_type as "fulltime" | "parttime" | "contract" : "fulltime",
      candidate_title: jobpost ? jobpost.candidate_title : "",
      company_email: jobpost ? jobpost.company_email : "",
      company_name: jobpost ? jobpost.company_name : "",
      company_logo: jobpost ? jobpost.company_logo : "",
      end_date: jobpost ? jobpost.end_date : "",
      start_date: jobpost ? jobpost.start_date : "",
      religion: jobpost ? jobpost.religion : [],
      marital_status: jobpost ? jobpost.marital_status : [],
      gender: jobpost ? jobpost.gender : [],
      description: jobpost ? jobpost.description : "",
      country: jobpost ? jobpost.country : "",
      company_bio: jobpost ? jobpost.company_bio : "",
      company_address: jobpost ? jobpost.company_address : "",
      company_phone: jobpost ? jobpost.company_phone : "",
      academic_qualification: jobpost ? jobpost.academic_qualification : [],
      requirement: jobpost ? jobpost.requirement : "",
      slot: jobpost ? jobpost.slot : 0,
    }
  )

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const goBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };



  return (
    <div>
      {step === 1 && <JobDetailsForm nextStep={nextStep} setFormData={setFormData} formData={formData} />}
      {step === 2 && <JobRoleDescriptionForm goBack={goBack} nextStep={nextStep} setFormData={setFormData} formData={formData} />}
      {step === 3 && <PersonalDetailsClient goBack={goBack} nextStep={nextStep} setFormData={setFormData} formData={formData as CreateJobParams} />}
      {step === 4 && <CompanySetupClient goBack={goBack} nextStep={nextStep} setFormData={setFormData} formData={formData} />}
      {step === 5 && <PreviewJobClient goBack={goBack} formData={formData} job_id={jobpost ? jobpost._id : null} />}
    </div>
  );
}

export default EmployerJobClient;
