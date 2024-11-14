"use client";

import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { MenuSVG } from "@/components/svgs";
import { routes } from "@/constants/routes";
import StoreProvider from "./StoreProvider";

const links = [
  { name: "Home", link: routes.PHARMARCYDASHBOARD, SVGComponent: MenuSVG },
  {
    name: "Category",
    link: routes.PHARMARCYCATEGORY,
    SVGComponent: MenuSVG,
  },
  {
    name: "Shopping cart",
    link: routes.PHARMARCYCART,
    SVGComponent: MenuSVG,
  },
  {
    name: "Account",
    link: routes.PHARMARCYACCOUNT,
    SVGComponent: MenuSVG,
  },
  { name: "Profile", link: "", SVGComponent: MenuSVG },
  {
    name: "Contact Us",
    link: "",
    SVGComponent: MenuSVG,
  },
];

export default function PharmarcyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <DashboardLayout asideLinks={links}>{children}</DashboardLayout>;
    </StoreProvider>
  );
}
