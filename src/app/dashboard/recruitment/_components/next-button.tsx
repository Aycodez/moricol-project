import Button from "@/components/button";
import Link from "next/link";
import React from "react";

function NextButton({ route }: { route: string }) {
  return (
    <Link href={route} className="w-full">
      <Button type="button" variant="primary">
        NEXT
      </Button>
    </Link>
  );
}

export default NextButton;
