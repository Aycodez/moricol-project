import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { MenuSVG } from "@/components/svgs";
import { routes } from "@/constants/routes";

const links = [
  { name: "Home", link: routes.LOANDASHBOARDHOME, SVGComponent: MenuSVG },
  {
    name: "All Loans",
    link: routes.LOANHISTORY,
    SVGComponent: MenuSVG,
  },
  {
    name: "Accounts",
    link: routes.LOANACCOUNTS,
    SVGComponent: MenuSVG,
  },
  {
    name: "Add Accounts",
    link: routes.LOANACCOUNTSNEW,
    SVGComponent: MenuSVG,
  },
  { name: "Policy Agreement", link: routes.LOANPOLICY, SVGComponent: MenuSVG },
];

export default function LoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout asideLinks={links}>{children}</DashboardLayout>;
}
