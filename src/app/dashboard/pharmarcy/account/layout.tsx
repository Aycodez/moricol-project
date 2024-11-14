import { HeartSVG } from "@/components/svgs";
import { routes } from "@/constants/routes";
import Link from "next/link";

const accountLinks = [
  { name: "My Orders", link: routes.PHARMARCYACCOUNT, icon: <OrderSvg /> },
  {
    name: "Saved Items",
    link: routes.PHARMARCYACCOUNTSAVEDITEMS,
    icon: <HeartSVG className="h-5 w-5" />,
  },
  {
    name: "Addresses",
    link: routes.PHARMARCYACCOUNTADDRESSES,
    icon: <AddressBookSvg />,
  },
];

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="px-8 py-10">
      <div className="border-b border-[#D2D2D2] pb-3">
        <h1 className="shrink-0 text-lg font-semibold text-primary-500">
          Account
        </h1>
      </div>
      <div className="flex items-start gap-x-7 py-3.5">
        <aside className="w-[243px] shrink-0 rounded border border-[#CACACA] p-6">
          <ul className="grid gap-y-5">
            {accountLinks.map(({ name, link, icon }) => (
              <li
                key={link}
                className="border-b border-gray-300 pb-5 last:border-none last:pb-0"
              >
                <Link
                  href={link}
                  className="flex items-center gap-x-2 text-sm text-primary-500"
                >
                  {icon}
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <section className="grow">{children}</section>
      </div>
    </main>
  );
}

function OrderSvg() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5459 5.119L4.61561 2.35938H12.8945L14.9642 5.119M2.5459 5.119V14.7777C2.5459 15.1436 2.69127 15.4946 2.95004 15.7533C3.2088 16.0121 3.55976 16.1575 3.92571 16.1575H13.5844C13.9503 16.1575 14.3013 16.0121 14.5601 15.7533C14.8188 15.4946 14.9642 15.1436 14.9642 14.7777V5.119M2.5459 5.119H14.9642"
        stroke="#E29A13"
        strokeWidth="1.37981"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5144 7.87891C11.5144 8.6108 11.2236 9.31272 10.7061 9.83025C10.1886 10.3478 9.48663 10.6385 8.75474 10.6385C8.02284 10.6385 7.32092 10.3478 6.80339 9.83025C6.28586 9.31272 5.99512 8.6108 5.99512 7.87891"
        stroke="#E29A13"
        strokeWidth="1.37981"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AddressBookSvg() {
  return (
    <svg
      width="15"
      height="17"
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.20544 12.6776V15.6321H14.0237V0.859375H2.20544V3.81393M1.4668 10.4617H2.94407M1.4668 8.24576H2.94407M1.4668 6.02985H2.94407"
        stroke="#E29A13"
        strokeWidth="1.47728"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.114 7.13815C8.92987 7.13815 9.59127 6.47675 9.59127 5.66087C9.59127 4.84499 8.92987 4.18359 8.114 4.18359C7.29812 4.18359 6.63672 4.84499 6.63672 5.66087C6.63672 6.47675 7.29812 7.13815 8.114 7.13815Z"
        stroke="#E29A13"
        strokeWidth="1.47728"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0693 12.31C11.0693 11.5264 10.758 10.7749 10.2039 10.2208C9.64981 9.66675 8.89831 9.35547 8.11471 9.35547C7.33111 9.35547 6.57961 9.66675 6.02553 10.2208C5.47144 10.7749 5.16016 11.5264 5.16016 12.31"
        stroke="#E29A13"
        strokeWidth="1.47728"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
