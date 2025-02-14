import { RichText } from "./rich-text";
import Card from "./ui/card";

const CardDestination = async ({ destinations }: { destinations: any }) => {
  return (
    <div className="grid grid-cols-3 gap-6 ">
      {destinations.data.map((destination: any, index: any) => (
        <div className="py-12" key={index}>
          <h1 className="font-bold mb-4 text-2xl">{destination.Title}</h1>
          <div className="items-center rounded-xl">
            <Card
              imageUrl={`${process.env.STRAPI_HOST_URL}${destination.Fotos[0].url}`}
              description={destination.Description}
              index={index}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDestination;
