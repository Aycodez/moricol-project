"use client";

import { changePassword } from "@/api/auth";
import TextInput from "@/components/auth/text-input";
import Button from "@/components/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useState } from "react";

export default function ResetPasswordForm({ email, code }: { email: string | undefined, code: string | undefined }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { new_password, confirm_password } = Object.fromEntries(new FormData(e.target as HTMLFormElement));

    if (!email) return;
    if (!new_password || !confirm_password) return;
    try {
      setLoading(true);
      await changePassword(new_password as string, confirm_password as string, code as string);
      router.push("/success");
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="lg:mt-20" onSubmit={handleSubmit}>
      <div className="mb-5">
        <h2 className="mb-2 text-2xl font-bold leading-9 text-primary-700 lg:text-[1.875rem] lg:leading-[1.813rem]">
          Reset Password
        </h2>
        <p className="text-[#686868]">Choose a new password for your account</p>
      </div>

      <section className="mb-8 grid gap-y-6 lg:gap-x-9">
        <TextInput
          name="email"
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          readOnly
          className={`${email ? "bg-green-200" : "bg-red-200"} cursor-not-allowed`}
        />
        <TextInput
          name="new_password"
          type="password"
          id="new_password"
          placeholder="Your new password"
          required
        />

        <TextInput
          name="confirm_password"
          type="password"
          id="confirm_password"
          placeholder="Confirm your new password"
          required
        />
      </section>
      <div className="grid gap-y-6">
        <Button disabled={loading || !email} className="disabled:cursor-not-allowed disabled:bg-primary-500/50 flex items-center justify-center">
          {loading ? <Loader2 className="animate-spin" /> : "Submit"}
        </Button>
        {email && <Link
          href="/signin"
          className="text-[#04030 8 rounded border border-[#040308] py-3.5 text-center font-semibold transition duration-300 hover:border-primary-500 hover:text-primary-500"
        >
          BACK TO LOGIN
        </Link>}

        {!email && <Link href={`/forgot-password?email=${email}`} className="text-lg text-[#0799e7] underline">Try again</Link>}
      </div>
    </form>
  );
}
