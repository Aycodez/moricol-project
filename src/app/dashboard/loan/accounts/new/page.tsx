'use client'

import loanApi from "@/api/loan";
import Button from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import NavigationBackBtn from "@/components/nav-back-btn";
import { routes } from "@/constants/routes";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";

function LoanAccountsNew() {
  const [cardDetails, setCardDetails] = useState<{
    cardNumber: string;
    cardExpiry: string;
    cvv: string;
  }>({
    cardNumber: '',
    cardExpiry: '',
    cvv: '',
  });

  const { data: session } = useSession();

  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (id === 'cardNumber') {
      if (value.length > 16) return;
      if (!/^\d*$/.test(value)) return;
    }

    if (id === 'cardExpiry') {
      if (value.length > 5) return;

      if ((e.nativeEvent as InputEvent).inputType === 'deleteContentBackward') {
        if (value.length === 2 && cardDetails.cardExpiry.length === 3) {
          setCardDetails({ ...cardDetails, [id]: value });
          return;
        }
      }
      if (value.length === 2 && !value.includes('/')) {
        setCardDetails({ ...cardDetails, [id]: value + '/' });
        return;
      }
    }

    if (id === 'cvv') {
      if (value.length > 3) return;
      if (!/^\d*$/.test(value)) return;
    }

    setCardDetails({ ...cardDetails, [id]: value });
  };




  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!cardDetails.cardNumber || !cardDetails.cardExpiry || !cardDetails.cvv) {
      return enqueueSnackbar('Please fill all fields', { variant: 'error' });
    }

    try {
      setLoading(true);
      await loanApi.createAccount({
        cardnumber: cardDetails.cardNumber,
        cardexpiry: cardDetails.cardExpiry,
        cvv: cardDetails.cvv,
        userid: session?.user.id as string,
        session: session as Session,
      });
      enqueueSnackbar('Account created successfully', { variant: 'success' });
      router.push(routes.LOANACCOUNTS);
    } catch (error) {
      enqueueSnackbar(error as string ?? 'Something went wrong', {
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = 'New Account | Moricol Loans';
  }, []);

  return (
    <div>
      <div className="border-b border-gray-300 px-4 py-2">
        <NavigationBackBtn />
      </div>
      <form className="max-w-xl px-4 py-4" onSubmit={handleSubmit}>
        <h1>Fill the form below to add a new card.</h1>
        <br />
        <div className="mb-4">
          <Label htmlFor="cardNumber" className="block pb-2 text-gray-700">
            Card Number
          </Label>
          <Input
            type="text"
            id="cardNumber"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter card number"
            required
            onChange={handleChange}
            value={cardDetails.cardNumber}
            minLength={16}
            maxLength={16}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="cardExpiry" className="block pb-2 text-gray-700">
            Card Expiry
          </Label>
          <Input
            type="text"
            id="cardExpiry"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            placeholder="MM/YY"
            required
            onChange={handleChange}
            value={cardDetails.cardExpiry}
            minLength={5}
            maxLength={5}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="cvv" className="block pb-2 text-gray-700">
            CVV
          </Label>
          <Input
            type="password"
            id="cvv"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter CVV"
            maxLength={3}
            required
            onChange={handleChange}
            value={cardDetails.cvv}
          />
        </div>
        <Button className="mt-10 lg:max-w-[360px]" type="submit" disabled={loading}>
          {loading ? (
            <FaSpinner className="animate-spin" />
          ) : (
            'Submit'
          )}
        </Button>
      </form>
    </div>
  );
}

export default LoanAccountsNew;
