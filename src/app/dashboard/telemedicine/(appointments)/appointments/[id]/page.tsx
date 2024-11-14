import { BadgeSvg, TwoUsersSvg } from "@/components/svgs";
import { MessageSquare, Notebook, Phone, Video } from "lucide-react";
import Image from "next/image";
import React from "react";
import StatCard from "../../../_components/stat-card";
import CommunicationOption from "../../../_components/communication-option";
import { Tabs } from "@radix-ui/react-tabs";
import { TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import FileInput from "@/components/file-input";
import Button from "@/components/button";
import Link from "next/link";
import { routes } from "@/constants/routes";
import TelemedicineLayoutTemplate from "../../../(main)/template";
import EndAppointmentModal from "../_components/end-appointment-modal";

function SingleAppointment() {
  const id = "df";
  return (
    <TelemedicineLayoutTemplate>
      <div className="mx-auto max-w-[818px] rounded-3xl bg-white">
        <section className="p-4">
          <div className="ml-auto w-fit pb-2">
            <Button variant="text" className="ml-auto w-fit">
              SEND AN ATTACHMENT
            </Button>
          </div>
          <div className="flex justify-between">
            <Profile />
            <Link
              className=""
              href={`${routes.TELEMEDICINE_APPOINTMENTS}/${id}/review
              `}
            >
              <Button variant="text">REVIEW</Button>
            </Link>
          </div>
        </section>

        <section className="flex items-center justify-center gap-x-6 rounded-t-[40px] bg-gray-600 py-7">
          <StatCard
            icon={<TwoUsersSvg />}
            label="1000+"
            description="Patients"
          />
          <StatCard
            icon={<BadgeSvg />}
            label="5 Years"
            description="Experience"
          />
        </section>

        <section className="py-4">
          <div className="grid gap-y-6 px-5">
            {/* Communication Options */}
            <div className="mb-4 space-y-4">
              <h3>You get to:</h3>
              <Link
                href={`${routes.TELEMEDICINE_APPOINTMENTS}/${id}/call`}
                className="ease block border-primary-500 transition transition-all duration-300 hover:scale-[99%]"
              >
                <CommunicationOption
                  icon={<Phone className="text-blue-500" />}
                  title="Voice Call"
                  description="Can make an appointment with the doctor."
                />
              </Link>
              <Link
                href={`${routes.TELEMEDICINE_APPOINTMENTS}/${id}/messages`}
                className="ease block border-primary-500 transition transition-all duration-300 hover:scale-[99%]"
              >
                <CommunicationOption
                  icon={<MessageSquare className="text-primary-500" />}
                  title="Message"
                  description="Can message the doctor."
                />
              </Link>
              <Link
                href={`${routes.TELEMEDICINE_APPOINTMENTS}/${id}/video-call`}
                className="ease block border-primary-500 transition transition-all duration-300 hover:scale-[99%]"
              >
                <CommunicationOption
                  icon={<Video className="text-purple-500" />}
                  title="Video Call"
                  description="Can make a video call with clients."
                />
              </Link>
              <Link
                href={`${routes.TELEMEDICINE_APPOINTMENTS}/${id}/notes`}
                className="ease block border-primary-500 transition transition-all duration-300 hover:scale-[99%]"
              >
                <CommunicationOption
                  icon={<Notebook className="text-purple-500" />}
                  title="Notes"
                  description="View notes from practitioner."
                />
              </Link>
              <EndAppointmentModal />
            </div>
          </div>
        </section>

        <section>
          <Tabs defaultValue="Received" className="mb-4 md:mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="Received"
                className="bg-gray-100 uppercase data-[state=active]:bg-primary-500 data-[state=active]:text-white"
              >
                Received
              </TabsTrigger>
              <TabsTrigger
                value="sent"
                className="bg-gray-100 uppercase data-[state=active]:bg-primary-500 data-[state=active]:text-white"
              >
                Sent
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Received" className="px-4">
              {" "}
              <p className="py-5">No received files yet.</p>
              <hr />
              <br />
              <FileInput
                caption="upload file(image, pdf)"
                title="Upload Lab report"
              />
              <br />
              <FileInput
                caption="upload file(image, pdf)"
                title="Upload prescription from doctor"
              />
            </TabsContent>
            <TabsContent value="sent" className="px-4">
              <p className="py-5">No sent files yet.</p>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </TelemedicineLayoutTemplate>
  );
}

export default SingleAppointment;

function Profile() {
  return (
    <article className="flex shrink-0 items-center gap-x-3">
      <Image
        src="/images/client.jpg"
        alt=""
        width={90}
        height={90}
        className="h-[90px] w-[90px] rounded-xl"
      />
      <div>
        <h3 className="mb-0.5 text-lg font-medium text-gray-700">
          Bolaji Samuel
        </h3>
        <div className="mb-2 text-sm font-medium text-gray-500">
          ⭐ <span>4.5</span>
        </div>
        <p className="text-[#777A95]">Doctor</p>
      </div>
    </article>
  );
}
