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
      className={`no-scrollbar ease fixed z-[52] h-screen w-[85%] max-w-[328px] shrink-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transform overflow-y-auto bg-primary-500 transition-all duration-300 sm:w-[75%] md:relative md:w-full md:translate-x-0`}
    >
      <Link
        href="/"
        className="flex h-[60px] items-center justify-center bg-white sm:h-[68px] md:h-[74px]"
      >
        <Image
          src="/logo.svg"
          alt="Logo"
          width={102}
          height={46.17}
          className="w-[80px] sm:w-[90px] md:w-[102px]"
        />
      </Link>
      <ul className="py-3 sm:py-4">
        {children}

        <li className="mt-3 border-t border-t-white sm:mt-4">
          <Button className="flex w-full items-center justify-center gap-x-2 px-4 py-4 text-sm font-semibold sm:gap-x-2.5 sm:px-8 sm:py-4 sm:text-base md:px-14 md:py-5">
            <LogoutSvg /> Logout
          </Button>
        </li>
      </ul>
    </aside>
  );
}

export default DashboardSidebarClient;
