import { Calendar, Users } from "lucide-react";
import Link from "next/link";
import { getTours } from "@/src/actions/get-tours";

const CardDestination = async ({
  endDate,
  startDate,
}: {
  startDate: string;
  endDate: string;
}) => {
  const destinations = await getTours(startDate, endDate);
  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6 ">
        {destinations.data.map((destination: any, index: any) => (
          <Link
            href={`/destination/${destination.documentId}`}
            className="p-4 border rounded-lg cursor-pointer"
            key={index}
          >
            <div className="items-center rounded-xl">
              <div className="rounded-lg overflow-hidden">
                <img src={destination.Fotos[0].url} alt="" />
              </div>
              <p className="font-bold mb-4 text-2xl">
                {destination.Destination}
              </p>
              <div className="flex items-center gap-4">
                <Calendar className="size-6" />
                <p className="text-xl">{destination.Date}</p>
              </div>
              <div className="flex items-center gap-4">
                <Users className="size-6" />
                <p className="text-xl">{destination.Spots} spots available</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CardDestination;
