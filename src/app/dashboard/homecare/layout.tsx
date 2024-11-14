import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { MenuSVG } from "@/components/svgs";
import { routes } from "@/constants/routes";

const links = [
  { name: "Home", link: routes.HOMECAREDASHBOARDHOME, SVGComponent: MenuSVG },
  {
    name: "Your care givers",
    link: routes.HOMECARECAREGIVERS,
    SVGComponent: MenuSVG,
  },
  {
    name: "Your appointments",
    link: routes.HOMECAREAPPOINTMENTS,
    SVGComponent: MenuSVG,
  },
  { name: "FAQ", link: "", SVGComponent: MenuSVG },
  {
    name: "Profile",
    link: "",
    SVGComponent: MenuSVG,
  },
  {
    name: "Contact Us",
    link: "",
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
