"use client";
import Link from "next/link";
import Locale from "./atoms/locale";
import SideBarApp from "./atoms/side-bar-app";
import { SidebarProvider, SidebarTrigger } from '@4k/ui/components/ui/sidebar';

export default function Header() {
    return (
        <div className="max-h-[100px] absolute w-full z-50">
            <nav className="relative z-10 hidden md:flex items-center justify-between  mx-auto px-16 ">
                <div className="flex justify-between items-center gap-4  p-3 rounded-xl ">
                    <Link href="/" className="hover:bg-neutral-700 p-3 hover:text-white rounded-[6px] transition-colors duration-300">
                        4KADVENTURE
                    </Link>
                </div>
                <div className="flex justify-between items-center gap-4  p-3 rounded-3xl">
                    <Link href="/" className="hover:bg-neutral-700 p-3 hover:text-white rounded-md transition-colors duration-300">
                        Home
                    </Link>
                    <Link href="/destination" className="hover:bg-neutral-700 p-3 hover:text-white rounded-md transition-colors duration-300">
                        Destinations
                    </Link>
                    <Link href="/gallery" className="hover:bg-neutral-700 p-3 hover:text-white rounded-md transition-colors duration-300">
                        Gallery
                    </Link>
                </div>
                <Locale />
            </nav>
            <div className="md:hidden">
                <SidebarProvider>
                    <SideBarApp></SideBarApp>
                    <SidebarTrigger />
                </SidebarProvider>
            </div>
        </div>
    );
}