'use client';

import { ChevronDown } from "lucide-react";
import { Button } from '@4k/ui/components/ui/button'
import Header from "./headers";

export default function HeroSection() {
    const backgroundImageUrl = "https://images.mnstatic.com/90/41/9041ea99332ba68e34149329ddc8ae81.jpg?width=2048";

    return (
   

            <div
                className="rounded-b-xl"
                style={{
                    backgroundImage: `url(${backgroundImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="container">
                    <Header />
                </div>
                <div className="flex container mx-auto px-4 py-12 ">
                    <div className="flex justify-between items-center p-8">
                        <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 pb-12 pt-32">
                            <div className="max-w-3xl">
                                <h1 className="mb-6 text-5xl font-bold leading-tight text-[#E6E6FA] md:text-6xl lg:text-7xl">
                                    Weaving Your Dreams into Unforgettable Adventures
                                </h1>
                                <div className="w-1/2">
                                    <p className="mb-8 max-w-xl text-lg text-white">
                                        Discover the captivating charm of the Wonders of the Caribbean, from impressive tropical landscapes to a vibrant culture, on an unforgettable journey through the Caribbean paradise.
                                    </p>
                                </div>

                                <Button size="lg" className="group flex items-center gap-2 bg-[#E6E6FA] rounded-xl text-black hover:bg-white font-bold">
                                    Booking Now
                                    <ChevronDown className="h-4 w-4 rotate-[-90deg] transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
}