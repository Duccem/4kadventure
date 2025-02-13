"use server";
import { query } from "../lib/api/strapi";

export async function getDestinations() {
    const data = await query("destinations?populate=*");
    return data;
}