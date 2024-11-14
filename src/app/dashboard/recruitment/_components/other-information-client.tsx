"use client";

import { forwardRef, useRef, useState } from "react";
import { BiChevronDown, BiPlus, BiX } from "react-icons/bi";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/input";
import ContentLayout from "./content-layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import resumeApi from "@/api/local-resume";
import { Session } from "next-auth";
import { useSnackbar } from "notistack";
import Button from "@/components/button";
import { ResumeType, UserResumeResponse } from "@/definition";


interface Tag {
  id: number;
  text: string;
}

export default function OtherInformationClient({
  type,
  others,
  next_route,
}: {
  type: ResumeType,
  next_route: string;
  others: UserResumeResponse['others']
}) {
  const [skills, setSkills] = useState<Tag[]>(others.skills.map((skill) => ({ id: Date.now(), text: skill })));
  const [languages, setLanguages] = useState<Tag[]>(others.languages.map((language) => ({ id: Date.now(), text: language })));
  const [hobbies, setHobbies] = useState<Tag[]>(others.hobby.map((hobby) => ({ id: Date.now(), text: hobby })));
  const [noticePeriod, setNoticePeriod] = useState(others.notice_period && others.notice_period === '' ? 'Immediately' : others.notice_period);

  const addTag = (
    section: "skills" | "languages" | "hobbies",
    text: string,
  ) => {
    const newTag = { id: Date.now(), text };
    switch (section) {
      case "skills":
        setSkills([...skills, newTag]);
        break;
      case "languages":
        setLanguages([...languages, newTag]);
        break;
      case "hobbies":
        setHobbies([...hobbies, newTag]);
        break;
    }
  };

  const removeTag = (
    section: "skills" | "languages" | "hobbies",
    id: number,
  ) => {
    switch (section) {
      case "skills":
        setSkills(skills.filter((skill) => skill.id !== id));
        break;
      case "languages":
        setLanguages(languages.filter((language) => language.id !== id));
        break;
      case "hobbies":
        setHobbies(hobbies.filter((hobby) => hobby.id !== id));
        break;
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    section: "skills" | "languages" | "hobbies",
  ) => {
    if (e.key === "Enter" && e.currentTarget.value) {
      addTag(section, e.currentTarget.value);
      e.currentTarget.value = "";
    }
  };

  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async () => {
    // check that at least one skill, language or hobby is added
    if (skills.length === 0 && languages.length === 0 && hobbies.length === 0) {
      enqueueSnackbar("Please add at least one skill, language or hobby", {
        variant: "error",
      });
      return;
    }

    try {
      setLoading(true);
      const userId = session?.user?.id as string;

      await resumeApi.updateOthers({
        userId: userId,
        skills: skills.map((skill) => skill.text),
        languages: languages.map((language) => language.text),
        hobby: hobbies.map((hobby) => hobby.text),
        noticePeriod: noticePeriod,
        session: session as Session,
        type: type
      });

      enqueueSnackbar("Other information updated successfully", {
        variant: "success",
      });
      router.push(next_route);
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error updating other information", {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const skillsRef = useRef<HTMLInputElement>(null);
  const languagesRef = useRef<HTMLInputElement>(null);
  const hobbiesRef = useRef<HTMLInputElement>(null);

  return (
    <ContentLayout
      next_route={next_route}
      pageTitle="Other Information"
      step={7}
      isLoading={loading}
      nextFunction={handleSubmit}
    >
      <form className="space-y-6">
        <div>
          <Label
            htmlFor="skills"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Skills
          </Label>
          <div className="flex flex-wrap gap-2 rounded border border-gray-300 p-2">
            {skills.map((skill) => (
              <span
                key={skill.id}
                className="flex items-center rounded-full bg-yellow-100 px-2 py-1 text-sm"
              >
                {skill.text}
                <button
                  type="button"
                  onClick={() => removeTag("skills", skill.id)}
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  <BiX size={14} />
                </button>
              </span>
            ))}

            <div className="flex w-full items-center gap-2">
              <Input
                type="text"
                id="skills"
                className="flex-grow bg-transparent outline-none focus:p-2 p-2"
                placeholder="Add a skill"
                onKeyDown={(e) => handleKeyDown(e, "skills")}
                ref={skillsRef}
              />
              <AddTagButton section="skills" addTag={addTag} inputRef={skillsRef} />
            </div>
          </div>
        </div>
        <div>
          <Label
            htmlFor="languages"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Languages
          </Label>
          <div className="flex flex-wrap gap-2 rounded border border-gray-300 p-2">
            {languages.map((language) => (
              <span
                key={language.id}
                className="flex items-center rounded-full bg-yellow-100 px-2 py-1 text-sm"
              >
                {language.text}
                <button
                  type="button"
                  onClick={() => removeTag("languages", language.id)}
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  <BiX size={14} />
                </button>
              </span>
            ))}
            <div className="flex w-full items-center gap-2">
              <Input
                type="text"
                id="languages"
                className="flex-grow bg-transparent outline-none focus:p-2 p-2"
                placeholder="Add a language"
                onKeyDown={(e) => handleKeyDown(e, "languages")}
                ref={languagesRef}
              />
              <AddTagButton section="languages" addTag={addTag} inputRef={languagesRef} />
            </div>
          </div>
        </div>
        <div>
          <Label
            htmlFor="hobbies"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Hobbies
          </Label>
          <div className="flex flex-wrap gap-2 rounded border border-gray-300 p-2">
            {hobbies.map((hobby) => (
              <span
                key={hobby.id}
                className="flex items-center rounded-full bg-yellow-100 px-2 py-1 text-sm"
              >
                {hobby.text}
                <button
                  type="button"
                  onClick={() => removeTag("hobbies", hobby.id)}
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  <BiX size={14} />
                </button>
              </span>
            ))}
            <div className="flex w-full items-center gap-2">
              <Input
                type="text"
                id="hobbies"
                className="flex-grow bg-transparent outline-none focus:p-2 p-2"
                placeholder="Add a hobby"
                onKeyDown={(e) => handleKeyDown(e, "hobbies")}
                ref={hobbiesRef}
              />
              <AddTagButton section="hobbies" addTag={addTag} inputRef={hobbiesRef} />
            </div>
          </div>
        </div>
        <div>
          <Label
            htmlFor="noticePeriod"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Notice Period for Resumption
          </Label>
          <div className="relative">
            <select
              id="noticePeriod"
              value={noticePeriod}
              onChange={(e) => setNoticePeriod(e.target.value)}
              className="w-full appearance-none rounded border border-gray-300 bg-yellow-100 p-2"
            >
              <option>Immediately</option>
              <option>1 week</option>
              <option>2 weeks</option>
              <option>1 month</option>
            </select>
            <BiChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-400" />
          </div>
        </div>
      </form>
    </ContentLayout>
  );
}

const AddTagButton = forwardRef<HTMLButtonElement, {
  section: "skills" | "languages" | "hobbies",
  addTag: (section: "skills" | "languages" | "hobbies", text: string) => void,
  inputRef: React.RefObject<HTMLInputElement>
}>(({ section, addTag, inputRef }) => {
  return (
    <Button

      type="button"
      size="fit"
      onClick={() => {
        if (inputRef.current?.value) {
          addTag(section, inputRef.current.value)
          inputRef.current.value = ""
        }
      }}
      className="w-fit px-2 py-3 bg-green-500 hover:bg-green-600 text-white flex items-center gap-1"
    >
      <BiPlus size={14} />
      <span className="text-xs">ADD </span>
    </Button>
  )
});

AddTagButton.displayName = 'AddTagButton';