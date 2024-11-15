"use client";

import Button from "@/components/button";
import ModalLayout from "@/components/layouts/modal-layout";
import { CancelSvg } from "@/components/svgs";
import { useState } from "react";
import { Attributes } from "../product/[id]/page";
import onlinePharmacyApi from "@/api/online-pharmacy";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";
export interface ReturnOrder {
  userid: string;
  orderid: string;
  note: string;
  total_fee: number;
  quantity: number;
  subprice: 1000;
  productid: string;
  variant: Attributes[];
}

export default function SubmitProposal({
  returnOrder,
}: {
  returnOrder: ReturnOrder;
}) {
  const { data: session } = useSession();
  const [haveSubmittedProposal, setProposalSubmission] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const handleSubmit = async () => {
    await onlinePharmacyApi
      .returnOrder(session!, returnOrder)
      .then(() =>
        // if (r.status_code== 200)
        enqueueSnackbar({
          variant: "success",
          message: "Request successfully sent",
        }),
      )
      .catch((err: Error) => {
        console.log(err);
        enqueueSnackbar({ variant: "error", message: err.message });
      });
  };
  return (
    <>
      <div className="mt-10 text-center">
        <Button
          className="lg:max-w-[640px]"
          onClick={() => {
            setProposalSubmission(true);
            handleSubmit();
          }}
        >
          CONTINUE
        </Button>
      </div>

      {haveSubmittedProposal && (
        <ModalLayout>
          <article className="w-[957px] rounded-lg bg-white px-14 py-6">
            <button
              className="mb-1 ml-auto flex h-4 w-4 items-center justify-center rounded-full border-2 border-secondary-500"
              onClick={() => {
                setProposalSubmission(false);
                router.push("/dashboard/pharmarcy/account");
              }}
            >
              <CancelSvg stroke="#D81302" className="h-3 w-3" />
            </button>
            <p className="text-center text-base">
              Your request is been processed. Our Support team will reach out to
              you for further assistance.Sorry for any inconvenience
            </p>
          </article>
        </ModalLayout>
      )}
    </>
  );
}
