"use client";

import Button from "@/components/button";
import { useState } from "react";
import EndMassageButton from "../../modals/end-massage";

export default function StartMassageForm() {
  const [hasMassageEnded, setMassageEnded] = useState(false);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {!hasMassageEnded ? (
        <Button onClick={() => setMassageEnded(true)}>START MASSAGE</Button>
      ) : (
        <EndMassageButton />
      )}
    </form>
  );
}
