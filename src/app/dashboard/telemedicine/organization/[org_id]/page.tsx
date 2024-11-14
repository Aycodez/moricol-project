import { Session } from "next-auth"
import { Metadata } from "next"
import telemedicineApi from "@/api/telemedicine";
import { getUserSession } from "@/lib/auth";
import { Organization, OrganizationMember } from "@/definition";
import MembersList from "../_components/members-list";

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Organization Members',
  description: 'Manage organization members',
};

async function getOrganizationMembers(session: Session, organizationid: string) {
  try {
    if (!session || !session.user || !('id' in session.user)) {
      throw new Error('User session is invalid or user ID is missing');
    }
    const { data: organizationMembers }: { data: OrganizationMember[] } = await telemedicineApi.organization.retrieveMembers({ userid: session.user.id, organizationid, session, });
    const { data: organizationData }: { data: Organization[] } = await telemedicineApi.organization.my({ userid: session.user.id, session });

    return { organizationData, organizationMembers };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to get organization data');
  }
}

export default async function OrganizationMembersPage({ params }: { params: { org_id: string } }) {

  const session = await getUserSession();
  const { organizationData, organizationMembers } = await getOrganizationMembers(session as Session, params.org_id);


  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-1 container max-w-5xl mx-auto px-2 py-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Manage Members</h1>
          </div>
          {organizationData.map((org) => (
            org._id === params.org_id && (
              <div key={org._id} className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Organization Name</p>
                    <p className="font-medium capitalize">{org.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${org.active ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {org.active ? 'Active' : 'Pending'}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Plan Type</p>
                    <p className="font-medium">{org.plan_type || 'No plan'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium">{org.duration || 'Not specified'}</p>
                  </div>
                </div>
              </div>
            )
          ))}

          <MembersList members={organizationMembers} org_id={params.org_id} />


          {/* empty list state */}
          {organizationMembers.length === 0 && (
            <div className="rounded-lg bg-yellow-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.485 3.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 3.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-xl text-yellow-700">No members registered yet</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
