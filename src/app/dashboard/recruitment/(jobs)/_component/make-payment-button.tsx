'use client';

import jobsApi from "@/api/jobs";
import { ShadButton } from "@/components/shadcn-button";
import { storeToLocalStorage } from "@/util/store-to-localstorage";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";

const MakePaymentButton = ({ price, status, jobpostid }: { price: number, status: string, jobpostid: string }) => {
    const { enqueueSnackbar } = useSnackbar();
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();

    const handlePay = async () => {
        storeToLocalStorage({
            service: 'recruitment',
            link: pathname,
            toSend: {
                userid: session?.user.id,
                jobpostid,
                amount: price
            }
        });
        try {
            setIsLoading(true);
            const response = await jobsApi.makePayment(session?.user.id as string, session?.user.email as string, price, session as Session);
            window.open(response.data, '_self');
        } catch (error) {
            console.error(error);
            enqueueSnackbar('Error making payment', { variant: 'error' });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <ShadButton
            className={`w-full px-5 py-1 text-lg font-semibold bg-green-500 text-white`}
            onClick={handlePay}
        >
            {isLoading ? <FaSpinner className="animate-spin" /> : status.toUpperCase()}
        </ShadButton>
    );
};


export default MakePaymentButton;