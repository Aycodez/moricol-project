import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { routes } from "@/constants/routes";
import { BiHome } from "react-icons/bi";
import {
  // FaUserMd,
  FaCalendarAlt,
  FaQuestionCircle,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";

const links = [
  {
    name: "Home",
    link: routes.TELEMEDICINE_DASHBOARD,
    SVGComponent: BiHome,
  },
  // {
  //   name: "All Practitioners",
  //   link: routes.TELEMEDICINE_PRACTITIONERS,
  //   SVGComponent: FaUserMd,
  // },
  {
    name: "Healthcare Appointment",
    link: routes.TELEMEDICINE_APPOINTMENTS,
    SVGComponent: FaCalendarAlt,
  },
  {
    name: "FAQ",
    link: routes.TELEMEDICINE_FAQ,
    SVGComponent: FaQuestionCircle,
  },
  {
    name: "Profile",
    link: routes.TELEMEDICINE_PROFILE,
    SVGComponent: FaUser,
  },
  {
    name: "Organisations",
    link: routes.TELEMEDICINE_ORGANIZATION,
    SVGComponent: FaUser,
  },
  {
    name: "Contact Us",
    link: routes.TELEMEDICINE_CONTACT,
    SVGComponent: FaEnvelope,
  },
];

export default function TelemedicineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout asideLinks={links}>
    <div>{children}</div>
  </DashboardLayout>;
}
