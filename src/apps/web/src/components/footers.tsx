import Link from 'next/link';
import logo from '@/src/assets/4k_logo.jpeg'
import { getI18n } from '../locales/server';

export default async function Footer() {
  const t = await getI18n();
  return (
    <footer className="px-8 md:px-16 md:py-16 lg:py-24  py-10 md:pt-16 overflow-hidden md:max-h-[820px]">
      <div className="">
        <div className="flex justify-between items-center border-border border-b-[1px] pb-10 md:pb-16 mb-12">
          <div className='w-1/2'>
            <h3 className='mb-6 text-xl font-bold leading-tight text-black md:text-6xl lg:text-5xl'>
              {t('footer.text1')}
              <span className="text-gray-400"> {t('footer.text2')}</span>
            </h3>
          </div>

          <div className="font-normal md:text-2xl text-right">
            <p>Venezuela</p>
            <p>Nueva Esparta</p>
            <p>(+58) 404-532-4213</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className='flex items-center gap-4'>
            <p>©2025 4KADVENTURE. </p>
            <div className='size-[100px] rounded-lg overflow-hidden'>
              <img src={logo.src} alt="" />
            </div>
          </div>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/terms" className="hover:text-gray-700">
              Terms & Conditions
            </Link>
            <span>|</span>
            <Link href="/privacy" className="hover:text-gray-700">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
