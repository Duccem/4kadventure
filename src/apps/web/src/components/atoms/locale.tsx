'use client'
import React from 'react';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@4k/ui/components/ui/select';
import { useChangeLocale, useCurrentLocale } from '@/src/locales/client';

const Locale = () => {
  const changeLocale = useChangeLocale()
  const currentLocale = useCurrentLocale()
  return (
    <Select defaultValue='en' onValueChange={(v) => changeLocale(v)} value={currentLocale}>
      <SelectTrigger className="w-fit bg-transparent border-none  focus:ring-0 focus:ring-transparent focus:outline-none hover:bg-neutral-700 hover:text-white">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en" className='cursor-pointer hover:bg-black/50'>EN</SelectItem>
        <SelectItem value="es">ES</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default Locale;
