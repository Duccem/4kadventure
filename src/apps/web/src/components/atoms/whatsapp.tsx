import React from "react";
import WhatsAppIcon from "../icons/whatsapp";
import Link from "next/link";

const Whatsapp = () => {
  return (
    <Link
      href={"https://wa.me/+18687094135?text=Hola, estoy interesado en un tour"}
      target="_blank"
      className="fixed size-16 bg-green-500 rounded-full bottom-2 right-2 z-10 flex justify-center items-center hover:-translate-x-1 hover:-translate-y-1 transition-transform"
    >
      <WhatsAppIcon className="size-10" />
    </Link>
  );
};

export default Whatsapp;
