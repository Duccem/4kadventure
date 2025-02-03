import { MapPin } from "lucide-react";

const cards = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68",
    location: "Tour por Cubagua",
    title: "Playas Paradisíacas",
    description:
      "Descubre las cristalinas aguas y hermosas playas de esta isla histórica del Caribe.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6",
    location: "Aventura en Los Roques",
    title: "Archipiélago Tropical",
    description:
      "Explora uno de los paraísos más exclusivos del Caribe con sus aguas turquesas.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1559825481-12a05cc00344",
    location: "Isla de Margarita",
    title: "Perla del Caribe",
    description:
      "Vive la experiencia única de las mejores playas y la cultura vibrante de Margarita.",
  },
];

export default function ToursSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold  mb-4">Proximos Tours</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group relative rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Imagen */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[400px] object-cover"
            />

            {/* Título siempre visible */}
            <div className="absolute bottom-6 left-4 flex items-center gap-2">
              <MapPin className="w-7 h-7 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
              <h3 className="text-2xl font-extrabold text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {card.location}
              </h3>
            </div>
            {/* Overlay con efecto hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-lime-500/90 via-lime-800/70 to-transparent translate-y-1/2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-200">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
