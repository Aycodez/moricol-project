'use client';

import { routes } from "@/constants/routes";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/input";
import { UserResumeResponse } from "@/definition";
import ContentLayout from "@/app/dashboard/recruitment/_components/content-layout";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import { Plus, Trash2 } from "lucide-react";
import { ShadButton } from "@/components/shadcn-button";
import resumeApi from "@/api/local-resume";
import { Session } from "next-auth";
import { ResumeType } from "@/definition";

export default function ContactClient({ next_route, contact, type }: { type: ResumeType, next_route: string, contact: UserResumeResponse['contact_details'] }) {
  const router = useRouter();
  const snackbar = useSnackbar();
  const { data: session } = useSession();

  const [contactState, setContactState] = useState(contact);
  const [isLoading, setIsLoading] = useState(false);

  const addSocial = () => {
    setContactState({
      ...contactState,
      socials: [...contactState.socials, { option: '', optionUrl: '' }]
    });
  };

  const removeSocial = (index: number) => {
    setContactState({
      ...contactState,
      socials: contactState.socials.filter((_, i) => i !== index)
    });
  };

  const updateSocial = (index: number, field: 'option' | 'optionUrl', value: string) => {
    const newSocials = [...contactState.socials];
    newSocials[index] = {
      ...newSocials[index],
      [field]: value
    };
    setContactState({
      ...contactState,
      socials: newSocials
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    if (!contactState.name || !contactState.phone || contactState.socials.length === 0) {
      snackbar.enqueueSnackbar('Please fill in all fields', { variant: 'error' });
      setIsLoading(false);
      return;
    }

    try {
      await resumeApi.updateContactDetails({
        userId: session?.user.id as string,
        type,
        contactDetails: contactState,
        session: session as Session
      });

      snackbar.enqueueSnackbar('Contact details updated successfully', { variant: 'success' });
      setIsLoading(false);
      router.push(next_route);
    } catch (error) {
      snackbar.enqueueSnackbar('Failed to update contact details', { variant: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContentLayout
      next_route={routes.RECRUITMENT_PROFILE_PICTURE}
      pageTitle="How can we contact you? "
      step={8}
      isLoading={isLoading}
      nextFunction={handleSubmit}

    >
      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div>
            <Label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Full Name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              className="w-full rounded border border-gray-300 p-2 focus:p-2"
              placeholder="Enter your full name"
              required
              value={contactState.name}
              onChange={(e) => setContactState({ ...contactState, name: e.target.value })}
            />
          </div>
          <div>
            <Label
              htmlFor="phone"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Phone number
            </Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              className="w-full rounded border border-gray-300 p-2 focus:p-2"
              placeholder="Enter phone number"
              required
              value={contactState.phone}
              onChange={(e) => setContactState({ ...contactState, phone: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium text-gray-700">
              Social Media Profiles
            </Label>
            <ShadButton
              type="button"
              variant="outline"
              size="sm"
              onClick={addSocial}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Social Profile
            </ShadButton>
          </div>

          {contactState.socials.map((social, index) => (
            <div key={index} className="flex gap-2">
              <Input
                type="text"
                className="w-full rounded border border-gray-300 p-2 focus:p-2"
                placeholder="Enter social media platform (e.g. LinkedIn)"
                value={social.option}
                onChange={(e) => updateSocial(index, 'option', e.target.value)}
              />
              <Input
                type="url"
                className="w-full rounded border border-gray-300 p-2 focus:p-2"
                placeholder="Enter profile URL"
                value={social.optionUrl}
                onChange={(e) => updateSocial(index, 'optionUrl', e.target.value)}
              />
              <ShadButton
                type="button"
                variant="outline"
                size="icon"
                onClick={() => removeSocial(index)}
                className="shrink-0"
              >
                <Trash2 className="h-4 w-4" />
              </ShadButton>
            </div>
          ))}
        </div>
      </form>
    </ContentLayout>
  );
}
