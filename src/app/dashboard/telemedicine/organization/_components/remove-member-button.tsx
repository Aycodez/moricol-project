'use client'

import { X, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { Session } from 'next-auth'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import telemedicineApi from '@/api/telemedicine'

interface RemoveMemberButtonProps {
    memberId: string
    organizationid: string
}

export default function RemoveMemberButton({ memberId, organizationid }: RemoveMemberButtonProps) {
    const [isLoading, setIsLoading] = useState(false)
    const { data: session } = useSession()
    const router = useRouter()
    const { enqueueSnackbar } = useSnackbar()

    const removeMember = async () => {
        setIsLoading(true)
        try {
            await telemedicineApi.organization.removeMember({
                memberId,
                organizationid,
                userid: session?.user.id as string,
                session: session as Session
            })
            router.refresh()
            enqueueSnackbar('Member removed successfully', { variant: 'success' })
        } catch (error) {
            enqueueSnackbar('Error removing member', { variant: 'error' })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <button
            onClick={removeMember}
            disabled={isLoading}
            className="text-white hover:text-red-200 transition-colors"
            title="Remove member"
        >
            {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
                <X className="w-5 h-5" />
            )}
        </button>
    )
}