import Image from "next/image"

export default function DestinationsSection() {
    return (
        <section className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
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

            <div className="grid gap-6">
                {/* Main Feature Destination */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                    <Image
                        src="https://images.mnstatic.com/3d/a5/3da55769a0154b3e2d148151ae8ea4c3.jpg?width=2048"
                        alt="Varadero Beach"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 p-6 text-white">
                        <h3 className="text-2xl font-semibold mb-2">Varadero Beach</h3>
                        <p className="text-sm text-gray-200 max-w-[600px]">
                            One of those destinations that captivate visitors with their beauty and tranquility, ideal for those looking for a shelter away from bustle. Throughout the week, travelers enjoy the serenity it offers, perfect to relax in the sun and enjoy a good book.
                        </p>
                    </div>
                </div>

                {/* Secondary Destinations Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Mossy Mountain */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
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

                    {/* Black Sand Beach */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                        <Image
                            src="https://images.mnstatic.com/86/01/860133c3100b106e3d2c95158c9e496f.jpg?width=2048"
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

