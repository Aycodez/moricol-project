"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSnackbar } from "notistack";
import TextInput from "@/components/auth/text-input";
import Link from "next/link";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

export default function LoginForm({ callbackUrl }: { callbackUrl: string }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        enqueueSnackbar(result.error, { variant: "error" });
      } else {
        enqueueSnackbar("Logged in successfully!", { variant: "success" });
        router.push(callbackUrl ?? "/");
      }
    } catch (error) {
      enqueueSnackbar("An unexpected error occurred. Please try again.", {
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-5 text-center text-2xl font-bold leading-9 text-primary-700 lg:mb-4 lg:text-[1.875rem] lg:leading-[2.813rem]">
        SIGN IN
      </h2>

      <section className="mb-10 grid gap-y-6 lg:gap-x-9">
        <TextInput
          label="Email"
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div>
          <TextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="mt-2.5 inline-block font-medium text-primary-500"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </section>
      <Button
        disabled={isLoading}
        type="submit"
        className="disabled:cursor-not-allowed"
      >
        {isLoading ? "Signing In..." : "Sign In"}
      </Button>
    </form>
  );
}
