"use server";

import { query } from "../lib/api/strapi";

export async function getTours(startDate?: string, endDate?: string) {
  let filter = ``;
  if (startDate) {
    filter += `&filters[Date][$gt]=${startDate}`;
  }

  if (endDate) {
    filter += `&filters[Date][$lt]=${endDate}`;
  }
  const queryString = `tours?populate=*&sort=Date:asc${filter}`;
  const data = await query(queryString);
  return data;
}
