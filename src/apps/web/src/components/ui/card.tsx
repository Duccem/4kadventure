import { RichText } from "../rich-text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@4k/ui/components/ui/carousel";
import Link from "next/link";
interface CardProps {
  imageUrl: string;
  description: string;
  index: number;
  documentId: string;
}
export default async function Card({
  imageUrl,
  description,
  index,
  documentId,
}: CardProps) {
  return (
    <Link
      href={{
        pathname: `/destination/${documentId}`,
      }}
    >
      <div>
        <div className="rounded-lg overflow-hidden shadow-md relative h-[750px]">
          <Carousel>
            <CarouselContent>
              <CarouselItem key={index}>
                <div className="transition-transform transform hover:scale-110">
                  <img
                    src={imageUrl}
                    alt="Card Image"
                    className="w-full h-[450px] object-cover rounded-lg"
                    style={{ imageRendering: "pixelated" }}
                  />
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
    </Link>
  );
}
