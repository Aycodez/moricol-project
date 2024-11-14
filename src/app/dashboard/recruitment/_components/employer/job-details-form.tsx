import { Input } from "@/components/input";
import { Label } from "@/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import ContentLayout from "../content-layout";
import { useSnackbar } from "notistack";
import { CreateJobParams } from "@/api/jobs";

interface JobDetailsFormProps {
  nextStep: () => void;
  setFormData: (formData: Omit<CreateJobParams, "userid" | "jobpostid" | "session">) => void;
  formData: Omit<CreateJobParams, "userid" | "jobpostid" | "session">;
}

export default function JobDetailsForm({ nextStep, setFormData, formData }: JobDetailsFormProps) {

  const { enqueueSnackbar } = useSnackbar();

  const isValid = () => {
    const validations = [
      formData.candidate_title.trim() !== '',
      formData.country.trim() !== '',
      formData.state.trim() !== '',
      formData.working_condition.trim() !== '',
      formData.job_level.trim() !== '',
      formData.min_salary !== 0,
      formData.max_salary !== 0,
      formData.min_experience !== 0,
      formData.slot !== 0
    ];

    const allValid = validations.every(Boolean);

    if (!allValid) {
      const invalidFields = [
        !validations[0] && "Candidate Title",
        !validations[1] && "Job Type",
        !validations[2] && "Country",
        !validations[3] && "State",
        !validations[4] && "Working Condition",
        !validations[5] && "Job Level",
        !validations[6] && "Min Salary",
        !validations[7] && "Max Salary",
        !validations[8] && "Min Experience",
        !validations[9] && "Slot"
      ].filter(Boolean);

      enqueueSnackbar(`The following fields are required: ${invalidFields.join(', ')}.`, { variant: 'error' });
    }

    return allValid;
  };

  const handleNextStep = () => {
    if (isValid()) {
      nextStep();
    }
  };

  return (
    <ContentLayout
      step={2}
      pageTitle="Job Details"
      nextFunction={handleNextStep}
    >
      <form className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="candidateTitle">Candidate Title</Label>
            <Input value={formData.candidate_title} onChange={(e) => setFormData({ ...formData, candidate_title: e.target.value })} id="candidateTitle" className="w-full p-2 focus:p-2" placeholder="Payable accountant" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="jobType">Job type</Label>
            <Select value={formData.job_type} onValueChange={(value) => setFormData({ ...formData, job_type: value as "fulltime" | "parttime" | "contract" })}  >
              <SelectTrigger id="jobType" className="w-full">
                <SelectValue placeholder="Full time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fulltime">Full time</SelectItem>
                <SelectItem value="parttime">Part time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <div className="relative">
              <Input id="country" value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} className="p-2 focus:p-2" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <div className="relative">
              <Input id="state" value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} className="p-2 focus:p-2" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="jobLevel">Job Level</Label>
            <div className="relative">
              <Input
                id="jobLevel"
                value={formData.job_level}
                onChange={(e) => setFormData({ ...formData, job_level: e.target.value })}
                className="p-2 focus:p-2"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="workingCondition">Working condition</Label>
            <div className="relative">
              <Input
                id="workingCondition"
                value={formData.working_condition}
                onChange={(e) => setFormData({ ...formData, working_condition: e.target.value })}
                className="p-2 focus:p-2"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="minSalary">Min. Monthly Net Salary</Label>
            <Input type="number" min={1} value={formData.min_salary.toString()} onChange={(e) => setFormData({ ...formData, min_salary: Number(e.target.value) })} id="minSalary" placeholder="₦ 250,000" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="maxSalary">Max. Monthly Net Salary</Label>
            <Input type="number" min={1} value={formData.max_salary.toString()} onChange={(e) => setFormData({ ...formData, max_salary: Number(e.target.value) })} id="maxSalary" placeholder="₦ 450,000" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="minExperience">Min. Experience required</Label>
            <Input type="number" min={1} value={formData.min_experience.toString()} onChange={(e) => setFormData({ ...formData, min_experience: Number(e.target.value) })} id="minExperience" placeholder="0 years" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="candidatesWanted">
              How many Candidates do you want?
            </Label>
            <Input
              id="candidatesWanted"
              value={formData.slot.toString()}
              type="number"
              min={1}
              onChange={(e) => setFormData({ ...formData, slot: parseInt(e.target.value) })}
              placeholder="Enter number of candidates"
            />
          </div>
        </div>
      </form>
    </ContentLayout>
  );
}
