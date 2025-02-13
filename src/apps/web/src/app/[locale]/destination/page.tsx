import React from 'react';
import CardDestination from "@/src/components/card-destination";
import { getDestinations } from '@/src/actions/get-destinations';

export default async function Page() {
  const destinations = await getDestinations();
  return (
    <div className='min-h-screen py-10 px-16 space-y-8 '>
      <div className='mt-12 ml-2 px-2'>
      <p className='text-6xl font-medium'>
        Destinations
      </p>
      </div>
      <div className='flex flex-row justify-center p-8 rounded-xl mt-8'>
        <CardDestination destinations={destinations}/>
      </div>
    </div>
  );
}
