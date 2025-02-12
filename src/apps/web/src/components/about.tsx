import React from 'react';
import { Separator } from '@4k/ui/components/ui/separator';
import trinidad from '@/src/assets/trinidad.jpg';

const About = () => {
  return (
    <div className='bg-white min-h-screen w-full px-16 py-12'>
      <div className='flex flex-col md:flex-row justify-between gap-4 items-start'>
        <div className='flex  items-center gap-3 flex-1 w-full md:w-1/2'>
          <Separator className='bg-black w-1/3 hidden md:block' />
          <p className='text-4xl font-bold text-black text-center md:text-left max-md:w-full'>
            INTRODUCTION
          </p>
        </div>
        <div className='flex flex-col items-center md:items-start justify-center gap-3 h-full md:w-1/2'>
          <p className='text-lg text-black text-center md:text-left'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos similique praesentium impedit delectus excepturi sequi dolore corporis odit incidunt cupiditate. Magnam beatae dolorum quia veritatis error corrupti sint cumque illum!, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur ea magnam eius perferendis?
          </p>
          <div className='aspect-video w-full overflow-hidden rounded-2xl '>
            <img src={trinidad.src} alt="" className='object-contain w-full' />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-24">
        <div className="space-y-2">
          <h3 className="text-4xl font-bold">95%</h3>
          <p className="text-muted-foreground">Satisfaction Rate</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-4xl font-bold">50+</h3>
          <p className="text-muted-foreground">Guided Tours Annually</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-4xl font-bold">20+</h3>
          <p className="text-muted-foreground">Destinations</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-4xl font-bold">300+</h3>
          <p className="text-muted-foreground">Positive reviews</p>
        </div>
      </div>
    </div>
  );
}

export default About;
