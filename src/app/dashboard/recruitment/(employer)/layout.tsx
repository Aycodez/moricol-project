import DashboardLayout from "@/components/dashboard/dashboard-layout";
import NavigationBackBtn from "@/components/nav-back-btn";

export default function EmployerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout fromRecruitment={true} asideLinks={[]}>
      <div className="border-b border-gray-300 px-4 py-2">
        <NavigationBackBtn />
      </div>
      <div className="p-4 lg:p-8">{children}</div>
    </DashboardLayout>
  );
}
