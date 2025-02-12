import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@4k/ui/components/ui/carousel';
import image from '@/src/assets/hero.jpg';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Users } from 'lucide-react';
import { getI18n } from '../locales/server';
const Next = async () => {
  const t = await getI18n();
  return (
    <div className="min-h-screen py-10 px-16 space-y-8">
      <p className="text-6xl font-medium md:w-1/3">
        Next Destinations in 2025
      </p>
      <p className="text-2xl font-light md:w-1/3">
        Discover the next destinations that we will be exploring in 2025. We are
      </p>
      <div className=''>
        <Carousel className='mt-32'>
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col md:flex-row items-start justify-between  gap-3">
                  <div className='md:w-1/2 rounded-xl overflow-hidden'>
                    <img src={image.src} alt="" />
                  </div>
                  <div className='md:w-1/2 flex flex-col gap-4 md:px-8'>
                    <p className='text-4xl font-medium'>
                      Los Roques, Venezuela
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla quam velit, vulputate eu pharetra nec, mattis ac
                      neque.
                    </p>
                    <div className='flex items-center gap-4'>
                      <Calendar className='size-6' />
                      <p className='text-xl'>
                        2025-12-12
                      </p>
                    </div>
                    <p className='text-2xl font-medium'>
                      $50 - $100
                    </p>
                    <div className='flex items-center gap-4'>
                      <Users className='size-6' />
                      <p className='text-xl'>
                        20/50 spots left
                      </p>
                    </div>
                    <div className='w-fit'>
                      <Link
                        href={'/destination'}
                        className="bg-white text-black flex justify-between py-2 items-center gap-4 px-4 rounded-full cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all border border-black">
                        <p className="text-xl font-medium">{t("hero.cta")}</p>
                        <div className="rounded-full bg-neutral-900 text-white p-3">
                          <ArrowUpRight className="size-6" />
                        </div>
                      </Link>
                    </div>

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

export default Next;
