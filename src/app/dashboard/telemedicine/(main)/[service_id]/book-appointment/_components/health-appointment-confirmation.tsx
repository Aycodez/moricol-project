"use client";

import { useState } from "react";
import { Phone, MessageSquare, Video, Plus } from "lucide-react";
import Button from "@/components/button";
import { Card, CardContent } from "@/components/card";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { RadioGroup, RadioGroupItem } from "@/components/radio-group";
import { Textarea } from "@/components/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";

export default function HealthAppointmentConfirmation({
  nextStep,
  //   prevStep,
}: {
  nextStep: () => void;
  prevStep: () => void;
}) {
  const [selectedCommunication, setSelectedCommunication] = useState<
    string | null
  >(null);

  return (
    <div className="min-h-screen">
      <Card className="border-0 p-0 shadow-none">
        <CardContent className="px-0 py-6">
          <div className="space-y-6">
            {/* Doctor Information */}
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src="/placeholder.svg?height=48&width=48"
                  alt="Dr. Frank Ufondu"
                />
                <AvatarFallback>FU</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">Dr. Frank Ufondu</h3>
                <p className="text-sm text-gray-500">
                  MBBS, BCS, MD (Medical Officer)
                </p>
              </div>
            </div>

            {/* Service */}
            <div>
              <Label className="text-sm text-gray-500">SERVICE</Label>
              <p className="font-semibold">
                Medical Officer — New Health Concern (₦5,000)
              </p>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date" className="text-sm text-gray-500">
                  DATE
                </Label>
                <Input type="date" id="date" defaultValue="2023-10-22" />
              </div>
              <div>
                <Label htmlFor="time" className="text-sm text-gray-500">
                  TIME
                </Label>
                <Input type="time" id="time" defaultValue="09:41" />
              </div>
            </div>

            {/* Note */}
            <div>
              <Label htmlFor="note" className="text-sm text-gray-500">
                NOTE
              </Label>
              <Textarea
                id="note"
                placeholder="Add a note for your appointment"
                defaultValue="I am a Cardio Patinet. Feel sick last 2 weeks. I need to talk about cardio problem."
              />
            </div>

            {/* Attachments */}
            <div>
              <Label className="text-sm text-gray-500">ATTACHMENTS</Label>
              <Button variant="outline" className="mt-2 w-full">
                <Plus className="mr-2 h-4 w-4" /> Add Attachments
              </Button>
            </div>

            {/* Communication Method */}
            <div>
              <Label className="mb-2 block text-sm text-gray-500">
                Select One
              </Label>
              <RadioGroup
                onValueChange={setSelectedCommunication}
                className="space-y-2"
              >
                <div
                  className={`flex items-center space-x-2 rounded-md p-2 ${selectedCommunication === "voice" ? "bg-primary-100" : ""}`}
                >
                  <RadioGroupItem value="voice" id="voice" />
                  <Label
                    htmlFor="voice"
                    className="flex cursor-pointer items-center"
                  >
                    <Phone className="mr-2 h-4 w-4 text-blue-500" />
                    <div>
                      <p className="font-semibold">Voice Call</p>
                      <p className="text-sm text-gray-500">
                        Can make a Appointment with doctor.
                      </p>
                    </div>
                  </Label>
                </div>
                <div
                  className={`flex items-center space-x-2 rounded-md p-2 ${selectedCommunication === "message" ? "bg-primary-100" : ""}`}
                >
                  <RadioGroupItem value="message" id="message" />
                  <Label
                    htmlFor="message"
                    className="flex cursor-pointer items-center"
                  >
                    <MessageSquare className="mr-2 h-4 w-4 text-primary-500" />
                    <div>
                      <p className="font-semibold">Message</p>
                      <p className="text-sm text-gray-500">
                        Can message doctor.
                      </p>
                    </div>
                  </Label>
                </div>
                <div
                  className={`flex items-center space-x-2 rounded-md p-2 ${selectedCommunication === "video" ? "bg-primary-100" : ""}`}
                >
                  <RadioGroupItem value="video" id="video" />
                  <Label
                    htmlFor="video"
                    className="flex cursor-pointer items-center"
                  >
                    <Video className="mr-2 h-4 w-4 text-purple-500" />
                    <div>
                      <p className="font-semibold">Video Call</p>
                      <p className="text-sm text-gray-500">
                        Can make a Video Call with Doctor
                      </p>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Button
              onClick={nextStep}
              className="w-full bg-primary-500 text-white hover:bg-primary-600"
            >
              CONTINUE
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
