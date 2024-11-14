"use client";

import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/input";
import ContentLayout from "@/app/dashboard/recruitment/_components/content-layout";
import { useState } from "react";
import { useRouter } from "next/navigation";
import resumeApi from "@/api/local-resume";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import { ResumeType, UserResumeResponse } from "@/definition";


export default function ReferenceClient({
  next_route,
  reference: referenceState,
  type,
}: {
  next_route: string;
  reference: UserResumeResponse['reference'];
  type: ResumeType;
}) {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { data } = useSession();
  const [isLoading, setIsLoading] = useState(false);


  const [formData, setFormData] = useState({
    name: referenceState.name,
    email: referenceState.email,
    phone: referenceState.phone,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (formData.name === "" || formData.email === "" || formData.phone === "") {
      return enqueueSnackbar("Please fill in all fields", { variant: "error" });
    }
    try {
      setIsLoading(true);

      await resumeApi.updateReference({
        userId: data?.user?.id as string,
        type: type,
        reference: formData,
        session: data as Session
        });
      

      enqueueSnackbar("Reference added successfully", { variant: "success" });

      router.push(next_route);
    } catch (error) {
      enqueueSnackbar(error instanceof Error ? error.message : String(error), { variant: "error" });
    }finally {
      setIsLoading(false);
    }
  };

  return (
    <ContentLayout
      next_route={next_route}
      pageTitle="Provide Reference"
      step={5}
      isLoading={isLoading}
      nextFunction={handleSubmit}
    >
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Name of Referee
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 focus:p-2"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <Label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Email address of Referee
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 focus:p-2"
              placeholder="Enter email"
              required
            />
          </div>
        </div>
        <div>
          <Label
            htmlFor="phone"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Phone number of Referee
          </Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 p-2 focus:p-2"
            placeholder="Enter phone number"
            required
          />
        </div>
      </form>
    </ContentLayout>
  );
}
