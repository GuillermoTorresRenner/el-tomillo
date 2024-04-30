"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  const [headerBGImage, setHeaderBGImage] = useState();
  const [headerBanner, setHeaderBanner] = useState();
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    switch (path) {
      case "/":
        setHeaderBGImage("/images/navbar/bg_img_inicio.png");
        setIsHome(true);
        break;

      case "/sobremi":
        setHeaderBGImage("/images/navbar/bg_img_sobre.png");
        setHeaderBanner("Sobre mi");
        setIsHome(false);
        break;

      case "/servicios":
        setHeaderBGImage("/images/navbar/bg_img_servicios.png");
        setHeaderBanner("Servicios");
        setIsHome(false);
        break;

      case "/recursos":
        setHeaderBGImage("/images/navbar/bg_img_recursos.png");
        setHeaderBanner("Recursos");
        setIsHome(false);
        break;

      case "/experiencias":
        setHeaderBGImage("/images/navbar/bg_img_experiencias.png");
        setHeaderBanner("Experiencias y Talleres");
        setIsHome(false);
        break;

      default:
        setHeaderBGImage("/images/navbar/bg_img_sobre.png");
        setIsHome(false);
    }
  }, [path]);

  const navClasses1 =
    "absolute top-0 w-full flex justify-between items-start md:items-center p-6 min-h-24 bg-primary md:bg-black bg-opacity-100 md:bg-opacity-45 backdrop-blur-sm backdrop-filter drop-shadow-xl";
  const navClasses2 =
    "absolute top-0 w-full flex justify-between items-start md:items-center p-6 min-h-24 bg-neutral md:bg-black bg-opacity-100 md:bg-opacity-45 backdrop-blur-sm backdrop-filter drop-shadow-xl";

  const listClasses1 = "flex flex-col md:flex-row items-center md:items-center";
  const listClasses2 =
    "hidden md:flex flex-col md:flex-row items-center md:items-center";

  const linkClasses =
    "text-caption text-white hover:underline underline-offset-8";

  const linkButtonClasses =
    "flex justify-center items-center border border-1 rounded-lg px-6 py-2 hover:border-primary hover:bg-secondary text-white text-caption hover:text-black";

  const open_menu_icon = "/images/navbar/nav_menu_icon_open.png";
  const close_menu_icon = "/images/navbar/nav_menu_icon_close.png";

  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full " id="navbar">
      <div>
        <div className="block sm:hidden w-full h-[90px]" />
        <div className="hidden sm:block">
          <Image
            className="brightness-50"
            src={headerBGImage}
            width={2000}
            height={90}
            alt="Background header"
          />
        </div>
      </div>

      {isHome ? (
        <div className="absolute top-1/5 md:top-80 w-full h-full">
          <h2 className="text-white text-center">Conexion con la naturaleza</h2>
          <h2 className="text-white text-center">al ritmo de la ciudad</h2>
        </div>
      ) : (
        <div className="absolute top-28 hidden sm:block md:top-44 w-full h-full">
          <h2 className="text-white text-center">{headerBanner}</h2>
        </div>
      )}

      <nav className={isOpen ? navClasses1 : navClasses2}>
        {/* En vista desktop el logo es de color blanco  */}
        <Link className="hidden md:block relative mx-50" href="/">
          <Image
            src={"/images/navbar/el_tomillo_header_img.png"}
            width={90}
            height={90}
            alt="El Tomillo logo"
          />
        </Link>

        {/* En vista mobile cambia de color segun la visibilidad del menu */}
        <Link className="block md:hidden relative mx-50" href="/">
          <Image
            src={
              isOpen
                ? "/images/navbar/el_tomillo_header_img.png"
                : "/images/navbar/el_tomillo_header_img_green.png"
            }
            width={90}
            height={90}
            alt="El Tomillo logo"
          />
        </Link>

        <div>
          <ul className={isOpen ? listClasses1 : listClasses2}>
            <li className="mx-4 my-2">
              <Link href={"/sobremi"} className={linkClasses}>
                Sobre mi
              </Link>
            </li>

            <li className="mx-4 my-2">
              <Link href="/servicios" className={linkClasses}>
                Servicios
              </Link>
            </li>

            <li className="mx-4 my-2">
              <Link href="/experiencias" className={linkClasses}>
                Experiencia y Talleres
              </Link>
            </li>
            <li className="mx-4 my-2">
              <Link href="/recursos" className={linkClasses}>
                Recursos
              </Link>
            </li>

            <li className="mx-4 my-2">
              <Link href="#" className={linkButtonClasses}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div className="block md:hidden">
          <button
            type="button"
            className="bg-[#EAE3C000] hover:bg-[#24292F]/90 rounded-lg text-sm px-.5 py-.5 dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
            onClick={() => {
              toggleVisibility();
            }}
          >
            <Image
              src={isOpen ? close_menu_icon : open_menu_icon}
              alt="menu_icon"
              width={40}
              height={40}
            />
          </button>
        </div>
      </nav>
    </div>
  );
}
