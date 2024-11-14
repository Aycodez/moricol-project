"use client";

import { useState } from "react";
import ModalLayout from "../../../../components/layouts/modal-layout";
import Button from "@/components/button";
import { CancelSvg, ChevronDownSvg, PaperPlaneSvg } from "@/components/svgs";

export default function ComposeMessage() {
  const [isMessageModalOpen, setMessageModal] = useState(false);

  const closeMessageModal = () => setMessageModal(false);
  const openMessageModal = () => setMessageModal(true);

  return (
    <>
      <button
        className="felx h-10 items-center bg-[#EBEBFF] px-4 text-sm font-semibold text-[#564FFD]"
        onClick={openMessageModal}
      >
        + Compose
      </button>

      {isMessageModalOpen && (
        <ModalLayout>
          <article className="w-[648px] bg-white">
            <header className="flex items-center justify-between border-b border-[#E9EAF0] px-5 py-4">
              <h3 className="font-medium text-[#1D2026]">New Message</h3>
              <button onClick={closeMessageModal}>
                <CancelSvg />
              </button>
            </header>
            <form className="grid gap-y-4 p-6">
              <div>
                <label
                  htmlFor="teacher"
                  className="mb-1.5 block text-sm text-[#1D2026]"
                >
                  Teacher
                </label>
                <div className="relative">
                  <select
                    name=""
                    id="teacher"
                    className="w-full appearance-none border border-[#E9EAF0] px-5 py-3"
                  >
                    <option value=""></option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2">
                    <ChevronDownSvg />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm text-[#1D2026]"
                >
                  Message
                </label>
                <textarea
                  name=""
                  id="message"
                  placeholder="Write your message here..."
                  className="h-32 w-full resize-none border border-[#E9EAF0] px-5 py-3"
                ></textarea>
              </div>

              <div className="mt-2 flex justify-between">
                <button
                  type="button"
                  className="flex w-fit shrink-0 items-center gap-x-3 rounded-none bg-[#F5F7FA] px-6 py-3 font-semibold text-[#1D2026]"
                  onClick={closeMessageModal}
                >
                  Cancel
                </button>
                <Button className="flex w-fit shrink-0 items-center gap-x-3 rounded-none px-6 py-3 font-semibold">
                  Send Message <PaperPlaneSvg />
                </Button>
              </div>
            </form>
          </article>
        </ModalLayout>
      )}
    </>
  );
}
