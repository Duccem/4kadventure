"use server";

import { query } from "../lib/api/strapi";
import { format } from "date-fns";

export async function getNextTours() {
  const queryString = `tours?populate=*&filter[Date][$gt]=${format(new Date(), "yyyy-MM-dd")}&sort=Date:asc&pagination[pageSize]=3`;
  const data = await query(queryString);

  return data.data;
}
