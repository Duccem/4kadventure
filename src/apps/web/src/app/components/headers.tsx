"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav className="relative z-10 flex items-center justify-between px-[20px] mx-auto ">
                <div className="flex justify-between items-center gap-4 text-white p-3 rounded-xl ">
                    <Link href="/" className="hover:bg-neutral-700 p-3 rounded-[6px] transition-colors duration-300">
                        4KADVENTURE
                    </Link>
                </div>
                <div className="flex justify-between items-center gap-4 text-white p-3 rounded-3xl">
                    <Link href="/" className="hover:bg-neutral-700 p-3 rounded-xl transition-colors duration-300">
                        Home
                    </Link>
                    <Link href="/destination" className="hover:bg-neutral-700 p-3 rounded-xl transition-colors duration-300">
                        Destination
                    </Link>
                    <Link href="/gallery" className="hover:bg-neutral-700 p-3 rounded-xl transition-colors duration-300">
                        Gallery
                    </Link>
                    <Link href="/packages" className="hover:bg-neutral-700 p-3 rounded-xl transition-colors duration-300">
                        Travel Packages
                    </Link>
                </div>
                <button className="flex justify-between items-center gap-4 text-white p-3 rounded-xl ">
                    EN
                    <ChevronDown className="" />
                </button>
            </nav>
        </header>
    );
}