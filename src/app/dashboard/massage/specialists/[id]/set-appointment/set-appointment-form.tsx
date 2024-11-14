"use client";

import SelectInput from "@/components/auth/select-input";
import TextInput from "@/components/auth/text-input";
import TextAreaInput from "@/components/auth/textarea-input";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SetAppointmentForm() {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState("office");

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLocation(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push("payment");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="border-b border-b-[#EAECF0] px-5 pb-9">
        <SelectInput label="Massage Therapy Categories" name="gender">
          <option></option>
        </SelectInput>
      </fieldset>
      <fieldset className="grid grid-cols-2 gap-x-7 border-b border-b-[#EAECF0] px-5 py-6">
        <SelectInput label="Starts meeting" name="gender">
          <option></option>
        </SelectInput>
        <SelectInput label="Ends meeting" name="gender">
          <option></option>
        </SelectInput>
      </fieldset>
      <fieldset className="grid gap-y-10 border-b border-b-[#EAECF0] px-5 py-6">
        <TextAreaInput label="Note to the masseuse" name="" />
        <div>
          <p className="text-grey-800 mb-1 inline-block font-medium">
            Where would you want the massage to hold?
          </p>
          <div className="flex items-center gap-x-9">
            <div className="flex items-center gap-x-2.5">
              <input
                type="radio"
                value="office"
                id="office"
                name="location"
                className="h-5 w-5"
                checked={selectedLocation === "office"}
                onChange={handleLocationChange}
              />
              <label htmlFor="office">Moricol Office</label>
            </div>
            <div className="flex items-center gap-x-2.5">
              <input
                type="radio"
                value="home"
                id="home"
                name="location"
                className="h-5 w-5"
                checked={selectedLocation === "home"}
                onChange={handleLocationChange}
              />
              <label htmlFor="home">Home Address</label>
            </div>
          </div>
        </div>
      </fieldset>
      {selectedLocation === "home" ? (
        <fieldset className="grid gap-y-6 px-5 py-11">
          <legend>
            We will require you to provide the following information to be able
            to continue with this service?
          </legend>
          <SelectInput label="State" name="gender">
            <option>Select a state</option>
          </SelectInput>
          <SelectInput label="Closest Landmark" name="gender">
            <option>Which landmark is closest to you?</option>
          </SelectInput>
          <TextAreaInput label="Address" name="" />
          <TextInput label="Provide your BVN" name="" />

          <p className="bg-primary-50 px-3 py-3.5 font-medium">
            Note: You will be charged based on how many Kilometers away you are
            from Moricol’s office
          </p>
        </fieldset>
      ) : (
        <div className="px-5 py-11">
          <p className="bg-primary-50 px-3 py-3.5 font-medium">
            We are located at: Lorem ipsum dolor sit amet consectetur. Nibh
            suspendisse tincidunt lacus gravida tellus neque et eget. Facilisis
            et maecenas egestas diam quisque ut nulla vitae consequat. At.
          </p>
        </div>
      )}

      <div className="px-5">
        <Button type="submit">SET APPOINTMENT</Button>
      </div>
    </form>
  );
}
