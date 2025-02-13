import React from 'react';
import { Separator } from '@4k/ui/components/ui/separator';
import { Button } from '@4k/ui/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@4k/ui/components/ui/accordion';
import { ArrowUpRight } from 'lucide-react';
import trinidad from '@/src/assets/trinidad.jpg';
import { getI18n } from '../locales/server';

const Why = async () => {
  const t = await getI18n();
  return (
    <div className='bg-white min-h-screen px-8 md:px-16 py-12 space-y-12'>
      <div className='flex items-center gap-3 md:w-1/3'>
        <Separator className='w-1/3 bg-black' />
        <p className='text-4xl font-bold text-black'>
          {t('why.label')}
        </p>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between gap-5 w-full'>
        <p className='text-4xl md:text-6xl font-bold text-black md:w-1/2'>
          {t('why.title')}
        </p>
        <Button className='bg-white text-black border border-black rounded-full hover:bg-black hover:text-white text-xl [&_svg]:size-6'>
          {t('why.cta')} <ArrowUpRight />
        </Button>
      </div>
      <Separator></Separator>
      <div className='flex flex-col md:flex-row  items-start justify-between gap-3 w-full'>
        <div className='flex flex-col items-center md:items-start justify-center gap-3 h-full md:w-1/2'>
          <div className='aspect-video md:w-3/4 overflow-hidden rounded-2xl '>
            <img src={trinidad.src} alt="" className='object-contain w-full' />
          </div>
          <p className='text-lg text-black md:w-3/4 text-center md:text-left'>
            {t('why.description')}
          </p>

        </div>
        <div className='w-full md:w-1/2 h-full'>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className='py-2'>
              <AccordionTrigger className='text-2xl text-left'>{t('why.questions.1.title')}</AccordionTrigger>
              <AccordionContent className='text-lg'>
                {t('why.questions.1.description')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className='py-2'>
              <AccordionTrigger className='text-2xl text-left'>{t('why.questions.2.title')}</AccordionTrigger>
              <AccordionContent>
                {t('why.questions.2.description')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className='py-2'>
              <AccordionTrigger className='text-2xl text-left'>{t('why.questions.3.title')}</AccordionTrigger>
              <AccordionContent>
                {t('why.questions.3.description')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className='py-2'>
              <AccordionTrigger className='text-2xl text-left'>{t('why.questions.4.title')}</AccordionTrigger>
              <AccordionContent>
                {t('why.questions.4.description')}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Why;
