"use server";

import { query } from "../lib/api/strapi";

export async function getTours() {
  const data = await query("tours?populate=*");
  return data;
}
