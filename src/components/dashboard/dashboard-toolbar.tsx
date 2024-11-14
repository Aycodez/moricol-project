"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../button";
import { MdNotifications } from "react-icons/md";
import { EditSVG } from "../svgs";
import { BiMenu } from "react-icons/bi";
import DashboardPathsSectionName from "./dashboard-paths-section-name";
import { useSession } from "next-auth/react";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { SelectContent, Select, SelectItem, SelectTrigger, SelectValue } from "../select";
import { useRouter } from "next/navigation";
import { servicesDashboardLinks } from "@/constants";



export default function DashboardToolbar({
  toggleSidebar,
  fromRecruitment,
}: {
  toggleSidebar?: () => boolean;
  fromRecruitment?: boolean;
}) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 flex h-[74px] items-center justify-between gap-x-9 bg-${!fromRecruitment ? "primary-500" : "[#27272a]"} px-4`}
    >
      <div className="flex items-center gap-x-2">
        {toggleSidebar && (
          <BiMenu
            color="white"
            size={35}
            className="cursor-pointer hover:scale-[110%] md:hidden"
            onClick={toggleSidebar}
          />
        )}
        <DashboardPathsSectionName />
      </div>
      <div className="flex items-center gap-x-4">
        <MdNotifications className="text-3xl text-primary-50" />
        <div className="h-10 w-10 md:h-12 md:w-12">
          <Image
            src="/images/client.jpg"
            alt=""
            height={30}
            width={30}
            className="h-full w-full rounded-full hover:cursor-pointer"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          />
        </div>
      </div>

      {showProfileMenu && <ProfileDropdown />}
    </header>
  );
}

function ProfileDropdown() {
  const { data } = useSession();
  const router = useRouter();


  const handleProfileChange = (path: string) => {
    router.push(path);
  }

  return (
    <article className="absolute right-2 top-[74px] w-full max-w-[320px] rounded-b-xl bg-white shadow-xl">
      <div className="flex flex-col items-center justify-center gap-y-2 py-2">
        <div className="relative h-20 w-20 rounded-full bg-[url('/images/client.jpg')] bg-cover bg-no-repeat">
          <Link href={routes.PROFILE} className="absolute  left-[57px] top-[62px]" title="Edit profile">
            <EditSVG />
          </Link>
        </div>
        <p>{data?.user?.firstname} {data?.user?.lastname}</p>
      </div>
      <div className="border-t border-t-primary-500 px-5 py-4">
        <p className="mb-1 text-sm text-primary-500">Switch Profile</p>

        <Select onValueChange={handleProfileChange}>
          <SelectTrigger className="w-full mb-7 border-[#6D7280]">
            <SelectValue placeholder="Select profile" />
          </SelectTrigger>
          <SelectContent>
            {servicesDashboardLinks.map((service) => (
              <SelectItem
                key={service.path}
                value={service.path}
                className="py-3 px-4 cursor-pointer hover:bg-primary-50"
              >
                {service.name}

              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant="text" className="text-lg font-bold text-primary-500">
          Sign Out
        </Button>
      </div>
    </article>
  );
}
