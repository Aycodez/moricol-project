import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { MenuSVG } from "@/components/svgs";
import { routes } from "@/constants/routes";

const links = [
  { name: "Home", link: routes.MASSAGEDASHBOARDHOME, SVGComponent: MenuSVG },
  {
    name: "Massage Specialists",
    link: routes.MASSAGESPECIALISTS,
    SVGComponent: MenuSVG,
  },
  {
    name: "Massage Services",
    link: routes.MASSAGESERVICES,
    SVGComponent: MenuSVG,
  },
  {
    name: "Masseuse's Appointment",
    link: routes.MASSAGEAPPOINTMENTS,
    SVGComponent: MenuSVG,
  },
  { name: "FAQ", link: routes.MASSAGEDASHBOARDHOME, SVGComponent: MenuSVG },
  {
    name: "My Profile",
    link: routes.MASSAGEDASHBOARDHOME,
    SVGComponent: MenuSVG,
  },
  {
    name: "Contact Us",
    link: routes.MASSAGEDASHBOARDHOME,
    SVGComponent: MenuSVG,
  },
];

export default function MassageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout asideLinks={links}>{children}</DashboardLayout>;
}
