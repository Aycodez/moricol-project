import { routes } from "@/constants/routes";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/input";
import ContentLayout from "./content-layout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";

export default function FPersonalInformation() {
  return (
    <ContentLayout
      next_route={routes.RECRUITMENT_FOREIGN_BIO}
      pageTitle="Personal Information"
      step={1}
    >
      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Label
              htmlFor="first-name"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              First Name
            </Label>
            <Input
              type="text"
              id="first-name"
              name="first-name"
              className="w-full rounded border border-gray-300 p-2"
              placeholder="John"
            />
          </div>
          <div>
            <Label
              htmlFor="last-name"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Last Name
            </Label>
            <Input
              type="text"
              id="last-name"
              name="last-name"
              className="w-full rounded border border-gray-300 p-2"
              placeholder="Doe"
            />
          </div>

          <div>
            <Label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Email Address
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              className="w-full rounded border border-gray-300 p-2"
              placeholder="Enter email"
            />
          </div>
          <div>
            <Label
              htmlFor="phone"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Phone Number
            </Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              className="w-full rounded border border-gray-300 p-2"
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <Label
              htmlFor="gender"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Gender
            </Label>
            <Select name="gender">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label
              htmlFor="location"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Preferred Location
            </Label>
            <Select name="location">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                {/* Add more countries as needed */}
              </SelectContent>
            </Select>
          </div>
        </div>
      </form>
    </ContentLayout>
  );
}
