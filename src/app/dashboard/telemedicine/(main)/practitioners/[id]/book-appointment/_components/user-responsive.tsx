import { Switch } from "@/components/switch";
import { Label } from "@/components/label";
import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/alert";
import Button from "@/components/button";

export default function UserResponsive({ nextStep }: { nextStep: () => void }) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-5 rounded-xl bg-[#FDF5E8] p-4">
      <div className="w-full max-w-3xl space-y-6">
        <div className="flex items-center justify-between">
          <Switch id="user-responsive" />
          <Label htmlFor="user-responsive" className="text-lg font-medium">
            Is this User responsive?
          </Label>
        </div>
        <Alert
          variant="destructive"
          className="border-[#f8e7c1] bg-[#f8e7c1] text-[#7d5700]"
        >
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            For medical emergencies, please call 112 (or your local emergency
            number) or go to the nearest emergency hospital.
          </AlertDescription>
        </Alert>
      </div>
      <Button
        className="w-full bg-primary-500 text-white hover:bg-primary-600"
        onClick={nextStep}
      >
        NEXT
      </Button>
    </div>
  );
}
