import React from 'react';
import { RichText } from '../rich-text';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@4k/ui/components/ui/carousel';

interface CardProps {
    imageUrl: string;
    description: string;
    index: number;
}

const Card: React.FC<CardProps> = ({ imageUrl, description, index }) => {
    return (


        <div>
            <div className="rounded-lg overflow-hidden shadow-md relative h-[750px]">
                <Carousel >
                    <CarouselContent>
                        <CarouselItem key={index}>
                            <img src={imageUrl} alt="Card Image" className="w-full h-[450px] object-cover" style={{ imageRendering: 'pixelated' }} />
                            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center p-2">

                                {/* <button className="bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100">&lt;</button>
                                <button className="bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100">&gt;</button> */}
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>


                <div className="flex flex-wrap text-justify bg-white mx-4 pt-4 ">
                    <RichText content={description} />
                </div>
            </div>
        </div>
    );
};

export default Card;