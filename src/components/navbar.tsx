'use client'

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/sheet";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white px-4 py-2 md:px-9">
      <div className="flex items-center justify-between">
        <div className="transition-transform hover:scale-105">
          <Image src="/logo.svg" alt="Moricol logo" width={121} height={80.76} />
        </div>

        {/* Mobile menu button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger onClick={() => setIsOpen(!isOpen)} className="xl:hidden transition-colors hover:text-primary-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white px-0" onClick={(event) => {
            if (event.target instanceof HTMLAnchorElement) {
              event.preventDefault();
              setIsOpen(false);
            }
          }}  >
            <ul className="flex flex-col pt-4 pb-2  font-bold">
              {navLinks.map(({ href, name }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="transition-colors hover:bg-primary-500/10 py-4 px-4 hover:text-primary-500 block"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>

        {/* Desktop menu */}
        <ul className="hidden xl:flex gap-x-11 text-sm font-bold">
          {navLinks.map(({ href, name }) => (
            <li key={name}>
              <Link
                href={href}
                className="transition-colors hover:text-primary-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-500 after:transition-all hover:after:w-full"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// Language Switcher but currently not supported
// function LanguageSwitcher() {
//   return (
//     <div>
//       <button className="flex items-center rounded-lg bg-primary-50">
//         <div className="border-r-2 border-r-primary-500 py-3.5 pl-2 pr-2.5">
//           <Image
//             src="/icons/world.svg"
//             alt="World icon"
//             width={20}
//             height={20}
//           />
//         </div>
//         <div className="flex pl-2.5 pr-1.5">
//           <>
//             <Image
//               src="/icons/usa-flag.svg"
//               alt="USA flag"
//               width={20}
//               height={15}
//             />
//             <p className="ml-2 mr-2.5">EN</p>
//           </>
//           <div className="px-[3.75px] pb-[6.75px] pt-[8.25px]">
//             <Image
//               src="/icons/chevron.svg"
//               alt="chevron icon"
//               width={16.5}
//               height={9}
//             />
//           </div>
//         </div>
//       </button>
//     </div>
//   );
// }
