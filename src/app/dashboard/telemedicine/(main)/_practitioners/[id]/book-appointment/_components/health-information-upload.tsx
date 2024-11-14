"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Button from "@/components/button";
import { Card, CardContent } from "@/components/card";
import { Checkbox } from "@/components/checkbox";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { RadioGroup, RadioGroupItem } from "@/components/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";

const symptoms = [
  { name: "Fever", color: "bg-green-100 text-green-600", icon: "☀️" },
  { name: "Fatigue", color: "bg-yellow-100 text-yellow-600", icon: "😴" },
  { name: "Headache", color: "bg-primary-100 text-primary-600", icon: "🎧" },
  { name: "Dizziness", color: "bg-red-100 text-red-600", icon: "⚠️" },
  { name: "Nausea", color: "bg-purple-100 text-purple-600", icon: "💧" },
  { name: "Vomiting", color: "bg-blue-100 text-blue-600", icon: "🗑️" },
  { name: "Cough", color: "bg-cyan-100 text-cyan-600", icon: "🎤" },
  {
    name: "Difficulty Sleeping",
    color: "bg-teal-100 text-teal-600",
    icon: "🌙",
  },
  { name: "Shaking", color: "bg-green-100 text-green-600", icon: "🤖" },
  { name: "Abdominal Pain", color: "bg-lime-100 text-lime-600", icon: "❤️" },
  { name: "Diarrhea", color: "bg-yellow-100 text-yellow-600", icon: "💧" },
  { name: "Memory Loss", color: "bg-primary-100 text-primary-600", icon: "🧠" },
  { name: "Joint Pain", color: "bg-pink-100 text-pink-600", icon: "🦴" },
  { name: "Sweating", color: "bg-rose-100 text-rose-600", icon: "🌧️" },
  {
    name: "Changes in Vision",
    color: "bg-purple-100 text-purple-600",
    icon: "👁️",
  },
  { name: "Sore Throat", color: "bg-indigo-100 text-indigo-600", icon: "🎤" },
  { name: "Rash", color: "bg-teal-100 text-teal-600", icon: "🩹" },
  { name: "Voice Changes", color: "bg-yellow-100 text-yellow-600", icon: "🔊" },
];

const otherSymptoms = [
  "Painful Urination",
  "Bloating",
  "Frequent Urination at Night",
  "Frequent Thirst",
  "Shortness of Breath",
  "Muscle Aches",
  "Palpitations",
  "Loss of Appetite",
  "Excessive Thirst",
  "Chest Tightness",
  "Frequent Urination",
  "Constipation",
  "Confusion",
  "Numbness or Tingling",
  "Balance Problems",
  "Swollen Glands",
  "Memory loss",
  "Yellowing of Skin or Eyes (Jaundice)",
  "Hair Loss",
  "Sensitivity to Light",
  "Mood changes",
  "Abnormal Menstruation",
  "Noisy breathing",
  "Difficulty Concentrating",
  "Joint pains",
  "Chills",
  "Muscle Weakness",
  "Slurred Speech",
  "Heart Racing",
  "Painful urination",
  "Vaginal discharge",
  "Changes in smell",
  "Itching",
  "Changes in Taste",
  "Recurrent infections",
  "Bruising Easily",
  "Nasal Congestion",
  "Skin Lesions or Growths",
  "Sore Throat",
  "Changes in Hearing",
  "Painful urination",
  "Abnormal penis discharge",
  "Frequent urination",
  "Abnormal Vaginal Bleeding",
  "Fainting",
  "Unexplained Weight Gain",
  "Frequent Urination",
  "Increased Thirst",
  "Chest Pain",
  "Swelling",
  "Feeling of Fullness after Eating Small Amounts",
];

interface PageProps {
  nextStep: () => void;
}

export default function HealthInformationUpload({ nextStep }: PageProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedOtherSymptoms, setSelectedOtherSymptoms] = useState<string[]>(
    [],
  );
  const [isTakingMedications, setIsTakingMedications] = useState<
    boolean | null
  >(null);

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom],
    );
  };

  const toggleOtherSymptom = (symptom: string) => {
    setSelectedOtherSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom],
    );
  };

  return (
    <div className="min-h-screen">
      <Card className="border-0 p-0 shadow-none">
        <CardContent className="px-0 py-6">
          <h2 className="mb-4 text-2xl font-bold">UPLOAD HEALTH INFORMATION</h2>
          <p className="mb-6 text-sm text-gray-500">
            Kindly provide the patient&apos;s medical information and history.
          </p>

          <div className="space-y-6">
            {/* Primary Complain */}
            <div>
              <Label htmlFor="primary-complain">Primary Complain</Label>
              <Select>
                <SelectTrigger id="primary-complain" className="w-full">
                  <SelectValue placeholder="Select primary complain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fever">Fever</SelectItem>
                  <SelectItem value="headache">Headache</SelectItem>
                  <SelectItem value="nausea">Nausea</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Symptoms */}
            <div>
              <h3 className="mb-2 text-lg font-semibold">Symptoms</h3>
              <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
                {symptoms.map((symptom) => (
                  <button
                    key={symptom.name}
                    className={`flex items-center`}
                    onClick={() => toggleSymptom(symptom.name)}
                  >
                    <Checkbox
                      checked={selectedSymptoms.includes(symptom.name)}
                      className="mr-2"
                    />
                    <div className="flex items-center gap-1">
                      <span
                        className={`px-1 ${symptom.color} block h-fit rounded`}
                      >
                        {symptom.icon}
                      </span>
                      {symptom.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <hr />
            {/* Other Symptoms */}
            <div>
              <h3 className="mb-2 text-lg font-semibold">Others</h3>
              <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
                {otherSymptoms.map((symptom) => (
                  <div key={symptom} className="flex items-center space-x-2">
                    <Checkbox
                      id={symptom}
                      checked={selectedOtherSymptoms.includes(symptom)}
                      onCheckedChange={() => toggleOtherSymptom(symptom)}
                    />
                    <label
                      htmlFor={symptom}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {symptom}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <Label htmlFor="duration">How long have you felt this way?</Label>
              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  id="duration"
                  className="w-20"
                  defaultValue="3"
                />
                <Select defaultValue="days">
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="days">Days</SelectItem>
                    <SelectItem value="weeks">Weeks</SelectItem>
                    <SelectItem value="months">Months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Medications */}
            <div>
              <Label>Are you currently taking any medications?</Label>
              <p className="mb-2 text-sm text-gray-500">
                Please consider any medications you are currently taking,
                including those taken on a regular basis.
              </p>
              <RadioGroup
                onValueChange={(value) =>
                  setIsTakingMedications(value === "yes")
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">No</Label>
                </div>
              </RadioGroup>
            </div>

            {isTakingMedications && (
              <div>
                <Label>List medications below:</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Input placeholder="Medication 1" />
                    <Select>
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="How Long" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-week">1 week</SelectItem>
                        <SelectItem value="1-month">1 month</SelectItem>
                        <SelectItem value="3-months">3 months</SelectItem>
                        <SelectItem value="6-months">6 months</SelectItem>
                        <SelectItem value="1-year">1 year</SelectItem>
                        <SelectItem value="more-than-1-year">
                          More than 1 year
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2" /> Add new medication
                  </Button>
                </div>
              </div>
            )}

            {/* Allergies */}
            <div>
              <Label>Are you allergic to any of the drugs listed?</Label>
              <p className="mb-2 text-sm text-gray-500">
                See list the medications you might be allergic to below.
              </p>
              <p className="mb-2 text-sm text-gray-500">
                Examples: Amoxicillin, Bactrim, Aspirin
              </p>
              <RadioGroup>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="allergies-yes" />
                  <Label htmlFor="allergies-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="allergies-no" />
                  <Label htmlFor="allergies-no">No</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Medical Conditions */}
            <div>
              <Label>Do you have any medical conditions?</Label>
              <p className="mb-2 text-sm text-gray-500">
                Not sure? Choose yes to browse a list of conditions and
                diseases.
              </p>
              <p className="mb-2 text-sm text-gray-500">
                Examples: High Cholesterol, Insomnia, Asthma
              </p>
              <RadioGroup>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="conditions-yes" />
                  <Label htmlFor="conditions-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="conditions-no" />
                  <Label htmlFor="conditions-no">No</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Surgeries */}
            <div>
              <Label>Have you had any surgeries?</Label>
              <p className="mb-2 text-sm text-gray-500">
                Examples: Appendectomy, Tonsillectomy, Knee replacement
              </p>
              <RadioGroup>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="surgeries-yes" />
                  <Label htmlFor="surgeries-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="surgeries-no" />
                  <Label htmlFor="surgeries-no">No</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Family Medical History */}
            <div>
              <Label>
                Has anyone in your family had any medical conditions?
              </Label>
              <p className="mb-2 text-sm text-gray-500">
                Please only include first-degree relatives (parents, siblings,
                and children)
              </p>
              <RadioGroup>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="family-history-yes" />
                  <Label htmlFor="family-history-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="family-history-no" />
                  <Label htmlFor="family-history-no">No</Label>
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
