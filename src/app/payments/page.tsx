"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  deleteFromLocalStorage,
  getFromLocalStorage,
} from "@/util/store-to-localstorage";
import jobsApi from "@/api/jobs";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import { landingPageServices, servicesDashboardLinks } from "@/constants";
import loanApi from "@/api/loan";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import onlinePharmacyApi from "@/api/online-pharmacy";

export default function Payments() {
  return (
    <Suspense fallback={<Loader2 className="h-8 w-8 animate-spin" />}>
      <PaymentsPage />
    </Suspense>
  );
}

function PaymentsPage() {
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const { data: session } = useSession();
  const [storedData, setStoredData] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    if (!session) return;
    const fetchData = async () => {
      try {
        setError(null);
        const storedData = getFromLocalStorage();
        setStoredData(storedData);
        if (!storedData) {
          throw new Error("No payment data found");
        }
        const reference = searchParams.get("reference");
        const trxref = searchParams.get("trxref");

        if (!reference || !trxref) {
          throw new Error("Missing payment reference");
        }
        const paymentData = storedData.toSend;
        console.log(storedData.service, paymentData);

        if (Object.keys(landingPageServices).includes(storedData.service)) {
          if (storedData.service === "recruitment") {
            await jobsApi.updateJobPostPayment({
              userid: paymentData.userid,
              jobpostid: paymentData.jobpostid,
              amount: paymentData.amount,
              session: session as Session,
            });
          } else if (storedData.service === "medicalLoan") {
            await loanApi.paybackLoan({
              userid: paymentData.userid,
              loanid: paymentData.loanid,
              amount: paymentData.amount,
              session: session as Session,
              ref: reference,
            });
          } else if (storedData.service === "onlinePharmacy") {
            await onlinePharmacyApi.createOrder(session, paymentData);
          } else {
            throw new Error("Invalid service");
          }
          deleteFromLocalStorage();
        } else {
          throw new Error("Invalid service");
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams, session]);

  useEffect(() => {
    document.title = "Processing Payment | Moricol";
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error && !loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center p-4">
        <div className="relative mx-auto mb-6 h-[80.76px] w-[161px] shrink-0 lg:mb-9 lg:h-[111.36px] lg:w-[222px]">
          <Image
            alt="Moricol logo"
            src="/logo.svg"
            fill
            sizes="100vw"
            priority
          />
        </div>
        <h1 className="pb-3 text-2xl font-bold">Processing Payment ...</h1>
        <div className="w-full max-w-md rounded-lg border-2 border-red-200 bg-red-50 p-6 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-800">
                Payment Error
              </h3>
              <p className="mt-1 text-red-600">{error}</p>
            </div>
          </div>
        </div>
        {/* services dropdown */}
        <div className="flex h-[300px] w-full max-w-[300px] flex-col items-center justify-end gap-4">
          Failed? Go back to services.
          <Select
            onValueChange={(value) => {
              router.push(value);
            }}
          >
            <SelectTrigger className="mb-7 w-full border-[#6D7280]">
              <SelectValue placeholder="Select profile" />
            </SelectTrigger>
            <SelectContent>
              {servicesDashboardLinks.map((service) => (
                <SelectItem
                  key={service.path}
                  value={service.path}
                  className="cursor-pointer px-4 py-3 hover:bg-primary-50"
                >
                  {service.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center p-4">
      <div className="relative mx-auto mb-6 h-[80.76px] w-[161px] shrink-0 lg:mb-9 lg:h-[111.36px] lg:w-[222px]">
        <Image alt="Moricol logo" src="/logo.svg" fill sizes="100vw" priority />
      </div>
      <div className="w-full max-w-md rounded-lg border-2 border-green-200 bg-green-50 p-6 shadow-lg">
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-green-800">
              Payment Successful!
            </h3>
            <p className="mt-2 text-green-600">
              Your payment has been processed successfully.
            </p>
          </div>
          <Link
            href={storedData.link}
            className="mt-4 rounded-lg bg-primary-600 px-6 py-2 text-white transition-colors hover:bg-primary-700"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}
