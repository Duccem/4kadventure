import { query } from "./strapi";

export async function getTours() {
  return query("tours?populate=image").then(async (res) => {
    return await res.data;
  });
}
