export function query(url: string) {
  return fetch(`${process.env.STRAPI_HOST_URL}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
  }).then((res) => res.json());
}
