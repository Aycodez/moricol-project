import NavigateToPrevPage from "@/components/dashboard/prev-page";
import Image from "next/image";
import StartMassageForm from "./start-massage-form";
import { BadgeSvg, TwoUsersSvg } from "@/components/svgs";

export default function MasseuseAppointment() {
  return (
    <main>
      <NavigateToPrevPage />

      <div className="mx-auto my-9 max-w-[818px] rounded-3xl bg-gray-50">
        <section className="p-9">
          <Profile />
        </section>

        <section className="flex items-center justify-center gap-x-14 rounded-t-[40px] bg-gray-600 py-7">
          <div className="flex items-center gap-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-500">
              <TwoUsersSvg />
            </div>
            <div className="text-white">
              <p className="text-xl font-semibold">1000+</p>
              <p className="text-sm">Clients</p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-500">
              <BadgeSvg />
            </div>
            <div className="text-white">
              <p className="text-xl font-semibold">5 Years</p>
              <p className="text-sm">Experience</p>
            </div>
          </div>
        </section>

        <section className="grid gap-y-6 px-9 py-4">
          <article>
            <h3 className="mb-3 text-lg font-medium">About Masseuse</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Netus est sit est proin
              aliquet mi ac. Mauris posuere egestas egestas eget amet. Sed enim
              purus accumsan convallis feugiat sed nam varius. Vitae elementum
              ut ut cursus elit ac urna. Donec odio vivamus tellus nibh commodo
              turpis amet. Odio id pretium tristique vitae mattis adipiscing ut
              ullamcorper. At elit urna egestas hac. In ornare tincidunt
              molestie fusce condimentum at. Rhoncus magna eget nisi proin
              imperdiet mattis enim elit. Sit egestas risus ac placerat rhoncus
              duis nibh. Vitae feugiat eget cursus consequat molestie metus
              molestie convallis elementum. Consectetur pellentesque ornare diam
              tristique sed. Cras sit lorem tempus senectus non lobortis ut. Ac
              mattis sapien sed viverra lacus massa odio purus morbi. Augue
              varius mauris integer nisl neque massa purus facilisis euismod.
              Quis quis elementum eget urna sit leo ut elementum mattis. Eget
              viverra cursus eu mattis lobortis.
            </p>
          </article>
          <article>
            <h3 className="mb-3 text-lg font-medium">Speciaties</h3>
            <ul className="grid gap-y-2 text-gray-500">
              <li>Hot Stone Massage (3000/hr)</li>
              <li>Swedish Massage (1000/hr)</li>
              <li>Hot Stone Massage (3000/hr)</li>
            </ul>
          </article>
          <div className="-mx-9 border-t border-t-primary-500" />
          <article>
            <h3 className="mb-3 text-lg font-medium">Note</h3>
            <p>
              Both parties have to click on &quot;Start Massage&quot; for your
              massage to start reading
            </p>
          </article>
          <StartMassageForm />
        </section>
      </div>
    </main>
  );
}

function Profile() {
  return (
    <article className="flex shrink-0 items-center gap-x-3">
      <Image
        src="/images/client.jpg"
        alt=""
        width={90}
        height={90}
        className="h-[90px] w-[90px] rounded-xl"
      />
      <div>
        <h3 className="mb-0.5 text-lg font-medium text-gray-700">
          Bolaji Samuel
        </h3>
        <div className="mb-2 text-sm font-medium text-gray-500">
          ⭐ <span>4.5</span>
        </div>
        <p className="text-[#777A95]">Masseuse</p>
      </div>
    </article>
  );
}
