"use server";

import { query } from "../lib/api/strapi";

export async function getTours(
  startDate?: string,
  endDate?: string,
  locale: string = "en",
) {
  let filter = ``;
  if (startDate) {
    filter += `&filters[Date][$gt]=${startDate}`;
  }

  if (endDate) {
    filter += `&filters[Date][$lt]=${endDate}`;
  }
  const queryString = `tours?populate=*&sort=Date:asc${filter}&locale=${locale}`;
  const data = await query(queryString);
  return data;
}
