export async function query(url: string) {
  const res = await fetch(`${process.env.STRAPI_HOST_URL}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
  });

  const data = await res.json();
  return data;
}
