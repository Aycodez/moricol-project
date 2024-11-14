"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { BiX } from "react-icons/bi";
import { Badge } from "@/components/badge";
import ContentLayout from "../content-layout";
import { CreateJobParams } from "@/api/jobs";
import { useSnackbar } from "notistack";

export default function PersonalDetailsClient({ goBack, nextStep, setFormData, formData }: { goBack: () => void, nextStep: () => void, setFormData: (formData: CreateJobParams) => void, formData: CreateJobParams }) {
  const [qualifications, setQualifications] = useState<string[]>(formData.academic_qualification);
  const [genders, setGenders] = useState<string[]>(formData.gender);
  const [maritalStatuses, setMaritalStatuses] = useState<string[]>(formData.marital_status);
  const [religions, setReligions] = useState<string[]>(formData.religion);

  const handleItem = (type: 'qualification' | 'gender' | 'maritalStatus' | 'religion', action: 'add' | 'remove', value: string) => {
    const stateMap: Record<string, [string[], React.Dispatch<React.SetStateAction<string[]>>, keyof CreateJobParams]> = {
      qualification: [qualifications, setQualifications, 'academic_qualification'],
      gender: [genders, setGenders, 'gender'],
      maritalStatus: [maritalStatuses, setMaritalStatuses, 'marital_status'],
      religion: [religions, setReligions, 'religion'],
    };

    const [currentState, setCurrentState, formDataKey] = stateMap[type];

    if (action === 'add') {
      if (currentState.includes(value)) return;
      setCurrentState([...currentState, value]);
      setFormData({ ...formData, [formDataKey]: [...(formData[formDataKey] as string[]), value] });
    } else if (action === 'remove') {
      setCurrentState(currentState.filter((item) => item !== value));
      setFormData({ ...formData, [formDataKey]: (formData[formDataKey] as string[]).filter((item) => item !== value) });
    }
  };

  const { enqueueSnackbar } = useSnackbar();

  const isValid = () => {
    const allValid = qualifications.length > 0 && genders.length > 0 && maritalStatuses.length > 0 && religions.length > 0 && formData.start_date && formData.end_date;

    if (!allValid) {
      enqueueSnackbar("Please select all required fields", { variant: "error" });
    }

    return allValid;
  }

  const handleNextStep = () => {
    if (isValid()) {
      nextStep();
    }
  }

  return (
    <ContentLayout
      pageTitle="Required Personal Details"
      step={6}
      nextFunction={handleNextStep}
      backFunction={goBack}
    >
      <form className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="academicQualification"
              className="block text-sm font-medium text-gray-700"
            >
              Academic Qualification
            </label>
            <div className="relative">
              <Select onValueChange={(value) => handleItem('qualification', 'add', value)}>
                <SelectTrigger id="academicQualification" className="w-full">
                  <SelectValue placeholder="Select qualifications" />
                </SelectTrigger>
                <SelectContent >
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="BSC">BSC</SelectItem>
                  <SelectItem value="MSC">MSC</SelectItem>
                  <SelectItem value="PHD">PHD</SelectItem>
                  <SelectItem value="HND">HND</SelectItem>
                  <SelectItem value="OND">OND</SelectItem>
                  <SelectItem value="NCE">NCE</SelectItem>
                  <SelectItem value="SSCE">SSCE</SelectItem>
                  <SelectItem value="B.Tech">B.Tech</SelectItem>
                  <SelectItem value="M.Tech">M.Tech</SelectItem>
                  <SelectItem value="B.A">B.A</SelectItem>
                  <SelectItem value="M.A">M.A</SelectItem>
                  <SelectItem value="B.Com">B.Com</SelectItem>
                  <SelectItem value="M.Com">M.Com</SelectItem>
                  <SelectItem value="B.Sc">B.Sc</SelectItem>
                  <SelectItem value="M.Sc">M.Sc</SelectItem>
                  <SelectItem value="B.Ed">B.Ed</SelectItem>
                  <SelectItem value="M.Ed">M.Ed</SelectItem>
                </SelectContent>
              </Select>
              <div className="mt-2 flex flex-wrap gap-2">
                {qualifications.map((qual) => (
                  <Badge
                    key={qual}
                    variant="secondary"
                    className="bg-yellow-100 text-yellow-800"
                  >
                    {qual}
                    <button
                      onClick={() => handleItem('qualification', 'remove', qual)}
                      className="ml-1 hover:text-yellow-900"
                    >
                      <BiX className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="candidateGender"
              className="block text-sm font-medium text-gray-700"
            >
              Candidate Gender
            </label>
            <Select onValueChange={(value) => handleItem('gender', 'add', value)}>
              <SelectTrigger id="candidateGender" className="w-full">
                <SelectValue placeholder="Male" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <div className="mt-2 flex flex-wrap gap-2">
              {genders.map((gender) => (
                <Badge
                  key={gender}
                  variant="secondary"
                  className="bg-yellow-100 text-yellow-800"
                >
                  {gender}
                  <button
                    onClick={() => handleItem('gender', 'remove', gender)}
                    className="ml-1 hover:text-yellow-900"
                  >
                    <BiX className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="maritalStatus"
              className="block text-sm font-medium text-gray-700"
            >
              Candidate Marital Status
            </label>
            <Select onValueChange={(value) => handleItem('maritalStatus', 'add', value)}>
              <SelectTrigger id="maritalStatus" className="w-full">
                <SelectValue placeholder="Married" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="married">Married</SelectItem>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="divorced">Divorced</SelectItem>
                <SelectItem value="widowed">Widowed</SelectItem>
              </SelectContent>
            </Select>
            <div className="mt-2 flex flex-wrap gap-2">
              {maritalStatuses.map((maritalStatus) => (
                <Badge
                  key={maritalStatus}
                  variant="secondary"
                  className="bg-yellow-100 text-yellow-800"
                >
                  {maritalStatus}
                  <button
                    onClick={() => handleItem('maritalStatus', 'remove', maritalStatus)}
                    className="ml-1 hover:text-yellow-900"
                  >
                    <BiX className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="religion"
              className="block text-sm font-medium text-gray-700"
            >
              Candidate Religion
            </label>
            <Select onValueChange={(value) => handleItem('religion', 'add', value)}>
              <SelectTrigger id="religion" className="w-full">
                <SelectValue placeholder="Christian" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="christian">Christian</SelectItem>
                <SelectItem value="muslim">Muslim</SelectItem>
                <SelectItem value="hindu">Hindu</SelectItem>
                <SelectItem value="buddhist">Buddhist</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <div className="mt-2 flex flex-wrap gap-2">
              {religions.map((religion) => (
                <Badge
                  key={religion}
                  variant="secondary"
                  className="bg-yellow-100 text-yellow-800"
                >
                  {religion}
                  <button
                    onClick={() => handleItem('religion', 'remove', religion)}
                    className="ml-1 hover:text-yellow-900"
                  >
                    <BiX className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="timeframeFrom"
              className="block text-sm font-medium text-gray-700"
            >
              Timeframe for Posting (From)
            </label>
            <input
              type="date"
              id="startDate"
              className="w-full"
              value={formData.start_date}
              onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
              placeholder="DEC, 22, 2023"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="timeframeTo"
              className="block text-sm font-medium text-gray-700"
            >
              Timeframe for Posting (To)
            </label>
            <input
              type="date"
              id="timeframeTo"
              className="w-full"
              value={formData.end_date}
              onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
              placeholder="DEC, 31, 2023"
            />
          </div>
        </div>
      </form>
    </ContentLayout>
  );
}
