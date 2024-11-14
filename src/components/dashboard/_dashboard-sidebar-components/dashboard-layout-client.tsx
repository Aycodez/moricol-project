"use client";
import Button from "@/components/button";
import { LogoutSvg } from "@/components/svgs";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import DashboardToolbar from "../dashboard-toolbar";
import { MdCancel } from "react-icons/md";
import { usePathname } from "next/navigation";
import { routes } from "@/constants/routes";

function DashboardLayoutClient({
  children,
  slot,
  fromRecruitment,
}: {
  children: ReactNode;
  slot: ReactNode;
  fromRecruitment?: boolean;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    return isSidebarOpen;
  };

  return (
    // <section className="flex h-screen overflow-y-hidden" onClick={(e) => {
    <section
      className="flex"
      onClick={(e) => {
        if (e.target instanceof HTMLAnchorElement) {
          setIsSidebarOpen(false);
        }
      }}
    >
      {/* if from recruitment */}
      {fromRecruitment && (
        <aside
          className={`no-scrollbar ease absolute z-[55] max-h-screen min-h-screen w-[85%] shrink-0 sm:w-[75%] md:w-[328px] ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} max-w-[328px] transform bg-[#27272a] shadow-xl transition-all duration-300 md:relative md:translate-x-0`}
        >
          <div className="absolute left-0 top-0 z-10 w-[85%] sm:w-[75%] md:w-full">
            <Image
              src="/images/dashboard/recruit-side-pattern-u.png"
              alt=""
              width={102}
              height={100}
              className="w-full object-contain"
            />
          </div>
          <div className="absolute bottom-0 right-0 z-10 w-full">
            <Image
              src="/images/dashboard/recruit-side-pattern-d.png"
              alt=""
              width={102}
              height={100}
              className="w-full object-contain"
            />
          </div>

          {isSidebarOpen && (
            <div className="circle absolute right-[-35px] top-2 z-[100] rounded-full bg-white text-3xl text-red-500 sm:text-4xl md:hidden">
              <MdCancel
                onClick={toggleSidebar}
                className="cursor-pointer hover:scale-[110%]"
              />
            </div>
          )}
          <div className="flex h-screen flex-col justify-center p-3 text-white sm:p-4">
            {pathname === routes.RECRUITMENTDASHBOARD ? (
              <h1 className="py-1 text-base font-bold sm:py-2 sm:text-lg">
                Post or find jobs, and build your resume.
              </h1>
            ) : pathname.includes(routes.RECRUITMENT_EMPLOYER) ? (
              <h1 className="py-1 text-base font-bold sm:py-2 sm:text-lg">
                Get value from the Candidates You Want
              </h1>
            ) : (
              <h1 className="py-1 text-base font-bold sm:py-2 sm:text-lg">
                Build your resume
              </h1>
            )}
            {pathname === routes.RECRUITMENTDASHBOARD ? (
              <p className="text-sm sm:text-base">
                Complete Your Resume or sign up as an Employer and Unlock your
                Moricol Job portal Account
              </p>
            ) : pathname.includes(routes.RECRUITMENT_EMPLOYER) ? (
              <p className="text-sm sm:text-base">
                Get access to countless potential candidates with proven skills
                for your company
              </p>
            ) : (
              <p className="text-sm sm:text-base">
                Complete Your Resume and Unlock your Moricol Job portal Account
              </p>
            )}
          </div>
        </aside>
      )}

      {/* if not from recruitment */}

      {!fromRecruitment && (
        <aside
          // className={`no-scrollbar ease absolute z-[55] max-h-screen min-h-screen w-[85%] shrink-0 sm:w-[75%] md:w-[328px] ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transform bg-primary-500 transition-all duration-300 md:relative md:translate-x-0 max-w-[328px] shadow-xl`}
          className={`ease absolute z-[55] w-[85%] shrink-0 sm:w-[75%] md:w-[328px] ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} max-w-[328px] transform bg-primary-500 shadow-xl transition-all duration-300 md:relative md:translate-x-0`}
        >
          {isSidebarOpen && (
            <div className="circle absolute right-[-35px] top-2 z-[100] rounded-full bg-white text-3xl text-red-500 sm:text-4xl md:hidden">
              <MdCancel
                onClick={toggleSidebar}
                className="cursor-pointer hover:scale-[110%]"
              />
            </div>
          )}
          <Link
            href="/"
            className="flex h-[60px] items-center justify-center bg-white sm:h-[68px] md:h-[74px]"
          >
            <Image
              src="/logo.svg"
              alt=""
              width={102}
              height={46.17}
              className="w-[80px] sm:w-[90px] md:w-[102px]"
            />
          </Link>
          <ul className="py-3 sm:py-4">
            {slot}
            <li className="mt-3 border-t border-t-white sm:mt-4">
              <Button className="flex w-full items-center gap-x-2 px-4 py-4 text-sm font-semibold sm:gap-x-2.5 sm:px-8 sm:py-4 sm:text-base md:px-8 md:py-5">
                <LogoutSvg fill="white" /> Logout
              </Button>
            </li>
          </ul>
        </aside>
      )}
      <div className="no-scrollbar relative grow overflow-y-auto">
        <DashboardToolbar
          fromRecruitment={fromRecruitment}
          toggleSidebar={toggleSidebar}
        />
        {children}
      </div>
    </section>
  );
}

export default DashboardLayoutClient;
