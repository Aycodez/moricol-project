import Button from "@/components/button";
import { PencilLine, PaperPlaneSvg, SearchSvg } from "@/components/svgs";
import Image from "next/image";
import ComposeMessage from "../../modals/compose-message";

export default function TrainingProfileMessages() {
  return (
    <main className="px-14 py-12">
      <section className="flex gap-x-6">
        {/* Friend list section */}
        <aside className="w-[424px] shrink-0 border border-[#E9EAF0] py-6">
          <div className="mb-4 flex items-center justify-between px-6">
            <h2 className="text-xl font-semibold text-[#1D2026]">Message</h2>
            <ComposeMessage />
          </div>
          <div className="mb-4 px-6">
            <div className="flex items-center gap-x-3 border border-[#E9EAF0] px-4 py-3 text-[#4E5566] has-[:focus]:border-primary-500 has-[:focus]:bg-primary-50">
              <SearchSvg />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent focus:outline-none"
              />
            </div>
          </div>

          {/* Friends */}
          <ul>
            <li>
              <MessageUserCard />
            </li>
            <li>
              <MessageUserCard />
            </li>
          </ul>
        </aside>

        <section className="relative grow border border-[#E9EAF0] pb-24">
          {/* Messaging Heading */}
          <header className="flex items-center justify-between border-b border-b-[#E9EAF0] px-6 py-5">
            <article className="flex items-center gap-x-4">
              <div className="relative h-16 w-16 rounded-full">
                <Image
                  src="/images/client.jpg"
                  alt=""
                  fill
                  sizes="48px"
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
                <div className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full border-2 border-white bg-[#23BD33]" />
              </div>
              <div className="text-sm text-[#4E5566]">
                <h3 className="mb-2 text-lg font-medium text-[#1D2026]">
                  Jane Cooper
                </h3>
                <p>Active now</p>
              </div>
            </article>
            <button className="bg-[#F5F7FA] p-3">
              <ThreeDotsMenu />
            </button>
          </header>

          {/* Messaging body */}
          <main className="no-scrollbar grid max-h-[678px] gap-y-6 overflow-y-auto px-6 py-12">
            <IncomingMessage />
            <OutGoingMessage />
          </main>

          {/* Messaging Footer */}
          <footer className="absolute bottom-0 flex w-full gap-x-5 border-t border-[#E9EAF0] p-6">
            <div className="flex grow items-center gap-x-3 border border-[#E9EAF0] px-4 py-3 text-[#4E5566] has-[:focus]:border-primary-500 has-[:focus]:bg-primary-50">
              <PencilLine />
              <input
                type="text"
                placeholder="Your message..."
                className="bg-transparent focus:outline-none"
              />
            </div>
            <Button className="flex w-fit shrink-0 items-center gap-x-3 rounded-none py-3">
              Send <PaperPlaneSvg />
            </Button>
          </footer>
        </section>
      </section>
    </main>
  );
}

function MessageUserCard() {
  return (
    <article className="transition-color flex gap-x-4 px-6 py-3 duration-300 hover:bg-primary-50">
      <div className="relative h-12 w-12 rounded-full">
        <Image
          src="/images/client.jpg"
          alt=""
          fill
          sizes="48px"
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />
        <div className="absolute bottom-0.5 right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#23BD33]" />
      </div>
      <div className="flex grow flex-col justify-between text-sm text-[#4E5566]">
        <div className="flex justify-between">
          <h3 className="font-medium text-[#1D2026]">Jane Cooper</h3>
          <p>just now</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Yeah sure, tell me Zafor</p>
          <div className="h-2 w-2 rounded-full bg-primary-500" />
        </div>
      </div>
    </article>
  );
}

function ThreeDotsMenu() {
  return (
    <div className="flex h-6 w-6 items-center justify-center gap-x-[3px]">
      {Array(3)
        .fill("")
        .map((_, i) => (
          <div key={i} className="h-1 w-1 rounded-full bg-[#1D2026]" />
        ))}
    </div>
  );
}

function IncomingMessage() {
  return (
    <article className="w-full max-w-[536px]">
      <div className="mb-2 flex items-center gap-x-1.5">
        <div className="relative h-6 w-6 rounded-full">
          <Image
            src="/images/client.jpg"
            alt=""
            fill
            sizes="24px"
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
        </div>
        <p className="text-xs text-[#6E7485]">Time</p>
      </div>
      <p className="bg-primary-100 px-3 py-2 text-sm text-[#1D2026]">
        Hello and thanks for signing up to the course. If you have any questions
        about the course or Adobe XD, feel Level 2 to get in touch and I&apos;ll be
        happy to help 😀
      </p>
    </article>
  );
}

function OutGoingMessage() {
  return (
    <div className="flex justify-end">
      <article className="w-full max-w-[536px]">
        <p className="mb-2 text-right text-xs text-[#6E7485]">Time</p>

        <p className="bg-primary-100 px-3 py-2 text-sm text-[#1D2026]">
          Hello and thanks for signing up to the course. If you have any
          questions about the course or Adobe XD, feel Level 2 to get in touch
          and I&apos;ll be happy to help 😀
        </p>
      </article>
    </div>
  );
}
