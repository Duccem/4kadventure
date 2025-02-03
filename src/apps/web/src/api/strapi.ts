export function query(url: string) {
  return fetch(`${process.env.NEXT_PUBLIC_STRAPI_HOST_URL}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => console.error(error));
}
