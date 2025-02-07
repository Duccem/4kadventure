import { query } from "./strapi";

export async function getTours() {
  return await query("tours");
}
