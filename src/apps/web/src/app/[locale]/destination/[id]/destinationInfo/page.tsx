import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@4k/ui/components/ui/carousel';
import { getDestinationId } from "@/src/actions/get-destination-id";
import { RichText } from "@/src/components/rich-text";
import { ArrowUpRight, Calendar, Users } from 'lucide-react';
import { getI18n } from '@/src/locales/server';

interface params {
    params: Promise<{ id: string }>;
}

export default async function destinationInfo({ params }: params) {
    const t = await getI18n();
    const id = Number((await params)?.id);
    const data = await getDestinationId(id);

    console.log('data ', data);
    return (
        <div className=''>
            <div className="p-32 font-bold text-5xl ">
                <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{data[0].Title}</h1>
            </div>
            <div className='px-32'>
                <Carousel className="w-full max-w-full">
                    <CarouselContent className="w-full pb-8">
                        {data[0].Fotos.map((foto: any, index: any) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                        <img
                                            src={`${process.env.STRAPI_HOST_URL}${foto.url}`}
                                            alt={data[0].Title}
                                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                                            style={{ aspectRatio: '16/9' }}
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
            <div className='py-16 px-32 flex justify-center md:flex-row  '>
                <div className='rounded-xl border border-gray-300 flex md:flex-row flex-col justify-between items-center'>
                    <div className='py-16 px-32 md:w-1/2 w-full'>
                        <div className="prose max-w-none font-bold">
                            <RichText content={data[0].Description} />
                        </div>

                    </div>
                    <div className="border-l border-gray-300 h-full hidden md:block" />
                    <div className='md:w-1/2 w-full py-16 px-32'>
                        <div className='flex items-center gap-4'>
                            <Calendar className='size-8' />
                            <p className='text-2xl'>
                                {data[0].tour.Date}
                            </p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='size-8 text-3xl font-medium'>$ </p>
                            <p className='text-3xl font-medium'>
                                {data[0].tour.Price}
                            </p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Users className='size-8' />
                            <p className='text-2xl'>
                                {data[0].tour.Spots} spots available
                            </p>
                        </div>
                        <div className='flex items-center w-fit mt-4'>
                            <div
                                className="bg-white text-black flex justify-between py-2 items-center gap-4 px-4 rounded-full cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all border border-black">
                                <p className="text-xl font-medium">{t("next.cta")}</p>
                                <div className="rounded-full bg-neutral-900 text-white p-3">
                                    <ArrowUpRight className="size-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>

            </div>

        </div>
    );
}
