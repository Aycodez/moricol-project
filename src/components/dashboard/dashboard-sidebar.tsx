import { DashboardAsideLinksProps } from "@/definition";
import DashboardSidebarClient from "./_dashboard-sidebar-components/dashboard-sidebar-client";
import Navlink from "./navlink";

export default function DashboardSidebar({
  dashboardAsideLinks,
  sidebarOpen,
}: {
  dashboardAsideLinks: DashboardAsideLinksProps[];
  sidebarOpen: boolean;
}) {
  return (
    <DashboardSidebarClient sidebarOpen={sidebarOpen}>
      {dashboardAsideLinks.map(({ SVGComponent, link, name }, i) => (
        <li key={i}>
          <Navlink
            href={link}
            className="transition-color flex w-full items-center gap-x-2.5 px-14 py-5 text-sm font-semibold text-white duration-150 hover:bg-white hover:text-primary-500"
            // active="bg-white text-primary-500"
          >
            <SVGComponent fill="white" />
            {name}
          </Navlink>
        </li>
      ))}
    </DashboardSidebarClient>
  );
}
