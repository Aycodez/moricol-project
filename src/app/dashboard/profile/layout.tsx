import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { MenuSVG } from "@/components/svgs";
import { routes } from "@/constants/routes";

const links = [
    { name: "Home Care", link: routes.HOMECAREDASHBOARDHOME, SVGComponent: MenuSVG },
    {
        name: "Online Pharmacy",
        link: routes.PHARMARCYDASHBOARD,
        SVGComponent: MenuSVG,
    },
    {
        name: "Recruitment",
        link: routes.RECRUITMENT,
        SVGComponent: MenuSVG,
    },
    {
        name: "Training",
        link: routes.TRAININGDASHBOARD,
        SVGComponent: MenuSVG,
    },
    {
        name: "Medical Loan",
        link: routes.LOANDASHBOARDHOME,
        SVGComponent: MenuSVG,
    },
    {
        name: "Telemedicine",
        link: routes.TELEMEDICINE,
        SVGComponent: MenuSVG,
    },
    {
        name: "Massage",
        link: routes.MASSAGEDASHBOARDHOME,
        SVGComponent: MenuSVG,
    }
];

export default function LoanLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayout asideLinks={links}>
        <div className="px-5 py-8">
            {children}
        </div>
    </DashboardLayout>;
}
