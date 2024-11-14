"use client";

import { Video, Phone, ChevronLeft, MicOff, Mic, PhoneOff } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { ShadButton } from "@/components/shadcn-button";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";

export default function CallClient() {
  const router = useRouter();
  const id = "jdj";

  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);

  return (
    <div className="flex h-[85vh] flex-col bg-gray-100">
      {/* Chat area */}
      <div className="flex-1">
        {/* Patient info */}
        <div className="sticky top-0 z-10 flex items-center justify-between bg-white p-4 shadow">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <ChevronLeft
                onClick={() => router.back()}
                className="h-5 w-5 text-gray-500 hover:text-primary-500"
              />
            </div>
            <Avatar>
              <AvatarImage src="/images/client.jpg" alt="David Moore" />
              <AvatarFallback>DM</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">David Moore</h2>
              <p className="text-sm text-gray-500">17 September, 2023</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Link href={`${routes.TELEMEDICINE_APPOINTMENTS}/${id}/video-call`}>
              <ShadButton
                variant="ghost"
                size="icon"
                className="hover:text-primary-500"
              >
                <Video className="h-5 w-5" />
              </ShadButton>
            </Link>
            <Link href={`${routes.TELEMEDICINE_APPOINTMENTS}/${id}/call`}>
              <ShadButton
                variant="ghost"
                size="icon"
                className="hover:text-primary-500"
              >
                <Phone className="h-5 w-5" />
              </ShadButton>
            </Link>
          </div>
        </div>
        <div className="mx-auto h-[95%] max-w-[500px] bg-white">
          <div className="relative flex h-full flex-1 flex-col overflow-hidden">
            <div className="h-full w-full">
              <div className="flex h-[80%] flex-1 flex-col items-center justify-center p-4">
                <h1 className="mb-1 text-2xl font-semibold">Kathryn Cooper</h1>
                <p className="mb-6 text-gray-600">Doctor</p>

                <Avatar className="mb-8 h-48 w-48">
                  <AvatarImage alt="Kathryn Cooper" src="/images/client.jpg" />
                  <AvatarFallback>KC</AvatarFallback>
                </Avatar>

                <div className="rounded-full bg-gray-800 px-4 py-2 text-white">
                  00:21:45
                </div>
              </div>
            </div>
            <section className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent">
              <div className="relative mt-4 flex items-center justify-between px-4">
                <Image
                  fill
                  src="/images/rect.png"
                  alt=""
                  className="absolute bottom-0 left-0 z-10 h-full w-full"
                />
                <div className="relative z-50 flex w-full items-center justify-between px-4">
                  <ShadButton
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 rounded-xl bg-white bg-opacity-80"
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? (
                      <GiSpeakerOff className="h-8 w-8 text-primary-500" />
                    ) : (
                      <GiSpeaker className="h-8 w-8 text-primary-500" />
                    )}
                  </ShadButton>
                  <div className="relative">
                    <ShadButton
                      variant="destructive"
                      size="icon"
                      className="relative top-[-60px] h-20 w-20 rounded-full bg-secondary-500 text-white"
                    >
                      <PhoneOff className="h-8 w-8" />
                    </ShadButton>
                  </div>

                  <ShadButton
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 rounded-xl bg-white bg-opacity-80"
                    onClick={() => setIsCameraOff(!isCameraOff)}
                  >
                    {isCameraOff ? (
                      <MicOff className="h-8 w-8 text-primary-500" />
                    ) : (
                      <Mic className="h-8 w-8 text-primary-500" />
                    )}
                  </ShadButton>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
