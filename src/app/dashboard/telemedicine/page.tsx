import Button from "@/components/button";
import Image from "next/image";
// import { FaRoad, FaUserDoctor, FaUserNurse } from "react-icons/fa6";
// import { IoNutrition } from "react-icons/io5";
// import { TbPhysotherapist } from "react-icons/tb";
import SpecialistCard from "./_components/specialist-card";
import TelemedicineLayoutTemplate from "./(main)/template";
import { Metadata } from "next";
import telemedicineApi from "@/api/telemedicine";
import { getUserSession } from "@/lib/auth";
import { Session } from "next-auth";
import TelemedPageWrap from "./_components/telemed-page-wrap";

export const revalidate = 0;

type TelemedicineDataType = {
  editedBy: null;
  editedAt: string;
  _id: string;
  name: string;
  status: string;
  image: string;
  description: string;
  client: number;
  createdAt: string;
  __v: number;
};


export const metadata: Metadata = {
  title: 'Telemedicine',
  description: 'Telemedicine dashboard',
};

async function getTelemedicineData(session: Session) {
  try {
    if (!session || !session.user || !('id' in session.user)) {
      throw new Error('User session is invalid or user ID is missing');
    }
    const { data: telemedicineData }: { data: TelemedicineDataType[] } = await telemedicineApi.homepage({ userid: session.user.id, session });

    return telemedicineData;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to get loan data');
  }
}

export default async function Telemedicine() {
  const session = await getUserSession();
  const telemedicineData = await getTelemedicineData(session as Session);


  return (
    <TelemedicineLayoutTemplate>
      <TelemedPageWrap>
        <div className="flex min-h-screen flex-col md:flex-row">
          <main className="flex-grow">
            <h1 className="text-2xl font-bold">Welcome, {session?.user?.firstname}</h1>

            <p className="mb-8 text-gray-600">Find your suitable doctors here</p>

            <div className="pb-2">
              <hr />
              <p className="md:hidden py-2">Schedule an appointment</p>
              <div className="hidden pt-3 md:block"></div>

              <div className="flex md:flex md:flex-col md:items-end">
                <Button className="md:w-fit">
                  Schedule a doctor&apos; appointment
                </Button>
              </div>
              <div className="pt-3"></div>
              <hr />
            </div>

            {/* Specialists Section */}
            <section className="mb-8">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Specialists</h2>
                {/* <Link
                href={routes.TELEMEDICINE_SPECIALISTS}
                className="text-primary-500 hover:underline"
              >
                View all
              </Link> */}
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {
                  telemedicineData.map((category) => (
                    <SpecialistCard
                      key={category._id}
                      id={category._id}
                      color="bg-purple-100"
                      icon={
                        <div className=" bg-purple-200 h-fit w-fit rounded-full p-1">
                          <Image src={category.image} alt={category.name} width={20} className="object-cover h-8 w-8 block rounded-full" height={20} />
                        </div>
                      }
                      title={category.name}
                      description={category.description}
                    />
                  ))
                }

              </div>
            </section>

          </main>
        </div>
      </TelemedPageWrap>
    </TelemedicineLayoutTemplate>
  );
}
