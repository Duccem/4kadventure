"use client";

import { Instagram, Mail, ArrowUpRight, Youtube } from "lucide-react";

import { useI18n } from "../locales/client";
import WhatsAppIcon from "./icons/whatsapp";
import Link from "next/link";

export default function HeroSection() {
  const t = useI18n();

  return (
    <div className="h-screen bg-hero flex flex-col justify-center pt-20">
      <div className="flex flex-col h-full md:h-2/3 px-8 md:px-16 justify-center  pb-8 gap-10">
        <div className="flex flex-col md:flex-row justify-start md:justify-between md:items-center gap-4">
          <p className=" text-gray-700  text-5xl text-center md:text-start md:text-8xl font-medium md:w-2/3">
            {t("hero.title1")}
            <span className="md:text-gray-200">{t("hero.title2")}</span>
          </p>
          <div className="flex justify-center md:flex-col gap-4">
            <Link
              href="https://www.instagram.com/4kadventures1"
              target="_blank"
              className="size-14 rounded-full border border-white p-2 bg-white/30 flex justify-center items-center  cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <Instagram className="text-white" />
            </Link>
            <Link
              href="mailto:contacto@4kadventuresandtours.com"
              target="_blank"
              className="size-14 rounded-full border border-white p-2 bg-white/30 flex justify-center items-center  cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <Mail className="text-white" />
            </Link>
            <Link
              href="https://wa.me/+18687094135?text=Hola, estoy interesado en un tour"
              target="_blank"
              className="size-14 rounded-full border border-white p-2 bg-white/30 flex justify-center items-center  cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <WhatsAppIcon className="h-6 w-6 " />
            </Link>
            <Link
              href="https://www.youtube.com/@4kadventures1"
              target="_blank"
              className="size-14 rounded-full border border-white p-2 bg-white/30 flex justify-center items-center  cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <Youtube className="text-white " />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between w-full flex-col md:flex-row gap-4 md:mt-0">
          <div className="flex items-start gap-4 md:w-3/4 flex-col ">
            <Link
              href="/destination"
              className="bg-white text-black flex justify-between py-2 items-center gap-4 px-4 rounded-full cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <p className="text-xl font-medium">{t("hero.cta")}</p>
              <div className="rounded-full bg-neutral-900 text-white p-3">
                <ArrowUpRight className="size-6" />
              </div>
            </Link>
          </div>
          <p className="text-gray-50 text-lg  text-center md:text-start md:w-2/3 p-3 bg-black/60 rounded-xl">
            {t("hero.subtitle")}
          </p>
        </div>
      </div>
    </div>
  );
}
