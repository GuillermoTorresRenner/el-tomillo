import React from "react";
import Image from "next/image";
import Link from "next/link";

import Img from "../../public/images/img_404.png";

const NotFound = () => {
  return (
    <main className="bg-secondary flex justify-center items-center px-10">
      <div className="">
        <h1 className="font-urbanist text-black text-8xl pl-20 pt-20">404</h1>
        <h2 className="font-urbanist font-normal text-black text-4xl">
          Parece que algo nos falta...
        </h2>
        <h3 className="font-urbanist text-black textxl">
          Navega en estos links para encontrar lo que buscas:
        </h3>
        <ul className="mt-5 mb-20">
          <li>
            <Link href="/">Sobre mí</Link>
          </li>
          <li>
            <Link href="/servicios">Servicios</Link>
          </li>
          <li>
            <Link href="/productos">Productos</Link>
          </li>
          <li>
            <Link href="/actividades">Actividades</Link>
          </li>
        </ul>
      </div>
      <Image
        src={Img}
        alt={"404 picture"}
        className="sm:w-1/4 sm:h-1/2  mb-32"
      />
    </main>
  );
};

export default NotFound;
