"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/dropdown";
import { FilterIcon } from "lucide-react";
import Link from "next/link";
import { BlogCategory } from "@/api/blog";

export default function FilterByCategory({ categories }: { categories: BlogCategory[] }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="w-full sm:w-[281px] flex items-center justify-center gap-x-3 rounded-lg bg-primary-500 py-2 text-primary-50">
                <div className="flex items-center gap-x-2">
                    Filter by Category
                    <FilterIcon />

                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-primary-500 rounded-lg shadow-lg w-[281px] md:w-[200px]">
                {categories.map((c) => {
                    return (
                        <DropdownMenuItem key={c._id}>
                            <Link className="hover:text-primary-500  " href={`/blog/category/${c._id}`}>{c.name} ({c.blog})</Link>
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>


        </DropdownMenu>
    );
}
