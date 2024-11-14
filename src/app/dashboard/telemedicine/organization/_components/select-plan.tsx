
'use client'
import { Plan } from "@/definition";
import Button from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Loader2 } from "lucide-react";

interface SelectPlanProps {
  availablePlans: Plan[]
  selectedPlan: {
    planIndex: number
    durationIndex: number
  }
  handlePlanSelect: (planIndex: number, durationIndex: number) => void;
  organizationName: string;
  setOrganizationName: (name: string) => void;
  handleSubmit: () => void;
  loading: boolean;
}
function SelectPlan({ availablePlans, handlePlanSelect,
  selectedPlan, organizationName, setOrganizationName, handleSubmit, loading }: SelectPlanProps) {

  return (

    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-1 container max-w-5xl mx-auto px-2 py-8">
        <h1 className="text-2xl font-bold text-center mb-4">Pick a plan that&apos;s right for you</h1>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          To ensure flexible and accessible telemedicine services, Moricol Healthcare offers tiered pricing options based on the number
          of registered users within an organization. Whether you have a small team or a larger workforce, we aim to accommodate
          your needs effectively
        </p>
        <div className="pb-3">
          <Label htmlFor="organization-name" className="text-sm pb-2 block text-gray-600">Organization Name</Label>
          <Input required value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} type="text" id="organization-name" className="border rounded-lg p-2" placeholder="Enter your organization name" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {availablePlans.map((plan, planIndex) => (
            <div
              key={planIndex + 'fjkf'}
              className={`border rounded-lg py-4 px-4 lg:px-2 xl:px-4 ${plan.highlighted ? "bg-[#FFF5E6] border-[#F2A900]" : "bg-white"
                }`}
            >
              <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>
              <h2 className="text-lg font-semibold mb-4 text-[#F2A900] py-2 border-t border-b border-[#F2A900]">{plan.title}</h2>
              {plan.durations.map((option, durationIndex) => (
                <label key={option.label} className="flex items-center mb-2 cursor-pointer group">
                  <input
                    type="radio"
                    name={`plan-${planIndex}`}
                    className="sr-only"
                    checked={selectedPlan.planIndex === planIndex && selectedPlan.durationIndex === durationIndex}
                    onChange={() => handlePlanSelect(planIndex, durationIndex)}
                  />
                  <span className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center
                    ${selectedPlan.planIndex === planIndex && selectedPlan.durationIndex === durationIndex
                      ? 'border-[#F2A900] bg-[#F2A900]'
                      : 'border-gray-300 group-hover:border-[#F2A900]'
                    }`}>
                    {selectedPlan.planIndex === planIndex && selectedPlan.durationIndex === durationIndex && (
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                    )}
                  </span>
                  <span className="flex-1 text-sm">{option.label}</span>
                  <span className="font-semibold text-sm">{option.price}</span>
                </label>
              ))}

            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button onClick={handleSubmit} className="w-full flex items-center justify-center text-white bg-primary-500" disabled={loading}>{loading ? <Loader2 className="animate-spin" /> : 'Start Now'}</Button>
        </div>

      </div>
    </div>
  )
}
export default SelectPlan