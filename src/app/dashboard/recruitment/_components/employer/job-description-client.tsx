"use client";

import { Textarea } from "@/components/textarea";
import ContentLayout from "../content-layout";
import { useSnackbar } from "notistack";
import { CreateJobParams } from "@/api/jobs";

interface JobRoleDescriptionFormProps {
  goBack: () => void;
  nextStep: () => void;
  setFormData: (formData: Omit<CreateJobParams, "userid" | "jobpostid" | "session">) => void;
  formData: Omit<CreateJobParams, "userid" | "jobpostid" | "session">;
}

export default function JobRoleDescriptionForm({ goBack, nextStep, setFormData, formData }: JobRoleDescriptionFormProps) {

  const { enqueueSnackbar } = useSnackbar();

  const isValid = () => {
    const validations = [
      formData.description.length > 70,
      formData.requirement.length > 70
    ];

    const allValid = validations.every(Boolean);

    if (!allValid) {
      const invalidFields = [
        !validations[0] && "Description",
        !validations[1] && "Requirement",
      ].filter(Boolean);

      enqueueSnackbar(`The following fields must have a minimum length of 70 characters: ${invalidFields.join(', ')}.`, { variant: 'error' });
    }

    return allValid;
  }
  const handleNextStep = () => {
    if (isValid()) {
      nextStep();
    }
  };



  return (
    <ContentLayout
      pageTitle="Job role description"
      nextFunction={handleNextStep}
      backFunction={goBack}
      step={4}
    >
      <h2 className="mb-6 text-2xl font-bold"></h2>
      <form className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="jobDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Describe job role
          </label>
          <div className="relative mt-1">
            <Textarea
              id="jobDescription"
              name="description"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 p-2 focus:p-2"
              placeholder="Keep records of each medical records ..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
            <div className="absolute bottom-2 right-2 text-sm text-gray-500">
              Minimum 70 characters
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="requirements"
            className="block text-sm font-medium text-gray-700"
          >
            Requirements
          </label>
          <div className="space-y-2">
            <Textarea
              placeholder="Created [accounting rule], which resulted in [percentage improvement]"
              className="w-full p-2 focus:p-2"
              value={formData.requirement}
              name="requirement"
              onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
            />

          </div>
        </div>
      </form>
    </ContentLayout>
  );
}
