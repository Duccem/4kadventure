import Image from "next/image"

export default function DestinationsSection() {
    return (
        <section className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
            <div className="space-y-2 mb-8">
                <div className="text-sm text-muted-foreground uppercase tracking-wide">[Destinations]</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                    Una mezcla única de aventura,
                    <br />
                    cultura y maravillas naturales
                </h2>
                <p className="text-muted-foreground max-w-[600px]">
                    Descubra una fusión de aventura, cultura y belleza escénica en nuestros diversos destinos, 
                    ofreciendo experiencias inolvidables en cada paso.
                </p>
            </div>

            <div className="grid gap-6">
                {/* Main Feature Destination */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                    <Image
                        src="https://images.mnstatic.com/3d/a5/3da55769a0154b3e2d148151ae8ea4c3.jpg?width=2048"
                        alt="Playa Varadero"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 p-6 text-white">
                        <h3 className="text-2xl font-semibold mb-2">Playa Varadero</h3>
                        <p className="text-sm text-gray-200 max-w-[600px]">
                            Uno de esos destinos que cautivan a los visitantes con su belleza y tranquilidad, ideal para quienes buscan un refugio alejado del bullicio. A lo largo de la semana, los viajeros disfrutan de la serenidad que ofrece, perfecta para relajarse al sol y disfrutar de un buen libro.
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
                            <h3 className="text-xl font-semibold mb-2">Playa El Yaque</h3>
                            <p className="text-sm text-gray-200">
                                Un verdadero paraíso que encanta a quienes la visitan. Los viajeros destacan su azulado mar y el ambiente vibrante que se respira en el lugar.
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
                            <h3 className="text-xl font-semibold mb-2">El Tirano</h3>
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

