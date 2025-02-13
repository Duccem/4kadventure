import { query } from "./strapi";

export async function getDestination() {
  return await query("destination");
}
