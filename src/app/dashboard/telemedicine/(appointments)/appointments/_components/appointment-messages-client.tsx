"use client";

import { useState } from "react";
import {
  Video,
  Phone,
  Paperclip,
  Image,
  ChevronLeft,
  SendHorizonal,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Textarea } from "@/components/textarea";
import { ShadButton } from "@/components/shadcn-button";
import Link from "next/link";
import { routes } from "@/constants/routes";
import { useRouter } from "next/navigation";

const messages = [
  {
    id: 1,
    sender: "Dr. Frank Ufondu",
    content:
      "Hey man, following from our last meeting i wanted to remind you of the medications you were to takealongside the Malaria medications.",
    timestamp: "21 min ago",
    avatar: "/placeholder.svg?height=40&width=40",
    isUser: false,
  },
  {
    id: 2,
    sender: "Nomso Onyemuwa",
    content:
      "Thanks for the reminder. I wasn't able to get the Paracetamol but got Panadol-Extra instead. I hope no issues?",
    timestamp: "15 min ago",
    avatar: "/placeholder.svg?height=40&width=40",
    isUser: true,
  },
  {
    id: 3,
    sender: "Dr. Frank Ufondu",
    content: "That's fine. Hope you're getting better?",
    timestamp: "2 min ago",
    avatar: "/placeholder.svg?height=40&width=40",
    isUser: false,
  },
  {
    id: 1,
    sender: "Dr. Frank Ufondu",
    content:
      "Hey man, following from our last meeting i wanted to remind you of the medications you were to takealongside the Malaria medications.",
    timestamp: "21 min ago",
    avatar: "/placeholder.svg?height=40&width=40",
    isUser: false,
  },
  {
    id: 2,
    sender: "Nomso Onyemuwa",
    content:
      "Thanks for the reminder. I wasn't able to get the Paracetamol but got Panadol-Extra instead. I hope no issues?",
    timestamp: "15 min ago",
    avatar: "/placeholder.svg?height=40&width=40",
    isUser: true,
  },
  {
    id: 3,
    sender: "Dr. Frank Ufondu",
    content: "That's fine. Hope you're getting better?",
    timestamp: "2 min ago",
    avatar: "/placeholder.svg?height=40&width=40",
    isUser: false,
  },
];

export default function AppointmentMessagesClient() {
  const [newMessage, setNewMessage] = useState("");
  const router = useRouter();

  const id = "jdj";

  return (
    <div className="flex h-[90vh] flex-col bg-gray-100">
      {/* Chat area */}
      <div className="flex-1 space-y-4 overflow-y-auto">
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
        <div className="px-6">
          {/* Messages */}
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"} space-x-4`}
            >
              {!message.isUser && (
                <Avatar>
                  <AvatarImage src={message.avatar} alt={message.sender} />
                  <AvatarFallback>{message.sender[0]}</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`flex-1 ${message.isUser ? "text-right" : "text-left"}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{message.sender}</h3>
                  <span className="text-sm text-gray-500">
                    {message.timestamp}
                  </span>
                </div>
                <p
                  className={`mt-1 inline-block rounded-lg p-3 shadow ${message.isUser ? "bg-primary-500 text-white" : "bg-white"}`}
                >
                  {message.content}
                </p>
                <div
                  className={`my-2 flex items-center space-x-2 ${message.isUser ? "justify-end" : "justify-start"}`}
                ></div>
              </div>
              {message.isUser && (
                <Avatar>
                  <AvatarImage src={message.avatar} alt={message.sender} />
                  <AvatarFallback>{message.sender[0]}</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Message input */}
      <div className="border-t bg-white p-4">
        <div className="flex items-center space-x-2">
          <ShadButton variant="ghost" size="icon">
            <Paperclip className="h-5 w-5" />
          </ShadButton>
          <ShadButton variant="ghost" size="icon">
            <Image className="h-5 w-5" />
          </ShadButton>
          <Textarea
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="h-5 flex-1 resize-none rounded-lg border p-2"
            rows={1}
          />

          <ShadButton variant="ghost" size="icon">
            <SendHorizonal className="h-8 w-8 text-blue-500" />
          </ShadButton>
        </div>
      </div>
    </div>
  );
}
