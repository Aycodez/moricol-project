"use client";

import { forgotPassword } from "@/api/auth";
import TextInput from "@/components/auth/text-input";
import Button from "@/components/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useState } from "react";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const { email } = Object.fromEntries(new FormData(form));
    if (!email) return;

    try {
      setLoading(true);
      await forgotPassword(email as string);
      enqueueSnackbar("Password reset email sent, check your email", { variant: "success", autoHideDuration: 10000 });
      form.reset();
      return router.push(`/otp-verification?type=password-reset&email=${email}`);
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Failed to send password reset email", { variant: "error" });
    } finally {
      setLoading(false);
    }


  };

  return (
    <form onSubmit={handleSubmit} className="lg:mt-20">
      <div className="mb-5">
        <h2 className="mb-2 text-2xl font-bold leading-9 text-primary-700 lg:text-[1.875rem] lg:leading-[1.813rem]">
          Forgot Password
        </h2>
        <p className="text-[#686868]">
          Please enter the email address associated with this account
        </p>
      </div>


      <section className="mb-10 grid gap-y-6 lg:gap-x-9">
        <TextInput
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
      </section>
      <Button disabled={loading} className="disabled:cursor-not-allowed flex items-center justify-center">
        {loading ? <Loader2 className="animate-spin" /> : "Submit"}
      </Button>

    </form>
  );
}
