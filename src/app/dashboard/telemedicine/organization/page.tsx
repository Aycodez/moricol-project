import { Session } from "next-auth"
import { Metadata } from "next"
import telemedicineApi, { availablePlansList } from "@/api/telemedicine";
import { getUserSession } from "@/lib/auth";
import CreateOrgClient from "./_components/create-org-client";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { Organization } from "@/definition";

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Telemedicine',
  description: 'Telemedicine dashboard',
};

async function getTelemedicineData(session: Session) {
  try {
    if (!session || !session.user || !('id' in session.user)) {
      throw new Error('User session is invalid or user ID is missing');
    }
    const { data: organizationData }: { data: Organization[] } = await telemedicineApi.organization.my({ userid: session.user.id, session });

    return organizationData;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to get loan data');
  }
}

export default async function OrganizationHomepage() {
  const session = await getUserSession();
  const organizationData = await getTelemedicineData(session as Session);
  const availablePlans = availablePlansList


  return (
    <div className="flex flex-col min-h-screen bg-white">
      {organizationData.length > 0 ? (
        <div className="flex-1 container max-w-5xl mx-auto px-2 py-5">
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Your Organizations</h1>
              <Link href={routes.TELEMEDICINE_ORGANIZATION_CREATE}>
                <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600">
                  Add Organization
                </button>
              </Link>
            </div>
            <div className="">
              {organizationData.map((org) => (
                <div key={org._id} className="p-6 rounded-lg border bg-white shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold capitalize">{org.name}</h2>
                    <span className={`px-2 py-1 text-xs rounded-full ${org.active ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                      {org.active ? 'Active' : 'Pending'}
                    </span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium mr-2">Members:</span>
                      {org.total_member || 0} people
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium mr-2">Plan:</span>
                      {org.plan_type || 'No plan'}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium mr-2">Created:</span>
                      {new Date(org.createdAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium mr-2">Renews:</span>
                      {org.duration || 'No duration'}
                    </div>


                  </div>
                  <div className="mt-6 flex space-x-3">

                    <Link href={`${routes.TELEMEDICINE_ORGANIZATION}/${org._id}`} className="flex-1">
                      <button className="w-full border border-gray-200 px-4 py-2 rounded hover:bg-gray-50 transition-colors">
                        Manage Members
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <CreateOrgClient availablePlans={availablePlans} />
      )}

    </div>
  )
}