import Image from "next/image"
import tirano from '@/src/assets/tirano.jpg'
import { ArrowUpRight } from "lucide-react";

export default function DestinationsSection() {
    return (
        <section className="mx-auto px-16 py-12 ">
            <div className="space-y-2 mb-8">
                <div className="text-sm text-muted-foreground uppercase tracking-wide">[Destinations]</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                    A unique mixture of adventure,
                    <br />
                    Natural culture and wonders
                </h2>
                <p className="text-muted-foreground max-w-[600px]">
                    Discover a fusion of adventure, culture and scenic beauty in our various destinations, offering unforgettable experiences in each step.
                </p>
            </div>

            <div className="grid gap-2 grid-cols-1 md:grid-cols-3">
                {/* Main Feature Destination */}
                <div className="relative max-md:aspect-[4/3] overflow-hidden rounded-2xl col-span-1 md:col-span-2 h-full">
                    <Image
                        src="https://images.mnstatic.com/3d/a5/3da55769a0154b3e2d148151ae8ea4c3.jpg?width=2048"
                        alt="Varadero Beach"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 p-6 text-white flex justify-between items-center w-full">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Varadero Beach</h3>
                            <p className="text-sm text-gray-200 max-w-[600px]">
                                One of those destinations that captivate visitors with their beauty and tranquility, ideal for those looking for a shelter away from bustle. Throughout the week, travelers enjoy the serenity it offers, perfect to relax in the sun and enjoy a good book.
                            </p>
                        </div>
                        <div className="hidden md:flex bg-white text-black justify-between w-[200px] py-2 items-center gap-4 px-4 rounded-full cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all">
                            <p className="text-xl font-medium">Explore</p>
                            <div className="rounded-full bg-neutral-900 text-white p-3">
                                <ArrowUpRight className="size-6" />
                            </div>
                        </div>
                    </div>


                </div>
                <div className="grid-cols-1 grid col-span-1 gap-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl col-span-1">
                        <Image
                            src="https://images.mnstatic.com/02/8c/028c171401d2190d96da95053139ae77.jpg?width=2048"
                            alt="Mossy Mountain Hillside"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 p-6 text-white">
                            <h3 className="text-xl font-semibold mb-2">El Yaque Beach</h3>
                            <p className="text-sm text-gray-200">
                                A true paradise that loves those who visit it. Travelers highlight their bluish sea and the vibrant atmosphere that is breathed in the place.
                            </p>
                        </div>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl col-span-1 ">
                        <Image
                            src={tirano}
                            alt="Reynisfjara Black Sand Beach"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 p-6 text-white">
                            <h3 className="text-xl font-semibold mb-2">El Tirano beach</h3>
                            <p className="text-sm text-gray-200">
                                Es una playa que no deja indiferente a quienes la visitan. Su hermoso entorno, adornado por un sol radiante y aguas cristalinas, facilita un ambiente propicio para la vida económica y cultural local.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

