import React from 'react';
import { Separator } from '@4k/ui/components/ui/separator';
import { Button } from '@4k/ui/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@4k/ui/components/ui/accordion';
import { ArrowUpRight } from 'lucide-react';
import trinidad from '@/src/assets/trinidad.jpg';

const Why = () => {
  return (
    <div className='bg-white min-h-screen px-16 py-12 space-y-12'>
      <div className='flex items-center gap-3 md:w-1/3'>
        <Separator className='w-1/3 bg-black' />
        <p className='text-4xl font-bold text-black'>
          WHY CHOOSE US
        </p>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between gap-5 w-full'>
        <p className='text-6xl font-bold text-black md:w-1/2'>
          <span className='text-neutral-700'>Unmatched</span> travel expertise at 4K <span className='text-neutral-700'>Adventure</span>
        </p>
        <Button className='bg-white text-black border border-black rounded-full hover:bg-black hover:text-white text-xl [&_svg]:size-6'>
          Learn more <ArrowUpRight />
        </Button>
      </div>
      <Separator></Separator>
      <div className='flex flex-col md:flex-row  items-start justify-between gap-3 w-full'>
        <div className='flex flex-col items-center md:items-start justify-center gap-3 h-full md:w-1/2'>
          <div className='aspect-video md:w-3/4 overflow-hidden rounded-2xl '>
            <img src={trinidad.src} alt="" className='object-contain w-full' />
          </div>
          <p className='text-lg text-black md:w-3/4 text-center md:text-left'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos similique praesentium impedit delectus excepturi sequi dolore corporis odit incidunt cupiditate.
          </p>

        </div>
        <div className='w-full md:w-1/2 h-full'>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className='py-2'>
              <AccordionTrigger className='text-2xl'>What kind of destination are included?</AccordionTrigger>
              <AccordionContent className='text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae alias eveniet nihil, debitis recusandae nesciunt neque assumenda, sit deserunt quo, similique laborum rem nisi magnam maxime sequi obcaecati perferendis minima!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className='py-2'>
              <AccordionTrigger className='text-2xl'>What is the cancellation policy?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas explicabo incidunt amet mollitia at. Consequatur eligendi dolor ex consectetur, omnis nulla sit nobis optio sequi nostrum fuga necessitatibus assumenda.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className='py-2'>
              <AccordionTrigger className='text-2xl'>What is the group size for tours?</AccordionTrigger>
              <AccordionContent>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore facere molestiae ratione sit doloremque harum amet, a tempora nisi ducimus aut assumenda nemo, sunt aperiam, pariatur voluptatem voluptatibus expedita natus.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className='py-2'>
              <AccordionTrigger className='text-2xl'>What is the refund policy?</AccordionTrigger>
              <AccordionContent>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore facere molestiae ratione sit doloremque harum amet, a tempora nisi ducimus aut assumenda nemo, sunt aperiam, pariatur voluptatem voluptatibus expedita natus.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Why;
