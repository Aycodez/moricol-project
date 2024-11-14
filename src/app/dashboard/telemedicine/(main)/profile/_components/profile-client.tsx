"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { Switch } from "@/components/switch";
import { Label } from "@/components/label";
import { Card, CardContent } from "@/components/card";
import Link from "next/link";
import { routes } from "@/constants/routes";
import FileInput from "@/components/file-input";

export default function ProfileClient() {
  const [isAcctEditable, setIsAcctEditable] = useState(false);
  const [isRecordEditable, setIsRecordEditable] = useState(false);

  const readonlyClass = "bg-gray-50 border-gray-200";

  return (
    <div className="mx-auto xl:container">
      <h1 className="mb-4 text-2xl font-bold">My Profile</h1>
      <Tabs defaultValue="medical">
        <TabsList>
          <TabsTrigger
            className="data-[state=active]:text-primary-500"
            value="medical"
          >
            Electronic Medical Record
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:text-primary-500"
            value="account"
          >
            Account Profile
          </TabsTrigger>
        </TabsList>
        <div className="relative top-[-2px] border border-primary-50" />
        <TabsContent value="medical">
          <Card className="border-0 bg-transparent px-0 py-4 shadow-none">
            <CardContent className="space-y-4 px-0">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="edit-mode">Edit</Label>
                  <Switch
                    id="edit-mode"
                    checked={isRecordEditable}
                    onCheckedChange={setIsRecordEditable}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="genotype">Genotype</Label>
                  <Input
                    id="genotype"
                    placeholder="Enter genotype"
                    className={!isRecordEditable ? readonlyClass : ""}
                    readOnly={!isRecordEditable}
                  />
                </div>
                <div>
                  <Label htmlFor="bloodGroup">Blood Group</Label>
                  <Input
                    id="bloodGroup"
                    placeholder="Enter blood group"
                    className={!isRecordEditable ? readonlyClass : ""}
                    readOnly={!isRecordEditable}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="allergies">Allergies</Label>
                <Textarea
                  id="allergies"
                  placeholder="List any allergies"
                  className={!isRecordEditable ? readonlyClass : ""}
                  readOnly={!isRecordEditable}
                />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Next of Kin</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="kinName">Name</Label>
                    <Input
                      id="kinName"
                      placeholder="Next of kin name"
                      className={!isRecordEditable ? readonlyClass : ""}
                      readOnly={!isRecordEditable}
                    />
                  </div>
                  <div>
                    <Label htmlFor="kinPhone">Phone Number</Label>
                    <Input
                      id="kinPhone"
                      placeholder="Next of kin phone number"
                      className={!isRecordEditable ? readonlyClass : ""}
                      readOnly={!isRecordEditable}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="kinRelationship">Relationship</Label>
                    <Input
                      id="kinRelationship"
                      placeholder="Relationship to next of kin"
                      className={!isRecordEditable ? readonlyClass : ""}
                      readOnly={!isRecordEditable}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Emergency Contact Details
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="emergencyName">Name of Contact</Label>
                    <Input
                      id="emergencyName"
                      placeholder="Emergency contact name"
                      className={!isRecordEditable ? readonlyClass : ""}
                      readOnly={!isRecordEditable}
                    />
                  </div>
                  <div>
                    <Label htmlFor="emergencyPhone">Contact Phone Number</Label>
                    <Input
                      id="emergencyPhone"
                      placeholder="Emergency contact phone"
                      className={!isRecordEditable ? readonlyClass : ""}
                      readOnly={!isRecordEditable}
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="uploadMedical">
                  Upload Scans or Medical Report
                </Label>
                <FileInput caption="upload document" title="" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* second tab */}
        <TabsContent value="account">
          <Card className="border-0 bg-transparent py-4 shadow-none">
            <CardContent className="px-0">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="edit-mode">Edit</Label>
                  <Switch
                    id="edit-mode"
                    checked={isAcctEditable}
                    onCheckedChange={setIsAcctEditable}
                  />
                </div>
                <Link
                  href={routes.TELEMEDICINE_PROFILE + "/change-password"}
                  className="md:text-md text-sm text-primary-600"
                >
                  Change Password?
                </Link>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      defaultValue="John"
                      className={!isAcctEditable ? readonlyClass : ""}
                      readOnly={!isAcctEditable}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      defaultValue="Doe"
                      className={!isAcctEditable ? readonlyClass : ""}
                      readOnly={!isAcctEditable}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="johndoe@example.com"
                      className={!isAcctEditable ? readonlyClass : ""}
                      readOnly={!isAcctEditable}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      defaultValue="08165547811"
                      className={!isAcctEditable ? readonlyClass : ""}
                      readOnly={!isAcctEditable}
                    />
                  </div>
                  <div>
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      type="date"
                      defaultValue="1999-03-07"
                      className={!isAcctEditable ? readonlyClass : ""}
                      readOnly={!isAcctEditable}
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Select disabled={!isAcctEditable}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="religion">Religion</Label>
                    <Input
                      id="religion"
                      defaultValue="Christian"
                      className={!isAcctEditable ? readonlyClass : ""}
                      readOnly={!isAcctEditable}
                    />
                  </div>
                  <div>
                    <Label htmlFor="occupation">Occupation</Label>
                    <Input
                      id="occupation"
                      defaultValue="Student"
                      className={!isAcctEditable ? readonlyClass : ""}
                      readOnly={!isAcctEditable}
                    />
                  </div>
                  <div>
                    <Label htmlFor="maritalStatus">Marital Status</Label>
                    <Select disabled={!isAcctEditable}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select marital status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="married">Married</SelectItem>
                        <SelectItem value="divorced">Divorced</SelectItem>
                        <SelectItem value="widowed">Widowed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      defaultValue="Nigeria"
                      className={!isAcctEditable ? readonlyClass : ""}
                      readOnly={!isAcctEditable}
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      defaultValue="Abuja"
                      className={!isAcctEditable ? readonlyClass : ""}
                      readOnly={!isAcctEditable}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
