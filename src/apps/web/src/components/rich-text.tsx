"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const RichText = ({ content }: { content: any }) => {
  return <BlocksRenderer content={content} />;
};
