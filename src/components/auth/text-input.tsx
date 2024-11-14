"use client";

import { useTogglePassword } from "@/hooks/useTogglePassword";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Input } from "../input";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  icon?: React.ReactNode;
  name: string;
  type?: string;
  errors?: Record<string, string[]>;
};

export default function TextInput({
  label,
  icon,
  name,
  type = "text",
  errors,
  ...props
}: TextInputProps) {
  const { isVisible, toggleVisibility } = useTogglePassword();

  const hasError = errors && errors[name]?.length > 0;
  const errorMessage = hasError ? errors && errors[name][0] : "";

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="text-grey-800 mb-2.5 inline-block font-medium"
        >
          {label}
        </label>
      )}

      <div className="text-grey-500 relative">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2">{icon}</div>
        <Input
          type={type === "password" && isVisible ? "text" : type}
          id={name}
          name={name}
          className={`w-full py-2.5 pl-11 focus:pl-11 placeholder:font-light focus:outline-none ${
            icon === undefined && "pl-3.5"
          } border-grey-400 rounded-lg border pr-3.5`}
          {...props}
        />

        {type === "password" && (
          <button
            type="button"
            className="absolute right-3.5 top-1/2 -translate-y-1/2"
            onClick={() => toggleVisibility()}
          >
            {isVisible ? (
              <IoEyeOffOutline />
            ) : (
              <IoEyeOutline className="h-5 w-5" />
            )}
          </button>
        )}
      </div>

      {hasError && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
}
