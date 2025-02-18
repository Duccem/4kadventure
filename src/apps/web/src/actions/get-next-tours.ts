"use server";

import { query } from "../lib/api/strapi";
import { format } from "date-fns";

export async function getNextTours(locale: string = "en") {
  const queryString = `tours?populate=*&filter[Date][$gt]=${format(new Date(), "yyyy-MM-dd")}&sort=Date:asc&pagination[pageSize]=3&locale=${locale}`;
  const data = await query(queryString);

  return data.data;
}
