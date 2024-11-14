'use client'

import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import loanApi from "@/api/loan";

export default function DeleteCardButton({ id }: { id: string }) {
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const { data: session } = useSession();
    const router = useRouter();

    const handleDelete = async () => {
        try {
            setLoading(true);
            await loanApi.deleteAccount({
                accountid: id,
                userid: session?.user.id as string,
                session: session as Session,
            });
            enqueueSnackbar('Account deleted successfully', { variant: 'success' });
            router.refresh()
        } catch (error) {
            enqueueSnackbar(error as string ?? 'Something went wrong', {
                variant: 'error',
            });
        } finally {
            setLoading(false);
        }
    }

    return <button
        onClick={handleDelete}
        type="submit"
        className="rounded flex items-center justify-center gap-2 bg-red-500 px-3 py-1 text-sm text-white opacity-80 hover:bg-red-600 hover:opacity-100"
    >
        {loading ?
            <Loader2 className="h-4 w-4 animate-spin" />
            : 'Delete'}
    </button>
}