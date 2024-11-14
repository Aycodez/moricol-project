import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { routes } from "@/constants/routes";
import { CgSearchLoading } from "react-icons/cg";
import { CiSaveDown1 } from "react-icons/ci";
import { GrList, GrResume } from "react-icons/gr";
import BackBTNonDetails from "./_component/back-btn-on-details-page";

const links = [
  {
    name: "All Jobs",
    link: routes.RECRUITMENT_JOBS,
    SVGComponent: CgSearchLoading,
  },
  {
    name: "Jobs I Posted",
    link: routes.RECRUITMENT_JOBS_POSTED,
    SVGComponent: CiSaveDown1,
  },
  {
    name: "Saved Applications",
    link: routes.RECRUITMENT_JOBS_SAVED,
    SVGComponent: CiSaveDown1,
  },
  {
    name: "Job Applications",
    link: routes.RECRUITMENT_JOBS_APPLICATIONS,
    SVGComponent: GrList,
  },
  {
    name: "My Resume",
    link: routes.RECRUITMENT_JOBS_RESUME,
    SVGComponent: GrResume,
  },
];

export default function RecruitmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout asideLinks={links}>
      <BackBTNonDetails />
      <div className="bg-gray-50 p-4 lg:p-8">{children}</div>
    </DashboardLayout>
  );
}
