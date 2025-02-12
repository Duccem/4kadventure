"use client";
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import testimonials from "./utils/testimonials"
import { cn } from "@4k/ui/lib/utils"

export default function TestimonialSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? (testimonials.length - 1)/3 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === (testimonials.length - 1)/3 ? 0 : prev + 1));
    };

    const getNumberOfDots = () => {
        return Math.ceil(testimonials.length / 2); // Ajusta esta lógica según el número de secciones que tengas
    };

    return (

        <section className="py-16 px-4">
            <div className="container mx-auto">
                <h2 className="text-center text-gray-600 text-3xl md:text-4xl font-medium mb-12">What Our Guests Have Said</h2>

                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-[#0B4B3C] hover:text-[#0B4B3C]/80 z-10"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-8 w-8" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-[#0B4B3C] hover:text-[#0B4B3C]/80 z-10"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-8 w-8" />
                    </button>

                    {/* Testimonials */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-1/2 flex-shrink-0 px-4">
                                    <div className="bg-[#E6E6FA] rounded-xl text-[#4A4A4A] p-8 h-full">
                                        <blockquote className="mb-6 text-lg">{testimonial.text}</blockquote>
                                        <div className="text-sm">
                                            <p className="font-semibold">
                                                {testimonial.author} - {testimonial.date}
                                            </p>
                                            <p className="text-[#4A4A4A]/80">{testimonial.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: getNumberOfDots() }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index * 2)} // Ajusta según tus necesidades
                                className={cn(
                                    "w-2 h-2 rounded-full transition-colors",
                                    currentSlide === index ? "bg-[#9a9aad]" : "bg-gray-300",
                                )}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}