"use client";

import { useState } from "react";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { BiLock } from "react-icons/bi";
import { FiEyeOff } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import Button from "@/components/button";

export default function ChangePasswordClient() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (field: "current" | "new" | "confirm") => {
    switch (field) {
      case "current":
        setShowCurrentPassword(!showCurrentPassword);
        break;
      case "new":
        setShowNewPassword(!showNewPassword);
        break;
      case "confirm":
        setShowConfirmPassword(!showConfirmPassword);
        break;
    }
  };

  return (
    <div className="py-5sssss mx-auto max-w-lg lg:container">
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div>
          <Label className="block pb-2" htmlFor="current-password">
            Current Password
          </Label>
          <div className="relative">
            <BiLock className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
            <Input
              id="current-password"
              type={showCurrentPassword ? "text" : "password"}
              className="pl-10 pr-10"
              placeholder="Password"
            />
            <button
              type="button"
              className="absolute right-0 top-0 h-full px-3"
              onClick={() => togglePasswordVisibility("current")}
            >
              {showCurrentPassword ? (
                <FiEyeOff className="h-4 w-4" />
              ) : (
                <BsEye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <div>
          <Label className="block pb-2" htmlFor="new-password">
            New Password
          </Label>
          <div className="relative">
            <BiLock className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
            <Input
              id="new-password"
              type={showNewPassword ? "text" : "password"}
              className="pl-10 pr-10"
              placeholder="Password"
            />
            <button
              type="button"
              className="absolute right-0 top-0 h-full px-3"
              onClick={() => togglePasswordVisibility("new")}
            >
              {showNewPassword ? (
                <FiEyeOff className="h-4 w-4" />
              ) : (
                <BsEye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <div>
          <Label className="block pb-2" htmlFor="confirm-password">
            Confirm New Password
          </Label>
          <div className="relative">
            <BiLock className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
            <Input
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              className="pl-10 pr-10"
              placeholder="Password"
            />
            <button
              type="button"
              className="absolute right-0 top-0 h-full px-3"
              onClick={() => togglePasswordVisibility("confirm")}
            >
              {showConfirmPassword ? (
                <FiEyeOff className="h-4 w-4" />
              ) : (
                <BsEye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-primary-500 text-white hover:bg-primary-600"
        >
          UPDATE
        </Button>
      </form>
    </div>
  );
}
