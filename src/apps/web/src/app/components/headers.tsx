"use cliente";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav className="relative z-10 flex items-center justify-between px-6 py-4">
                <Link href="/" className="text-xl font-semibold text-white">
                    4KADVENTURE
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-white hover:text-white/80">
                        Home
                    </Link>
                    <Link href="/destination" className="text-white hover:text-white/80">
                        Destination
                    </Link>
                    <Link href="/gallery" className="text-white hover:text-white/80">
                        Gallery
                    </Link>
                    <Link href="/packages" className="text-white hover:text-white/80">
                        Travel Packages
                    </Link>
                </div>
                <button className="flex items-center gap-1 text-white">
                    EN
                    <ChevronDown className="h-4 w-4" />
                </button>
            </nav>
        </header>
    );
}