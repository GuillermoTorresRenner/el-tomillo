import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
const Footer = () => {
  return (
    <footer className="bg-neutral h-1/6 ">
      <div className="grid grid-cols-4">
        <div className=" flex flex-col   ml-32 py-10">
          <Image alt="logo" src="/images/logo.png" width={200} height={200} />
          <p>
            Somos un vivero con compromiso ambiental, social y económico.
            Realizamos proyectos de agricultura urbana y paisajes en la ciudad.
          </p>
        </div>
        <div className="py-10 flex flex-col w-1/4  ml-40">
          <h3>Links</h3>
          <ul>
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
            <li>
              <Link href="#">Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-1/4 py-10 items-start gap-y-2 ">
          <h3>Contacto</h3>

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

        <div className="px-10">
          <h3>Ubicación</h3>

          <div className="flex justify-center items-start gap-2 ">
            <GoLocation size={60} />
            <p>Dorrego 1496 Guaymallén, Mendoza, Argentina</p>
          </div>
          <div className="my-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d967.4691596649801!2d-68.82918511127046!3d-32.910865082893324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09435be0458f%3A0x4fd29179b16c884e!2sDorrego%201496%2C%20M5519%20Guaymall%C3%A9n%2C%20Mendoza%2C%20Argentina!5e0!3m2!1ses-419!2scl!4v1712905194214!5m2!1ses-419!2scl"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
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
