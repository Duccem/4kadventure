"use server";

import { query } from "../lib/api/strapi";

export async function getDestinationId(id: string) {
  const queryString = `tours/${id}?populate=*`;
  const data = await query(queryString);

  return data.data;
}
