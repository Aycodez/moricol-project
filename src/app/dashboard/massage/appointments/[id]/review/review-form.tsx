"use client";

import TextAreaInput from "@/components/auth/textarea-input";
import Button from "@/components/button";
import React from "react";

export default function ReviewForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <ul className="mb-12 grid gap-y-6">
        <li className="relative w-full">
          <TextAreaInput
            label="Write a review"
            name=""
            placeholder="Tell people about your experience"
          />
          <p className="absolute right-0 top-1 text-xs lg:text-sm">Max 450</p>
        </li>
        <li>
          <p className="text-grey-800 mb-2.5 inline-block font-medium">
            Would you recommend Abiola Dauda to your friends?
          </p>
          <div className="flex gap-x-12">
            <div className="flex items-center gap-x-4">
              <input type="checkbox" id="recommend-yes" />
              <label htmlFor="recommend-yes">Yes</label>
            </div>
            <div className="flex items-center gap-x-4">
              <input type="checkbox" id="recommend-no" />
              <label htmlFor="recommend-no">No</label>
            </div>
          </div>
        </li>
      </ul>
      <div>
        <Button className="w-full">SUBMIT REVIEW</Button>
      </div>
    </form>
  );
}
