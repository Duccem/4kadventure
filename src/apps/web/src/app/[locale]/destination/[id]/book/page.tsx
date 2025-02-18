import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params)?.id;
  return <div>{id} booking page</div>;
};

export default Page;
