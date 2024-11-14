"use client";

import NoItemsFound from "@/components/no-item-found";
import { routes } from "@/constants/routes";
import { LoanCategory } from "@/definition";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

function LoanFilterResults({
  loans,
  searchTerm,
}: {
  loans: LoanCategory[];
  searchTerm: string;
}) {
  const filteredLoans =
    searchTerm === ""
      ? loans
      : loans.filter((loan) =>
        loan.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );

  return (
    <div className="space-y-4">
      {filteredLoans.map((item, index) => (
        <Link
          href={`${routes.LOANPOLICY}?nm=${item.name}&cb=/apply/${item._id}`}
          key={index}
          className="group flex items-center rounded-lg bg-gray-50 bg-white p-4 shadow"
        >
          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full rounded-lg object-cover"
            />
            {/* <div className="h-full w-full rounded-lg bg-primary-100" /> */}
          </div>
          <div className="flex-grow">
            <h3 className="font-semibold">{item.name}</h3>
          </div>
          <BiChevronRight className="h-10 w-10 text-gray-400 group-hover:text-primary-500" />
        </Link>
      ))}

      {filteredLoans.length === 0 && <NoItemsFound />}
    </div>
  );
}

export default LoanFilterResults;
