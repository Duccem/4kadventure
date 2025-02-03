"use client";
import { getTours } from "@/src/api/tour";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function ToursSection() {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    getTours().then((res) => {
      setTours(res);
    });
  }, []);

  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold  mb-4">Proximos Tours</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour: any) => (
          <div
            key={tour.id}
            className="group relative rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Imagen */}
            <img
              src={`${process.env.NEXT_PUBLIC_STRAPI_HOST_URL}${tour.image[0].url}`}
              alt={tour.title}
              className="w-full h-[400px] object-cover"
            />

            {/* Título siempre visible */}
            <div className="absolute bottom-6 left-4 flex items-center gap-2">
              <MapPin className="w-7 h-7 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
              <h3 className="text-2xl font-extrabold text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {tour.title}
              </h3>
            </div>
            {/* Overlay con efecto hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-lime-500/90 via-lime-800/70 to-transparent translate-y-1/2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                <div className="text-gray-200">
                  <BlocksRenderer content={tour.description} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
