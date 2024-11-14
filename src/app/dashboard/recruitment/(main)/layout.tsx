import DashboardLayout from "@/components/dashboard/dashboard-layout";
// import { ArrowRightSvg } from "@/components/svgs";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { BiHome } from "react-icons/bi";

export default function RecruitmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout fromRecruitment={true} asideLinks={[]}>
      <div className="border-b border-gray-300 px-4 py-2">
        <Link
          href={routes.RECRUITMENTDASHBOARD}
          className="flex items-center gap-x-2 text-sm font-bold text-primary-500"
        >
          {/* <ArrowRightSvg className="h-4 w-4" /> Dashboard */}
          <BiHome className="h-4 w-4" /> Dashboard
        </Link>
      </div>
      <div className="p-4 lg:p-8">{children}</div>
    </DashboardLayout>
  );
}
