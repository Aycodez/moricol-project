"use client";

import { useFormStatus } from "react-dom";
import Button from "../button";

export default function SubmitButton({
  text,
  pendingText,
}: {
  text: string;
  pendingText: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} className="disabled:cursor-not-allowed">
      {pending ? pendingText : text}
    </Button>
  );
}
