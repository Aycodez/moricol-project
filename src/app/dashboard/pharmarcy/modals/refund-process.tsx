"use client";

import Button from "@/components/button";
import ModalLayout from "@/components/layouts/modal-layout";
import { CancelSvg } from "@/components/svgs";
import { useState } from "react";

export default function SubmitProposal() {
  const [haveSubmittedProposal, setProposalSubmission] = useState(false);
  return (
    <>
      <div className="mt-10 text-center">
        <Button
          className="lg:max-w-[640px]"
          onClick={() => setProposalSubmission(true)}
        >
          CONTINUE
        </Button>
      </div>

      {haveSubmittedProposal && (
        <ModalLayout>
          <article className="w-[957px] rounded-lg bg-white px-14 py-6">
            <button
              className="mb-1 ml-auto flex h-4 w-4 items-center justify-center rounded-full border-2 border-secondary-500"
              onClick={() => setProposalSubmission(false)}
            >
              <CancelSvg stroke="#D81302" className="h-3 w-3" />
            </button>
            <p className="text-center text-base">
              Your request is been processed. Our Support team will reach out to
              you for further assistance.Sorry for any inconvenience
            </p>
          </article>
        </ModalLayout>
      )}
    </>
  );
}
