import Button from "@/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { Checkbox } from "@/components/checkbox";
import { Label } from "@/components/label";
import { X } from "lucide-react";
import { useState } from "react";

const SetReminderModal = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  };

  const handleSetReminder = () => {
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${show ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
    >
      <div
        className={`m-auto w-[90%] max-w-[600px] transform rounded-lg bg-white shadow-lg transition-transform ${show ? "scale-100" : "scale-95"
          }`}
      >
        <Card className="relative w-full overflow-hidden rounded-lg bg-white">
          <button className="absolute right-2 top-2" onClick={onClose}>
            <X className="h-4 w-4" />
          </button>
          <CardHeader>
            <CardTitle className="text-center">
              Send me a reminder Via
            </CardTitle>
          </CardHeader>
          <CardContent className="justify-between space-y-4 md:flex">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="email"
                checked={selectedOptions.includes("email")}
                onCheckedChange={() => handleOptionChange("email")}
              />
              <Label htmlFor="email">Email Notification</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="sms"
                checked={selectedOptions.includes("sms")}
                onCheckedChange={() => handleOptionChange("sms")}
                className="h-4 w-4 border"
              />
              <Label htmlFor="sms">SMS</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="push"
                checked={selectedOptions.includes("push")}
                onCheckedChange={() => handleOptionChange("push")}
              />
              <Label htmlFor="push">Push Notification</Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-primary-500 text-white hover:bg-primary-600"
              onClick={handleSetReminder}
            >
              SET REMINDER
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SetReminderModal;
