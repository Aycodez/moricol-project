"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Button from "@/components/button";
import { LogoutSvg } from "@/components/svgs";

function DashboardSidebarClient({
  children,
  sidebarOpen,
}: {
  children: ReactNode;
  sidebarOpen: boolean;
}) {
  return (
    <aside
      className={`no-scrollbar ease absolute z-[52] max-h-screen min-h-screen w-[328px] shrink-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transform overflow-y-auto bg-primary-500 transition-all duration-300 md:relative md:translate-x-0`}
    >
      <Link
        href="/"
        className="flex h-[74px] items-center justify-center bg-white"
      >
        <Image src="/logo.svg" alt="" width={102} height={46.17} />
      </Link>
      <ul className="py-4">
        {children}

        <li className="mt-4 border-t border-t-white">
          <Button className="flex items-center gap-x-2.5 px-14 py-5 text-base font-semibold">
            <LogoutSvg /> Logout
          </Button>
        </li>
      </ul>
    </aside>
  );
}

export default DashboardSidebarClient;
