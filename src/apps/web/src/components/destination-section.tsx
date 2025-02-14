import Image from "next/image";
import tirano from "@/src/assets/tirano.jpg";
import { ArrowUpRight } from "lucide-react";
import { getI18n } from "../locales/server";
import Link from "next/link";

export default async function DestinationsSection() {
  const t = await getI18n();
  return (
    <section className="mx-auto px-8 md:px-16 py-12 ">
      <div className="space-y-2 mb-8">
        <div className="text-sm text-muted-foreground uppercase tracking-wide">
          [{t("destinations.label")}]
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
          {t("destinations.title")}
        </h2>
        <p className="text-muted-foreground max-w-[600px]">
          {t("destinations.subtitle")}
        </p>
      </div>

      <div className="grid gap-2 grid-cols-1 md:grid-cols-3">
        {/* Main Feature Destination */}
        <div className="relative max-md:aspect-[4/3] overflow-hidden rounded-2xl col-span-1 md:col-span-2 h-full">
          <Image
            src="https://images.mnstatic.com/3d/a5/3da55769a0154b3e2d148151ae8ea4c3.jpg?width=2048"
            alt="Varadero Beach"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 p-6 text-white flex justify-between items-center w-full">
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                {t("destinations.images.1.title")}
              </h3>
              <p className="text-sm text-gray-200 max-w-[600px]">
                {t("destinations.images.1.description")}
              </p>
            </div>
            <Link
              href={"/destination"}
              className="hidden md:flex bg-white text-black justify-between w-[200px] py-2 items-center gap-4 px-4 rounded-full cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <p className="text-xl font-medium">{t("destinations.cta")}</p>
              <div className="rounded-full bg-neutral-900 text-white p-3">
                <ArrowUpRight className="size-6" />
              </div>
            </Link>
          </div>
        </div>
        <div className="grid-cols-1 grid col-span-1 gap-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl col-span-1">
            <Image
              src="https://images.mnstatic.com/02/8c/028c171401d2190d96da95053139ae77.jpg?width=2048"
              alt="Mossy Mountain Hillside"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">
                {t("destinations.images.2.title")}
              </h3>
              <p className="text-sm text-gray-200">
                {t("destinations.images.2.description")}
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl col-span-1 ">
            <Image
              src={tirano}
              alt="Reynisfjara Black Sand Beach"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">
                {t("destinations.images.3.title")}
              </h3>
              <p className="text-sm text-gray-200">
                {t("destinations.images.3.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
