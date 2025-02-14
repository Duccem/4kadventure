"use server";

import { query } from "../lib/api/strapi";

export async function getDestinationId(id: number) {
    const queryString = `destinations?populate=*&filters[id]=${id}`;
    const data = await query(queryString);

    return data.data;
}
