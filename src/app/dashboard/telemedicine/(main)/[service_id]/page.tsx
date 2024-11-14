import React from "react";
import BookAppointmentsClient from "./_components/book-appointments-client";
import telemedicineApi from "@/api/telemedicine";
import { Session } from "next-auth";
import { getUserSession } from "@/lib/auth";

async function getService(serviceId: string, session: Session) {
  try {
    if (!session || !session.user || !('id' in session.user)) {
      throw new Error('User session is invalid or user ID is missing');
    }
    const { data: serviceData } = await telemedicineApi.retrieveSingleCategory({
      categoryid: serviceId,
      session
    });

    return serviceData;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to get doctors data');
  }
}

async function SingleServicePage({ params }: { params: { service_id: string } }) {
  const session = await getUserSession();
  const service = await getService(params.service_id, session as Session);
  console.log(service);
  return (
    <div>
      <BookAppointmentsClient service_id={params.service_id} />
    </div>
  );
}

export default SingleServicePage;
