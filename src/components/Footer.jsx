import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Footer = () => {
  return (
    <footer className="bg-neutral h-1/6 ">
      <div className="flex justify-evenly">
        <div className=" flex flex-col w-1/3  ml-32 py-10">
          <Image alt="logo" src="/images/logo.png" width={200} height={200} />
          <p>
            Somos un vivero con compromiso ambiental, social y económico.
            Realizamos proyectos de agricultura urbana y paisajes en la ciudad.
          </p>
        </div>
        <div className="py-10 flex flex-col w-1/3  ml-40">
          <h3>Links</h3>
          <ul>
            <li>
              <Link href="#">Sobre mí</Link>
            </li>
            <li>
              <Link href="#">Servicios</Link>
            </li>
            <li>
              <Link href="#">Productos</Link>
            </li>
            <li>
              <Link href="#">Actividades</Link>
            </li>
            <li>
              <Link href="#">Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-1/3 py-10 items-start gap-y-2 ">
          <h3>Contacto</h3>
          <p>Lunes a Viernes 16:30 - 20:00 hs</p>
          <div className="flex items-center gap-2">
            <HiOutlineMail />
            <a href="mailto:eltomillomza@gmail.com"> eltomillomza@gmail.com</a>
          </div>
          <div className="flex gap-10">
            <FaFacebookSquare />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>
      </div>
      <div className="bg-primary text-neutral flex justify-between px-20 h-20 items-center ">
        <span>@2024 eltomillo</span>
        <span>Todos los derechos reservados</span>
      </div>
    </footer>
  );
};

export default Footer;
