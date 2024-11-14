'use client';

import loanApi from "@/api/loan";
import { storeToLocalStorage } from "@/util/store-to-localstorage";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";

const MakeLoanPayment = ({ price, loanid }: { price: number, loanid: string }) => {
    const { enqueueSnackbar } = useSnackbar();
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState(false);

    const pathname = usePathname();
    const userid = session?.user.id as string

    const handlePay = async () => {
        if (!price || !loanid) {
            enqueueSnackbar('Please enter an amount to pay', { variant: 'error' });
            return;
        }
        if (price === 0) {
            enqueueSnackbar('Amount cannot be 0', { variant: 'error' });
            return;
        }
        storeToLocalStorage({
            service: 'medicalLoan',
            link: pathname,
            toSend: {
                userid,
                loanid,
                amount: price
            }
        });
        try {
            setIsLoading(true);
            const response = await loanApi.initiatePayment({
                userid,
                email: session?.user.email as string,
                amount: price,
                session: session as Session
            });
            window.open(response.data, '_self');

        } catch (error) {
            console.error(error);
            enqueueSnackbar('Error making payment', { variant: 'error' });
        } finally {
            setIsLoading(false);
        }
    }

    return (

        <button
            onClick={() => {
                handlePay()

            }}
            className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
        >
            {isLoading ? <FaSpinner className="animate-spin" /> : 'Confirm'}
        </button>
    );
};


export default MakeLoanPayment;