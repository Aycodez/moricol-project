import DashboardToolbar from "@/components/dashboard/dashboard-toolbar";
import NavigateToPrevPage from "@/components/dashboard/prev-page";
import AddOrganizationMemberForm from "./add-org-mem-form";

export default function AddPlanMember() {
  return (
    <main>
      <DashboardToolbar />
      <NavigateToPrevPage />

      <section className="mx-auto max-w-[818px] rounded-3xl bg-gray-50 p-8">
        <h3 className="mb-4 font-semibold">
          Provide the information for this Member
        </h3>

        <AddOrganizationMemberForm />
      </section>
    </main>
  );
}
