"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Label } from "@/components/label";
import Button from "@/components/button";
import { BiUpload } from "react-icons/bi";
import ContentLayout from "../content-layout";
import { CreateJobParams } from "@/api/jobs";
import { useSnackbar } from "notistack";

interface CompanySetupFormProps {
  goBack: () => void;
  nextStep: () => void;
  setFormData: (formData: Omit<CreateJobParams, "userid" | "jobpostid" | "session">) => void;
  formData: Omit<CreateJobParams, "userid" | "jobpostid" | "session">;
}



export default function CompanySetupClient({ goBack, nextStep, setFormData, formData }: CompanySetupFormProps) {
  const [logo, setLogo] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { enqueueSnackbar } = useSnackbar();


  const updateImg = (file: File) => {
    if (file && typeof file === 'object') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setLogo(file as unknown as string);
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData({ ...formData, company_logo: file });
    }
  };

  const isFormValid = () => {
    const validations = [
      formData.company_bio.length >= 70,
      formData.company_name.trim() !== '',
      formData.company_email.trim() !== '',
      formData.company_phone.trim() !== '',
      formData.company_address.trim() !== '',
      logo !== null
    ];
    if (!validations.every(Boolean)) {
      const invalidFields = [
        !validations[0] && "Company bio",
        !validations[1] && "Company name",
        !validations[2] && "Company email",
        !validations[3] && "Company phone",
        !validations[4] && "Company address",
      ].filter(Boolean);

      enqueueSnackbar(`The following fields are required: ${invalidFields.join(', ')}.`, { variant: 'error' });
    }

    return validations.every(Boolean);
  };

  const handleNext = () => {
    if (isFormValid()) {
      nextStep();
    }
  };

  useEffect(() => {
    updateImg(formData.company_logo as unknown as File);
  }, [formData]);

  return (
    <ContentLayout
      step={8}
      pageTitle="Company profile setup"
      nextFunction={handleNext}
      backFunction={goBack}
    >
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gray-200">
            {logo ? (
              <img
                src={logo}
                alt="Company logo"
                className="h-full w-full object-cover"
              />
            ) : (
              <BiUpload className="h-8 w-8 text-gray-400" />
            )}
          </div>
          <Button className="bg-primary-500 w-fit text-white hover:bg-primary-600" type="button" onClick={() => fileInputRef.current?.click()}>
            Choose file
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            value={formData.company_name}
            onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
            placeholder="Jakeat"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            value={formData.company_email}
            onChange={(e) => setFormData({ ...formData, company_email: e.target.value })}
            placeholder="www.example.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Company Phone Number</Label>
          <Input
            id="phoneNumber"
            value={formData.company_phone}
            onChange={(e) => setFormData({ ...formData, company_phone: e.target.value })}
            placeholder="08165748911"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Company address</Label>
          <Input
            id="address"
            value={formData.company_address}
            onChange={(e) => setFormData({ ...formData, company_address: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Company&apos;s Bio</Label>
          <Textarea
            id="bio"
            value={formData.company_bio}
            onChange={(e) => setFormData({ ...formData, company_bio: e.target.value })}
            placeholder="Little introduction about the company"

            rows={4}


          />
          <p className="text-sm text-gray-500">Minimum 70 characters</p>
        </div>
      </form>
    </ContentLayout>
  );
}
