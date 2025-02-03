import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 md:py-16 lg:py-24 border-t-[1px] border-border py-10 md:pt-16 overflow-hidden md:max-h-[820px]">
      <div className="">
        <div className="flex justify-between items-center border-border border-b-[1px] pb-10 md:pb-16 mb-12">
          <div className='w-1/2'>
            <h3 className='mb-6 text-xl font-bold leading-tight text-black md:text-6xl lg:text-5xl'>
              Explore Nature's
              <span className="text-gray-400"> Wonders with Expert Guidance</span>
            </h3>
          </div>

          <div className="font-normal md:text-2xl text-right">
            <p>Av Aldonza Manrique</p>
            <p>Nueva Esparta</p>
            <p>(+58) 404-532-4213</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>©2025 4KADVENTURE. </p>
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
