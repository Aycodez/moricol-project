"use client";

import { cn } from "@/util/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  active?: string;
}

export default function Navlink({ href, children, className, active }: Props) {
  const pathname = usePathname();

  const isActive = () => {
    return pathname === href ? active : "";
  };

  return (
    <Link href={href} className={cn(className, isActive())}>
      {children}
    </Link>
  );
}
