import Button from "@/components/button";
import { Card, CardContent } from "@/components/card";
import { Input } from "@/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { useState } from "react";
import { BiX } from "react-icons/bi";

const FilterModal = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [language, setLanguage] = useState("All");
  const [specialization, setSpecialization] = useState("All Practitioners");
  const [status, setStatus] = useState("Ongoing");
  const [location, setLocation] = useState("All");

  const applyFilter = () => {
    onClose();
  };
  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className={`m-auto w-[90%] max-w-[600px] transform rounded-lg bg-white shadow-lg transition-transform ${
          show ? "scale-100" : "scale-95"
        }`}
      >
        <Card className="">
          <CardContent className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">FILTER</h3>
              <Button
                variant="outline"
                onClick={onClose}
                className="w-fit p-1 hover:bg-red-500 hover:text-white"
              >
                <BiX className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block">Available Date</label>
                <div className="flex space-x-4">
                  <Input
                    type="date"
                    placeholder="Start Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full"
                  />
                  <Input
                    type="date"
                    placeholder="End Date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block">Language</label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All</SelectItem>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Spanish">Spanish</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="mb-2 block">Specialization</label>
                  <Select
                    value={specialization}
                    onValueChange={setSpecialization}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Practitioners">
                        All Practitioners
                      </SelectItem>
                      <SelectItem value="Cardiology">Cardiology</SelectItem>
                      <SelectItem value="Dermatology">Dermatology</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block">Status</label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ongoing">Ongoing</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="mb-2 block">Location</label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All</SelectItem>
                      <SelectItem value="New York">New York</SelectItem>
                      <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button
                className="w-full bg-primary-500 text-white hover:bg-primary-600"
                onClick={applyFilter}
              >
                Apply Filter
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FilterModal;
