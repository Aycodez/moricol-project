"use client";

import SelectInput from "@/components/auth/select-input";
import TextInput from "@/components/auth/text-input";
import TextAreaInput from "@/components/auth/textarea-input";
import Button from "@/components/button";
import FileInput from "@/components/file-input";
import { landingPageServices } from "@/constants";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import ModalLayout from "@/components/layouts/modal-layout";
import { CancelSvg } from "@/components/svgs";

const conditions = [
  "Stroke",
  "Cancer",
  "Parkison's",
  "Diabetes",
  "Learning disabilities",
  "Alzeheimer's",
  "Blindness",
  "Mental Illness",
  "Others",
];

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState("office");
  const [step, setStep] = useState(0);

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLocation(event.target.value);
  };

  const nextStep = () => {
    setStep(step + 1);
  };


  return (
    <main>
      <div></div>

      {step === 0 && (
        <section className="px-20 pb-9 pt-3">
          <div className="border-grey-300 border-b pb-5">
            <p className="text-grey-800 mb-3.5 inline-block font-medium">
              Which of these best describes your situation?
            </p>
            <div className="flex items-center gap-x-9">
              <div className="flex items-center gap-x-2.5">
                <input
                  type="radio"
                  value="office"
                  id="office"
                  name="location"
                  checked={selectedLocation === "office"}
                  onChange={(e) => handleLocationChange(e)}
                  className="h-5 w-5"
                />
                <label htmlFor="office">
                  Individual looking for care giver
                </label>
              </div>
              <div className="flex items-center gap-x-2.5">
                <input
                  type="radio"
                  value="home"
                  id="home"
                  name="location"
                  checked={selectedLocation === "home"}
                  onChange={(e) => handleLocationChange(e)}
                  className="h-5 w-5"
                />
                <label htmlFor="home">
                  Individual looking for specialist care
                </label>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-300 pb-10 pt-5">
            <SelectInput  name="" label="Who Requires this service">
              <option value="">Select</option>
              <option value="">Myself</option>
              <option value="">Spouse</option>
              <option value="">Child</option>
              <option value="">Parent</option>
              <option value="">Grandparent</option>
            </SelectInput>
          </div>
          <div className="border-b border-gray-300 pb-10 pt-5">
            <SelectInput name="" label="Choose your care specialist">
              <option value="">Select One</option>
            </SelectInput>
          </div>
          <div className="pb-6 pt-8">
            <TextInput name="" label="Which Service is required?" />
          </div>
          <div className="mb-6 grid grid-cols-2 justify-between gap-x-3 gap-y-5 lg:grid-cols-5">
            {landingPageServices.homeCare.services.map(({ bg, service }) => (
              <ServiceCard key={service} bg={bg} service={service} />
            ))}
          </div>
          <Button onClick={nextStep}>Continue</Button>
        </section>
      )}

      {step === 1 && (
        <section className="pb-9 pt-3">
          <div className="gray-container px-8 py-6">
            <h2 className="mb-7 text-center text-lg font-medium">
              Provide the following information about the care patient
            </h2>

            <form className="grid gap-y-10">
              <div>
                <p className="mb-5">Any Special Condition</p>
                <ul className="mb-3 grid max-w-[612px] grid-cols-3 gap-2">
                  {conditions.map((condition, i) => (
                    <li key={i} className="flex items-center gap-x-2">
                      <input
                        type="checkbox"
                        name=""
                        value={condition}
                        id={condition}
                        className="h-5 w-5 border-[#D0D5DD] bg-white"
                      />
                      <label
                        htmlFor={condition}
                        className="text-sm font-medium text-[#4B5563]"
                      >
                        {condition}
                      </label>
                    </li>
                  ))}
                </ul>
                <TextInput name="" label="Type other illnesses" />
              </div>

              <div>
                <div className="mb-3">
                  <p className="text-grey-800 mb-1 inline-block font-medium">
                    Do you have difficulty sleeping?
                  </p>
                  <div className="flex items-center gap-x-9">
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="office"
                        id="office"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="office">Yes</label>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="home"
                        id="home"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="home">No</label>
                    </div>
                  </div>
                </div>
                <TextAreaInput
                  label="Would you like to add more information"
                  name=""
                />
              </div>

              <div>
                <div className="mb-3">
                  <p className="text-grey-800 mb-1 inline-block font-medium">
                    Do you have memory issue?
                  </p>
                  <div className="flex items-center gap-x-9">
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="office"
                        id="office"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="office">Yes</label>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="home"
                        id="home"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="home">No</label>
                    </div>
                  </div>
                </div>
                <TextAreaInput
                  label="Would you like to add more information"
                  name=""
                />
              </div>

              <div>
                <div className="mb-5">
                  <p className="text-grey-800 mb-1 inline-block font-medium">
                    Are you self caring?
                  </p>
                  <div className="flex items-center gap-x-9">
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="office"
                        id="office"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="office">Yes</label>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="home"
                        id="home"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="home">No</label>
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <p className="text-grey-800 mb-1 inline-block font-medium">
                    Do you have trouble lifting?
                  </p>
                  <div className="flex items-center gap-x-9">
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="office"
                        id="office"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="office">
                        Individual looking for care giver
                      </label>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="home"
                        id="home"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="home">
                        Individual looking for specialist care
                      </label>
                    </div>
                  </div>
                </div>
                <TextAreaInput
                  label="Would you like to add more information"
                  name=""
                />
              </div>

              <div>
                <div className="mb-5">
                  <p className="text-grey-800 mb-1 inline-block font-medium">
                    When is the care required?
                  </p>
                  <div className="flex items-center gap-x-9">
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="office"
                        id="office"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="office">As soon as possible</label>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="home"
                        id="home"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="home">Within the next week</label>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-grey-800 mb-1 inline-block font-medium">
                    Which type of care is required?
                  </p>
                  <div className="flex items-center gap-x-9">
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="office"
                        id="office"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="office">Overnight</label>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="home"
                        id="home"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="home">Live in</label>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="home"
                        id="home"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="home">Visiting</label>
                    </div>
                  </div>
                </div>
              </div>
              <Button onClick={nextStep}>Continue</Button>
            </form>
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="pb-9 pt-3">
          <div className="gray-container py-6">
            <h2 className="mb-7 text-center text-lg font-medium">
              Personal Details of Care Recipient
            </h2>

            <form>
              <fieldset className="grid gap-y-8 border-b border-primary-500 px-8 pb-8">
                <TextInput name="" label="First Name" />
                <TextInput name="" label="Last Name" />
                <TextInput name="" label="Phone Number" />
                <TextInput name="" label="Gender" />
                <TextInput name="" label="Date of Birth" />
                <TextInput name="" label="Location of Care Receipient" />
              </fieldset>
              <fieldset className="grid gap-y-8 px-8 py-8">
                <div>
                  <label className="mb-5 block">Risk Assessment</label>
                  <ul className="mb-3 grid max-w-[612px] grid-cols-3 gap-2">
                    {conditions.map((condition, i) => (
                      <li className="flex items-center gap-x-2" key={i}>
                        <input
                          type="checkbox"
                          name=""
                          value={condition}
                          id={condition}
                          className="h-5 w-5 border-[#D0D5DD] bg-white"
                        />
                        <label
                          htmlFor={condition}
                          className="text-sm font-medium text-[#4B5563]"
                        >
                          {condition}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="">
                  <p className="text-grey-800 mb-1 inline-block font-medium">
                    Is the client aggressive?
                  </p>
                  <div className="flex items-center gap-x-9">
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="office"
                        id="office"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="office">Yes</label>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="home"
                        id="home"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="home">No</label>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-grey-800 mb-1 inline-block font-medium">
                    Mobility
                  </p>
                  <div className="flex items-center gap-x-9">
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="office"
                        id="office"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="office">Independent</label>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="home"
                        id="home"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="home">Dependent</label>
                    </div>
                  </div>
                </div>
                <TextAreaInput
                  name=""
                  label="List other information you would like us to know"
                />
                <TextAreaInput
                  name=""
                  label="List other medication you would like us to know"
                />
                <FileInput title="Upload image of care patient" />
              </fieldset>
              <div className="px-8">
                <Button onClick={nextStep}>Continue</Button>
              </div>
            </form>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="pb-9 pt-3">
          <div className="gray-container py-6">
            <h2 className="mb-7 text-center text-lg font-medium">
              Find a caregiver
            </h2>

            <form>
              <fieldset className="grid gap-y-8 border-b border-primary-500 px-8 pb-8">
                <div className="">
                  <p className="text-grey-800 mb-1 inline-block font-medium">
                    Gender
                  </p>
                  <div className="flex items-center gap-x-9">
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="office"
                        id="office"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="office">Male</label>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="home"
                        id="home"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="home">Female</label>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-grey-800 mb-1 inline-block font-medium">
                    Religion
                  </p>
                  <div className="flex items-center gap-x-9">
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="office"
                        id="office"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="office">Islam</label>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="home"
                        id="home"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="home">Christian</label>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-grey-800 mb-1 inline-block font-medium">
                    Age bracket
                  </p>
                  <div className="flex items-center gap-x-9">
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="office"
                        id="office"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="office">18-25</label>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="home"
                        id="home"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="home">26-35</label>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                      <input
                        type="radio"
                        value="home"
                        id="home"
                        name="location"
                        className="h-5 w-5"
                      />
                      <label htmlFor="home">36-45</label>
                    </div>
                  </div>
                </div>
                <TextInput name="" label="Ethnicity" />
              </fieldset>
              <fieldset className="grid gap-y-8 border-b border-primary-500 px-8 py-8">
                <SelectInput name="" label="Preferred Language of caregiver">
                  <option value="">English</option>
                </SelectInput>
                <div>
                  <label className="mb-5 block">
                    Preferred Care Giver Arrangement
                  </label>
                  <ul className="mb-3 grid max-w-[612px] gap-3">
                    {[
                      "I want the caregiver to live with the care recipient",
                      "I want the care giver to come form their home",
                    ].map((condition, i) => (
                      <li className="flex items-center gap-x-2" key={i}>
                        <input
                          type="checkbox"
                          name=""
                          value={condition}
                          id={condition}
                          className="h-5 w-5 border-[#D0D5DD] bg-white"
                        />
                        <label
                          htmlFor={condition}
                          className="text-sm font-medium text-[#4B5563]"
                        >
                          {condition}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </fieldset>
              <fieldset className="grid gap-y-8 px-8 py-8">
                <h3 className="text-lg font-semibold">Extra</h3>
                <p className="text-medium max-w-[586px] text-lg">
                  Please note that these services are not covered in the fees
                  paid, and you will be charged separately
                </p>

                <div>
                  <label className="mb-5 block">
                    Would you like us to come with any of the following?
                  </label>
                  <ul className="mb-3 grid max-w-[612px] gap-3">
                    {["Adult Diapers", "BP Testing", "Thermometer"].map(
                      (condition, i) => (
                        <li className="flex items-center gap-x-2" key={i}>
                          <input
                            type="checkbox"
                            name=""
                            value={condition}
                            id={condition}
                            className="h-5 w-5 border-[#D0D5DD] bg-white"
                          />
                          <label
                            htmlFor={condition}
                            className="text-sm font-medium text-[#4B5563]"
                          >
                            {condition}
                          </label>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <p>
                  We will require you to provide the following information to be
                  able to continue with this service.
                </p>
                <TextInput name="" label="Provide your BVN" />
              </fieldset>
              <div className="px-8">
                <Button onClick={nextStep}>Continue</Button>
              </div>
            </form>
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="px-20 py-5">
          <p>
            Lorem ipsum dolor sit amet consectetur. Euismod interdum tincidunt
            eget pellentesque in turpis. Arcu tortor pellentesque in felis leo
            semper. Vitae quam vitae tellus accumsan lectus et vulputate auctor
            at. Vitae ipsum aliquet cras nibh euismod. Tincidunt condimentum
            scelerisque enim vitae purus eleifend maecenas non. Lorem eleifend
            tortor pulvinar porttitor. Nunc sed tortor viverra felis nisl
            molestie adipiscing. Sed in vitae scelerisque justo tortor nam porta
            arcu pulvinar. Eu sagittis luctus commodo convallis commodo sodales
            egestas arcu. Morbi duis varius eget at laoreet arcu enim nisi.
            Morbi viverra lobortis nisl ut vivamus laoreet fermentum vel. Aenean
            maecenas lorem sed et amet nullam viverra. Nunc vivamus egestas
            massa libero lectus dolor ac venenatis. Tincidunt a tempor quam eu
            elementum sit id condimentum ultrices. Venenatis id ut sem pulvinar
            ut eget sit sit enim. Mi duis quis venenatis sapien. Felis sit vel
            nisl suspendisse sed ornare natoque pretium turpis. Ornare nibh
            pulvinar morbi posuere libero condimentum id turpis cras. Sed cras
            tempor vitae ultrices ac. Urna commodo suscipit purus accumsan
            bibendum eu integer. Diam a mi hendrerit facilisi. Adipiscing ut
            aenean vulputate dictum eget nisl adipiscing arcu egestas. Vitae
            quis ut massa viverra gravida et est. Molestie mollis nisi
            adipiscing felis tristique blandit tellus ridiculus. Quisque purus
            aliquet sem sapien nulla viverra. Viverra vehicula amet adipiscing
            ac. Senectus.
          </p>
          <div className="mb-10 mt-8 flex items-center gap-x-3">
            <input type="checkbox" className="h-5 w-5" />
            <label htmlFor="">
              You agree that to our this Terms & Conditions
            </label>
          </div>
          <Button className="max-w-[652px]" onClick={nextStep}>
            CONTINUE
          </Button>
        </section>
      )}

      {step === 5 && (
        <section className="px-20 pb-9 pt-3">
          <div className="border-grey-300 border-b pb-5">
            <p className="text-grey-800 mb-1 inline-block font-medium">
              Which of these best describes your situation?
            </p>

            <div className="flex max-w-[767px] items-center gap-x-9">
              <div className="flex items-center gap-x-2.5">
                <input
                  type="radio"
                  value="office"
                  id="office"
                  name="location"
                  className="h-5 w-5"
                />
                <label htmlFor="office">One time service charge</label>
              </div>
              <div className="flex items-center gap-x-2.5">
                <input
                  type="radio"
                  value="home"
                  id="home"
                  name="location"
                  className="h-5 w-5"
                />
                <label htmlFor="home">Monthly service charge</label>
              </div>
            </div>
          </div>
          <div className="grid max-w-[767px] gap-y-5 py-7">
            <SelectInput name="" label="Pick Your Timeline">
              <option value="">Select one</option>
            </SelectInput>

            <TextInput name="" label="Available Date" type="date" />

            <div>
              <p>Available Time</p>
              <div className="grid grid-cols-2 gap-x-10">
                <TextInput name="" type="date" />
                <TextInput name="" type="date" />
              </div>
            </div>

            <RegisterationCompletionBtn />
          </div>
        </section>
      )}
    </main>
  );
}

function ServiceCard({ bg, service }: { bg: string; service: string }) {
  return (
    <article
      className="relative h-[172.1px] w-full max-w-[181.78px] shrink-0 rounded bg-cover bg-no-repeat object-top"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 overflow-hidden text-center text-sm font-semibold text-white">
        {service}
      </p>
    </article>
  );
}

function RegisterationCompletionBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReminderModalOpen, setReminderModal] = useState(false);
  const [isScheduleModalOpen, setScheduleModal] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="">
        <Button onClick={() => setIsModalOpen(true)}>CONTINUE</Button>
      </div>

      {isModalOpen && (
        <ModalLayout>
          <article className="max-w-[900px] bg-white">
            <header className="flex items-center justify-between border-dotted border-b-[#E9E7E7] px-10 py-6 pb-4">
              <Image src="/logo.svg" alt="" width={102} height={58} />
              <button onClick={() => setIsModalOpen(false)}>
                <RxCross2 />
              </button>
            </header>
            <main className="px-20 py-8">
              <section className="mb-8 bg-[#F2F4F7] px-3 py-3.5">
                <h1 className="font-semibold text-primary-500">
                  Mobility Assistance
                </h1>
                <div className="text-sm text-[#667085]">
                  <p>With Moricol Home care services</p>
                  <p>22nd Wed, October, 2023 at 12:30PM CAT</p>
                </div>
              </section>
              <section className="mb-6">
                <div className="text-sm text-[#455263]">
                  <h3 className="mb-2.5 font-semibold">Hello, Fulya!</h3>
                  <p>
                    Thank you for shopping with us. We’ll send a confirmation
                    when your items ship. We hope to see you again soon.{" "}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm text-[#455263]">
                  <div>
                    <h3 className="mb-2.5 font-semibold">
                      Monthly Service Charge
                    </h3>
                    <p className="font-semibold text-[#9FA5AE]">
                      4 Days a Weekly Monthly Service
                    </p>
                  </div>
                  <p>₦35,000.00</p>
                </div>
              </section>

              <div className="mb-3 border-t border-dotted border-[#E9E7E7]" />

              <section className="mb-10 flex items-start gap-x-7">
                <div className="w-full space-y-3 bg-[#F8F8F8] px-6 py-3 text-sm font-medium">
                  <h3>Days</h3>
                  <p>Monday- 9:00 am - 2:00 pm</p>
                  <p>Monday- 9:00 am - 2:00 pm</p>
                  <p>Monday- 9:00 am - 2:00 pm</p>
                  <p>Monday- 9:00 am - 2:00 pm</p>
                </div>
                <div className="w-full bg-[#F8F8F8] px-6 py-3 text-sm font-medium text-[#455263]">
                  <div className="mb-3 flex justify-between">
                    <p>Item(s) Subtotal:</p>
                    <p className="font-semibold">₦35,000.00</p>
                  </div>
                  <div className="mb-3 flex justify-between">
                    <p className="font-semibold">Total:</p>
                    <p className="font-bold">₦35,000.00</p>
                  </div>
                </div>
              </section>

              <Button
                onClick={() => {
                  setIsModalOpen(false);
                  setScheduleModal(true);
                }}
              >
                Pay
              </Button>
            </main>
          </article>
        </ModalLayout>
      )}

      {isReminderModalOpen && (
        <ModalLayout>
          <article className="relative flex w-[806px] flex-col items-center justify-center rounded-lg bg-white py-12">
            <button
              className="absolute right-3.5 top-5 mb-1 ml-auto flex h-5 w-5 items-center justify-center rounded-full border-2 border-secondary-500"
              onClick={() => setReminderModal(false)}
            >
              <CancelSvg stroke="#D81302" className="h-3 w-3" />
            </button>

            <h3 className="mb-3.5 font-medium text-[#374151]">
              Send me a reminder Via
            </h3>

            <form className="w-full max-w-[621px]">
              <section className="mb-7 flex w-full justify-between">
                <div className="flex items-center gap-x-2 font-medium text-gray-600">
                  <input type="checkbox" />
                  <label htmlFor="">Email Notification</label>
                </div>
                <div className="flex items-center gap-x-2 font-medium text-gray-600">
                  <input type="checkbox" />
                  <label htmlFor="">SMS</label>
                </div>
                <div className="flex items-center gap-x-2 font-medium text-gray-600">
                  <input type="checkbox" />
                  <label htmlFor="">Push Notification</label>
                </div>
              </section>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                SET REMINDER
              </Button>
            </form>
          </article>
        </ModalLayout>
      )}

      {isScheduleModalOpen && (
        <ModalLayout>
          <article className="flex w-full max-w-[806px] flex-col items-center justify-center rounded-lg bg-white px-7 py-10">
            <div className="relative mb-7 h-32 w-32 overflow-hidden rounded-full">
              <Image src="/images/client.jpg" alt="" fill sizes="128px" />
            </div>
            <h3 className="mb-8 max-w-[635px] text-center text-2xl font-medium">
              Your appointment for homecare has been scheduled and you’ve been
              assigned a homecare giver
            </h3>

            <div className="mb-7 space-y-3.5 text-center font-medium text-[#667085]">
              <p>22nd Wednesday, June 2023 at 12:30PM CAT</p>
            </div>

            <div className="space-y-5">
              <Button
                onClick={() => {
                  setScheduleModal(false);
                  setReminderModal(true);
                }}
                className="w-full"
              >
                OKAY
              </Button>
              <Button variant="text">Set a reminder</Button>
              <Button
                variant="text"
                onClick={() =>
                  router.push("/dashboard/homecare/care-givers/id")
                }
              >
                See Homecare giver profile
              </Button>
            </div>
          </article>
        </ModalLayout>
      )}
    </>
  );
}
