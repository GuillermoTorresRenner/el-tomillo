"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const listClasses1 = "flex flex-col md:flex-row items-center md:items-start";
  const listClasses2 =
    "hidden md:flex flex-col md:flex-row items-center md:items-start";

  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full" id="navbar">
      <div>
        <Image
          src={"/images/bg_img.jpeg"}
          width={2000}
          height={90}
          alt="Background header"
        />
      </div>

      <nav className="absolute top-0 w-full flex justify-between items-start md:items-center p-6 min-h-24 bg-black bg-opacity-45 backdrop-blur-sm backdrop-filter drop-shadow-xl">
        <Link href="#">
          <Image
            src={"/images/eltomillo_header_img.svg"}
            width={70}
            height={70}
            alt="El Tomillo logo"
          />
        </Link>

        <div className="">
          <ul className={isOpen ? listClasses1 : listClasses2}>
            <li className="mx-4 my-2">
              <Link
                href={"/"}
                className="text-caption text-white hover:underline underline-offset-8"
              >
                Sobre mi
              </Link>
            </li>

            <li className="mx-4 my-2">
              <Link
                href="/servicios"
                className="text-caption text-white hover:underline underline-offset-8"
              >
                Servicios
              </Link>
            </li>

            <li className="mx-4 my-2">
              <Link
                href="/productos"
                className="text-caption text-white hover:underline underline-offset-8"
              >
                Productos
              </Link>
            </li>

            <li className="mx-4 my-2">
              <Link
                href="/actividades"
                className="text-caption text-white hover:underline underline-offset-8"
              >
                Actividades
              </Link>
            </li>

            <li className="mx-4 my-2">
              <a
                href="https://wa.me/5492615970583?text=Quiero%20saber%20más%del%Tomillo"
                target="_blank"
                className="flex justify-center items-center border border-1 rounded-lg px-6 py-2 hover:border-primary hover:bg-secondary text-white text-caption hover:text-black"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div className="block md:hidden">
          <button
            type="button"
            class="bg-[#24292F] hover:bg-[#24292F]/90 rounded-lg text-sm px-.5 py-.5 dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
            onClick={() => {
              toggleVisibility();
            }}
          >
            <Image
              src="/images/menu_icon.svg"
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
