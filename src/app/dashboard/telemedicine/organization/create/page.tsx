
import { availablePlansList } from '@/api/telemedicine'
import React from 'react'
import CreateOrgClient from '../_components/create-org-client'

export const metadata = {
    title: "Create Organization",
    description: "Create a new organization for telemedicine",
}

const CreateOrganization: React.FC = () => {
    const availablePlans = availablePlansList

    return (
        <div>
            <CreateOrgClient availablePlans={availablePlans} />
        </div>
    )
}

export default CreateOrganization


