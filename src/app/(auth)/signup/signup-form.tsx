"use client";

import { useState } from "react";
import SelectInput from "@/components/auth/select-input";
import TextInput from "@/components/auth/text-input";
import Button from "@/components/button";
import { FaUserLarge } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";
import { MdOutlineAlternateEmail, MdPhoneIphone } from "react-icons/md";
// import Image from "next/image";
import { useRouter } from "next/navigation";
import { SignupData } from "@/api/auth";
import { AuthApi } from "@/api";
import { useSnackbar } from "notistack";

export default function SignupForm() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [formStep, setFormStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<SignupData>({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    gender: "",
    maritalstatus: "",
    occupation: "",
    dob: "",
    religion: "",
    country: "",
    state: "",
    language: "",
  });
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    // Clear error when user starts typing
    setErrors(prevErrors => ({ ...prevErrors, [name]: [] }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string[]> = {};

    if (step === 0) {
      if (!formData.firstname) newErrors.firstname = ["First name is required"];
      if (!formData.lastname) newErrors.lastname = ["Last name is required"];
      if (!formData.email) newErrors.email = ["Email is required"];
      if (!formData.dob) newErrors.dob = ["Date of birth is required"];
      if (!formData.gender) newErrors.gender = ["Gender is required"];
    } else if (step === 1) {
      if (!formData.religion) newErrors.religion = ["Religion is required"];
      if (!formData.occupation) newErrors.occupation = ["Occupation is required"];
      if (!formData.maritalstatus) newErrors.maritalstatus = ["Marital status is required"];
      if (!formData.country) newErrors.country = ["Country is required"];
      if (!formData.state) newErrors.state = ["State is required"];
      if (!formData.password) newErrors.password = ["Password is required"];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(formStep)) {
      setFormStep(formStep + 1);
    }
  };

  const prevStep = () => {
    setFormStep(formStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = await AuthApi.signup(formData);
      enqueueSnackbar('Signup successful'+' '+data.message, { variant: 'success' });
      
      router.push("/otp-verification?email="+formData.email);
    } catch (error) {
      console.error('Signup error:', error);
      enqueueSnackbar('Signup failed', { variant: 'error' });
      setErrors({ form: [(error as Error).message] });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2 className="mb-5 text-center text-2xl font-bold leading-9 text-primary-700 lg:mb-4 lg:text-[1.875rem] lg:leading-[2.813rem]">
        SIGN UP
      </h2>

      {formStep === 0 && (
        <section className="flex flex-col gap-y-5 md:grid md:gap-y-9  grid-cols-2 gap-x-5">
          <TextInput
            label="First Name"
            name="firstname"
            icon={<LuPencilLine className="h-5 w-5" />}
            placeholder="First Name"
            required
            value={formData.firstname}
            onChange={handleInputChange}
            errors={errors}
          />

          <TextInput
            label="Last Name"
            name="lastname"
            icon={<LuPencilLine className="h-5 w-5" />}
            placeholder="Last Name"
            required
            value={formData.lastname}
            onChange={handleInputChange}
            errors={errors}
          />

          <TextInput
            label="Email"
            name="email"
            icon={<MdOutlineAlternateEmail className="h-5 w-5" />}
            placeholder="Official Email"
            required
            value={formData.email}
            onChange={handleInputChange}
            errors={errors}
          />

          <TextInput
            label="Phone Number"
            name="phone"
            icon={<MdPhoneIphone className="h-5 w-5" />}
            placeholder="Phone Number"
            required
            errors={errors}
          />

          <TextInput
            label="Date of Birth"
            name="dob"
            icon={<IoCalendarOutline className="h-5 w-5" />}
            placeholder="DOB"
            required
            value={formData.dob}
            onChange={handleInputChange}
            errors={errors}
          />

          <SelectInput
            label="Gender"
            name="gender"
            icon={<FaUserLarge className="h-5 w-5" />}
            required
            value={formData.gender}
            onChange={handleInputChange}
            errors={errors}
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </SelectInput>

          <Button
            type="button"
            className="col-span-2 mt-3 w-full"
            onClick={nextStep}
          >
            Continue
          </Button>
        </section>
      )}

      {formStep === 1 && (
        <section className="flex flex-col gap-y-5 md:grid md:gap-y-9  grid-cols-2 gap-x-5">
          <TextInput
            label="Religion"
            name="religion"
            icon={<LuPencilLine className="h-5 w-5" />}
            placeholder="Religion"
            required
            value={formData.religion}
            onChange={handleInputChange}
            errors={errors}
          />

          <TextInput
            label="Occupation"
            name="occupation"
            icon={<LuPencilLine className="h-5 w-5" />}
            placeholder="Occupation"
            required
            value={formData.occupation}
            onChange={handleInputChange}
            errors={errors}
          />

          <TextInput
            label="Marital Status"
            name="maritalstatus"
            icon={<MdOutlineAlternateEmail className="h-5 w-5" />}
            placeholder="Marital Status"
            required
            value={formData.maritalstatus}
            onChange={handleInputChange}
            errors={errors}
          />

          <TextInput
            label="Country"
            name="country"
            icon={<MdPhoneIphone className="h-5 w-5" />}
            placeholder="Country"
            required
            value={formData.country}
            onChange={handleInputChange}
            errors={errors}
          />

          <TextInput
            label="State"
            name="state"
            type="text"
            icon={<MdPhoneIphone className="h-5 w-5" />}
            placeholder="State"
            required
            value={formData.state}
            onChange={handleInputChange}
            errors={errors}
            autoComplete="off"
          />

          <div className="hidden lg:block" />

          <TextInput
            label="Create Password"
            name="password"
            type="password"
            icon={<IoCalendarOutline className="h-5 w-5" />}
            placeholder="Create Password"
            required
            value={formData.password}
            onChange={handleInputChange}
            errors={errors}
          />

          <TextInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            icon={<MdPhoneIphone className="h-5 w-5" />}
            placeholder="Confirm Password"
            required
            errors={errors}
          />

          <div className="col-span-2 my-3 flex items-center justify-between gap-x-20 lg:gap-x-32">
            <Button type="button" className="w-full" onClick={prevStep}>
              Prev
            </Button>
            <Button type="button" className="w-full" onClick={nextStep}>
              Continue
            </Button>
          </div>
        </section>
      )}

      {formStep === 2 && (
        <section className="grid gap-y-9 lg:gap-x-9">
           {/* <div className="col-span-2 flex flex-col items-center justify-center">
            <div className="mb-2.5 h-36 w-36">
              <Image
                src="/images/nurse-on-mask.png"
                alt=""
                width={144}
                height={144}
              />
            </div>
            <label htmlFor="" className="text-primary-500">
              Upload a Profile Picture
            </label>
          </div> */}
          <div className="col-span-2">
            <SelectInput 
              label="Select Language" 
              name="language" 
              required
              value={formData.language}
              onChange={handleInputChange}
              errors={errors}
            >
              <option value="">Select Language</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
            </SelectInput>
          </div>

          <div className="col-span-2 my-3 flex items-center justify-between gap-x-20 lg:gap-x-32">
            <Button type="submit" className="w-full disabled:bg-primary-500/50" disabled={isLoading}>
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </Button>
          </div>
          {errors.form && <p className="text-red-500">{errors.form[0]}</p>}
        </section>
      )}
    </form>
  );
}
