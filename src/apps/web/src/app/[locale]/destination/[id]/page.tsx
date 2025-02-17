import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@4k/ui/components/ui/carousel";
import { getDestinationId } from "@/src/actions/get-destination-id";
import { RichText } from "@/src/components/rich-text";
import { ArrowUpRight, Calendar, Users } from "lucide-react";
import { getI18n } from "@/src/locales/server";
import Link from "next/link";

interface params {
  params: Promise<{ id: string }>;
}

export default async function destinationInfo({ params }: params) {
  const t = await getI18n();
  const id = (await params)?.id;
  const data = await getDestinationId(id);
  return (
    <div className="">
      <div className="py-32 px-16 font-bold text-5xl ">
        <p className="text-6xl font-extrabold ">{data.Destination}</p>
      </div>
      <div className="grid grid-cols-2 gap-2 px-16">
        <div className="flex flex-col gap-4">
          <div className="prose">
            <RichText content={data.Description} />
          </div>
          <div className=" w-full flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Calendar className="size-8" />
              <p className="text-2xl">{data.Date}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="size-8 text-3xl font-medium">$ </p>
              <p className="text-3xl font-medium">{data.Price}</p>
            </div>
            <div className="flex items-center gap-4">
              <Users className="size-8" />
              <p className="text-2xl">{data.Spots} spots available</p>
            </div>
            <div className="flex items-center w-fit mt-4">
              <Link
                href={`/destination/${id}/book`}
                className="bg-white text-black flex justify-between py-2 items-center gap-4 px-4 rounded-full cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all border border-black"
              >
                <p className="text-xl font-medium">{t("next.cta")}</p>
                <div className="rounded-full bg-neutral-900 text-white p-3">
                  <ArrowUpRight className="size-6" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Carousel className="">
          <CarouselContent className=" pb-8">
            {data.Fotos.map((foto: any, index: any) => (
              <CarouselItem key={index} className="">
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={`${foto.url}`}
                      alt={data.Title}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                      style={{ aspectRatio: "16/9" }}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
