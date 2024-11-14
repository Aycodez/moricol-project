"use client";
import ContentLayout from "@/app/dashboard/recruitment/_components/content-layout";
import Link from "next/link";
import { useState } from "react";
import { BiBriefcase, BiChevronRight } from "react-icons/bi";
import { BsFillPlusSquareFill, BsTrash2 } from "react-icons/bs";
import { Certification, ResumeType } from "@/definition";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import resumeApi from "@/api/local-resume";

import { useRouter } from "next/navigation";

export default function MoreOtherCertClient({
  next_route,
  more_route,
  otherCerts,
  type,
  order,
}: {
  next_route: string;
  more_route: string;
  otherCerts: Certification[];
  type: ResumeType;
  order?: number;
}) {
  const [certificates, setCertificates] = useState<Certification[]>(otherCerts);
  const { data: session } = useSession();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const deleteCertificate = async(id: string, setLoading: (loading: boolean) => void) => {

    try {
      const userId = session?.user?.id;
      if (!userId) {
        enqueueSnackbar("User session not found", { variant: "error" });
        return;
      }
      await resumeApi.deleteCertification({
        userId,
        dataId: id,
        session: session,
        type: type
      });
     
      setCertificates(certificates.filter(cert => cert._id !== id));
      enqueueSnackbar("Certificate deleted successfully", { variant: "success" });
    } catch (error) {
      console.error("Error deleting certificate:", error);
      enqueueSnackbar("Failed to delete certificate", { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    router.push(next_route);
  }


  return (
    <ContentLayout
      next_route={next_route}
      pageTitle="Your Other Certificates"
      step={order ?? 3}
      nextFunction={handleNext}
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {certificates.map((certificate) => (
         <MoreCertificateClientItem key={certificate._id} certificate={certificate} deleteCertificate={deleteCertificate}/>
        ))}
      </div>
      {certificates.length === 0 && (
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-secondary-500">No certificates found</p>
        </div>
      )}
      <Link
        href={more_route}
        className="mt-4 flex items-center font-semibold"
      >
        <BsFillPlusSquareFill className="mr-2" /> Add more Certificates
      </Link>
    </ContentLayout>
  );
}



 function MoreCertificateClientItem({certificate, deleteCertificate}: {certificate: Certification, deleteCertificate: (id: string, setLoading: (loading: boolean) => void) => void}) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async() => {
    setLoading(true);
    deleteCertificate(certificate._id, setLoading);
  }
  return (
     <div key={certificate._id}>
            <div className="rounded-lg bg-[#FFF8E7] p-4 shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <BiBriefcase className="text-3xl text-gray-500" />
                  <div>
                    <h3 className="font-semibold">{certificate.training_type}</h3>
                    <p className="text-sm text-gray-600">
                      {certificate.course_learnt}
                    </p>
                    <p className="text-sm text-gray-500">{`${certificate.start_date} - ${certificate.inview ? 'Present' : certificate.end_date}`}</p>
                    <p className="text-sm text-gray-500">
                      {certificate.inview ? "In Progress" : "Completed"}
                    </p>
                  </div>
                </div>
                <BiChevronRight className="text-3xl text-gray-400" />
              </div>
            </div>
            <button
              onClick={handleDelete}
              className="mt-2 flex items-center text-sm text-red-500"
            >
            {loading ? "Deleting..." : "Delete"}
              <BsTrash2 className="ml-1 h-4 w-4" />
            </button>
          </div>
  )
 }



 