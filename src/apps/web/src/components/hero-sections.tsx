"use client";

import { Instagram, Mail, ArrowUpRight, ArrowDown } from "lucide-react";

import Header from "./headers";
import { useI18n } from "../locales/client";
import WhatsAppIcon from "./icons/whatsapp";

export default function HeroSection() {
    const t = useI18n();

    return (
        <div className="h-screen bg-hero flex flex-col justify-center pt-20">

            <div className="flex flex-col h-full md:h-2/3 px-8 md:px-16 justify-center lg:justify-between pb-8 gap-[80px]">
                <div className="flex flex-col md:flex-row justify-start md:justify-between md:items-center gap-4">
                    <p className=" text-gray-700  text-5xl text-center md:text-start md:text-8xl font-medium md:w-2/3">
                        {t("hero.title1")}
                        <span className="md:text-gray-200">
                            {t("hero.title2")}
                        </span>
                    </p>
                    <div className="flex justify-center md:flex-col gap-4">
                        <div className="size-14 rounded-full border border-white p-2 bg-white/30 flex justify-center items-center  cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all">
                            <Instagram className="text-white" />
                        </div>
                        <div className="size-14 rounded-full border border-white p-2 bg-white/30 flex justify-center items-center  cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all">
                            <Mail className="text-white" />
                        </div>
                        <div className="size-14 rounded-full border border-white p-2 bg-white/30 flex justify-center items-center  cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all">
                            <WhatsAppIcon className="h-6 w-6 " />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full flex-col md:flex-row gap-4 mt-12 md:mt-0">
                    <div className="flex items-start gap-4 md:w-3/4 flex-col ">
                        <div className="bg-white text-black flex justify-between py-2 items-center gap-4 px-4 rounded-full cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all">
                            <p className="text-xl font-medium">{t("hero.cta")}</p>
                            <div className="rounded-full bg-neutral-900 text-white p-3">
                                <ArrowUpRight className="size-6" />
                            </div>
                        </div>

                    </div>
                    <p className="text-gray-50 text-lg  text-center md:text-start md:w-2/3 p-3 bg-black/60 rounded-xl">
                        {t("hero.subtitle")}
                    </p>
                </div>
            </div>

        </div>
    );
}
