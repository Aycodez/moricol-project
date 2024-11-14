'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import SelectPlan from './select-plan'
import { Plan } from '@/definition'
import telemedicineApi, { CreateOrganizationParams } from '@/api/telemedicine'
import { useSnackbar } from 'notistack'
import { Session } from 'next-auth'
import dayjs from 'dayjs'
import { routes } from '@/constants/routes'

interface CreateOrgClientProps {
    availablePlans: Plan[]
}

export default function CreateOrgClient({ availablePlans }: CreateOrgClientProps) {
    const router = useRouter()
    const { data: session } = useSession()
    const { enqueueSnackbar } = useSnackbar()

    const [selectedPlan, setSelectedPlan] = useState<{
        planIndex: number
        durationIndex: number
    }>({
        planIndex: 1,
        durationIndex: 0
    })
    const [organizationName, setOrganizationName] = useState('')

    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        if (!organizationName || organizationName.length < 3) {
            enqueueSnackbar('Please enter an organization name', { variant: 'error' })
            return
        }

        //construct object
        const org: CreateOrganizationParams = {
            name: organizationName,
            plan_type: availablePlans[selectedPlan.planIndex].plan_type,
            duration: availablePlans[selectedPlan.planIndex].durations[selectedPlan.durationIndex].label,
            userid: session?.user?.id as string,
            start_date: new Date().toISOString(),
            end_date: dayjs().add(
                availablePlans[selectedPlan.planIndex].durations[selectedPlan.durationIndex].label === 'MONTHLY' ? 30 :
                    availablePlans[selectedPlan.planIndex].durations[selectedPlan.durationIndex].label === 'WEEKLY' ? 7 :
                        availablePlans[selectedPlan.planIndex].durations[selectedPlan.durationIndex].label === 'QUARTERLY' ? 120 : 30,
                'days'
            ).toISOString(),
            user_limit: availablePlans[selectedPlan.planIndex].max_members,
            session: session as Session,
            amount: Number(availablePlans[selectedPlan.planIndex].durations[selectedPlan.durationIndex].price)
        }


        try {
            setLoading(true)
            const { data } = await telemedicineApi.organization.create({
                ...org
            })
            console.log(data);


            enqueueSnackbar('Organization created successfully', { variant: 'success' })
            router.push(routes.TELEMEDICINE_ORGANIZATION)

        } catch (error) {
            enqueueSnackbar('Failed to create organization', { variant: 'error' })

        } finally {
            setLoading(false)
        }

    }

    const handlePlanSelect = (planIndex: number, durationIndex: number) => {
        setSelectedPlan({ planIndex, durationIndex })
    }

    return (
        <SelectPlan availablePlans={availablePlans} handlePlanSelect={handlePlanSelect} selectedPlan={selectedPlan} organizationName={organizationName} setOrganizationName={setOrganizationName} handleSubmit={handleSubmit} loading={loading} />
    )
}
