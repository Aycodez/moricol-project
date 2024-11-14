import Image from "next/image";
import Navlink from "@/components/dashboard/navlink";
import { trainingDashboardProfileLinks } from "@/constants";

export default function TrainingProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profileLinksList = trainingDashboardProfileLinks.map(
    ({ href, name }) => (
      <li className="w-full" key={href}>
        <Navlink
          href={href}
          className="inline-block w-full border-b-2 border-b-transparent py-5 text-center"
          active="border-b-[#FF6636]"
        >
          {name}
        </Navlink>
      </li>
    ),
  );

  return (
    <section className="no-scrollbar overflow-y-auto">
      <div className="relative bg-primary-100 px-14 pt-9">
        <article className="relative -bottom-2 border border-primary-500 bg-white">
          <div className="flex items-center gap-x-6 border-b border-primary-500 p-10">
            <div className="relative h-[6.875rem] w-[6.875rem] overflow-hidden rounded-full">
              <Image fill src="/images/client.jpg" alt="" sizes="6.875rem" />
            </div>

            <div>
              <h3 className="mb-3.5 text-2xl font-semibold text-[#1D2026]">
                Kevin Gilbert
              </h3>
              <p className="text-gray-500">
                Web Designer & Best-Selling Instructor
              </p>
            </div>
          </div>

          <ul className="flex justify-between gap-x-6">{profileLinksList}</ul>
        </article>
      </div>
      {children}
    </section>
  );
}
