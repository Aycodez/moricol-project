"use client";

import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { UserResumeResponse } from "@/definition";
import ResumeView from "../../_components/resume-view";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";

interface CollapsibleSectionProps {
  title: string;
  number: number;
  children: React.ReactNode;
}


function CollapsibleSection({
  title,
  number,
  children,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-gray-200 transition-all duration-300 ease-in-out">
      <button
        className="flex h-full w-full items-center justify-between rounded-xl p-3 text-left hover:bg-gray-50 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <div className="mr-4 flex h-8 w-8 transform items-center justify-center rounded-full bg-yellow-500 text-white transition-transform duration-300 ease-in-out hover:scale-110">
            {number}
          </div>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <div className="transform transition-transform duration-300 ease-in-out hover:scale-110">
          {isOpen ? (
            <BiChevronUp className="h-6 w-6" />
          ) : (
            <BiChevronDown className="h-6 w-6" />
          )}
        </div>
      </button>
      <div
        className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function ResumeClient( {resume}: {resume: {local: UserResumeResponse, foreign: UserResumeResponse}} ) {
  const {data} = useSession();
  return (
    <div className="animate-fadeIn mx-auto max-w-4xl rounded-xl bg-white py-4">
      <CollapsibleSection title="Resume (Locally)" number={1}>
      
        <ResumeView resume={resume.local} session={data as Session} />  
      </CollapsibleSection>

      <CollapsibleSection title="Resume (Foreign)" number={2}>
      
      <ResumeView resume={resume.foreign} session={data as Session} />
      </CollapsibleSection>
    </div>
  );
}
