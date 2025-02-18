import React, { Suspense } from "react";
import CardDestination from "@/src/components/card-destination";

import ToursFilter from "@/src/components/tours-filter";
import { loadSearchParams } from "./search-params";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<any>;
}) {
  const { startDate, endDate } = await loadSearchParams(searchParams);

  return (
    <>
      <div className="min-h-[75vh] bg-hero-tours flex justify-start items-center px-16">
        <div className="text-white">
          <h1 className="text-5xl md:text-8xl font-extrabold">
            Discover the world with us
          </h1>
          <p className="text-4xl font-light">
            Travel to the most beautiful places in the world
          </p>
        </div>
      </div>
      <div className="min-h-screen py-10 px-16 space-y-8 ">
        <div className="mt-12 ml-2 px-2">
          <p className="text-6xl font-medium text-center md:text-start">
            Next tours
          </p>
        </div>
        <ToursFilter />
        <div className="flex flex-row justify-center  rounded-xl mt-8">
          <Suspense key={startDate} fallback={<div>Loading...</div>}>
            <CardDestination startDate={startDate} endDate={endDate} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
