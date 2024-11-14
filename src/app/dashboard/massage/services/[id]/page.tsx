import NavigateToPrevPage from "@/components/dashboard/prev-page";
import MassageServiceCard from "@/components/massage/massage-service-card";
import { services } from "@/constants";
import { routes } from "@/constants/routes";
import Link from "next/link";

export default function ServiceDetail({ params }: { params: { id: string } }) {
  const data = services.find(({ id }) => +params.id === id);

  if (!data) return <>This service doesn`&apos;t exist</>;

  return (
    <main>
      <NavigateToPrevPage />

      <div className="px-20 pb-20 pt-9">
        <MassageServiceCard bg={data.bg} service={data.service} id={data.id} />

        <div className="mt-5 grid gap-y-6">
          <div>
            <h3 className="font-semibold">Pricing</h3>
            <p>₦15,000 Per Hour (Moricol Location)</p>
          </div>
          <div>
            <h3 className="font-semibold">Description</h3>
            <p>
              A gentle, relaxing massage that uses long, gliding strokes to
              improve circulation and promote overall well-being
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Functionality</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Venenatis malesuada proin
              nulla aliquet nunc. Proin id eu enim feugiat leo. Nunc at non
              ullamcorper fringilla dui venenatis aliquet venenatis vel. Tortor
              felis consectetur tempus euismod in lacus. Elementum scelerisque
              fringilla senectus pharetra vulputate diam lorem. Mauris netus
              iaculis accumsan adipiscing donec urna dui. Ornare massa accumsan
              nec suscipit. Pretium pretium et sem venenatis libero. Tellus ante
              eu varius bibendum auctor id. Accumsan nisl turpis vitae diam.
              Dolor vel aliquet donec pharetra faucibus. Interdum id tortor
              libero duis vitae. Sit imperdiet id rhoncus arcu consequat quis.
              Enim in lectus ut massa quis duis pulvinar. Quis dui nisl amet
              accumsan placerat dictum velit a ut. Eget phasellus pulvinar donec
              in in. Convallis sed cras id id. Aliquet posuere massa enim sit
              nullam. Lectus cras commodo viverra cursus ut venenatis erat
              dictum.
            </p>
          </div>
          <div>
            <Link
              href={routes.MASSAGESPECIALISTS}
              className="hover:bg-primary-500-80 inline-block w-full rounded-lg bg-primary-500 py-3.5 text-center text-white"
            >
              GO TO MASSEUSE
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
