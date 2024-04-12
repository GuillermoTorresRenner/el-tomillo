"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [windowDimension, setWindowDimension] = useState(false);
  const [navClasses, setNavClasses] = useState("w-full");
  //const [ navClasses, setNavClasses ] = useState("w-full justify-center items-center gap-x-8 space-x-4 flex-col lg:flex lg:flex-row")

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    let wh = 0;
    let ww = 0;

    if (windowDimension) {
      wh = windowDimension.innerHeight;
      ww = windowDimension.innerWidth;

      if (ww >= 768) {
        setIsMobile(false);
        if (isOpen) {
          setNavClasses(
            "flex justify-center items-center gap-x-8 space-x-4 flex-col lg:flex lg:flex-row"
          );
        } else {
          setNavClasses(
            "hidden justify-center items-center gap-x-8 space-x-4 flex-col lg:flex lg:flex-row"
          );
        }
      } else {
        setIsMobile(true);
        if (isOpen) {
          setNavClasses(
            "w-full py-2 mt-40 relative top-20 flex flex-col items-center justify-start bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter"
          );
        } else {
          setNavClasses(
            "hidden justify-center items-center gap-x-8 space-x-4 flex-col lg:flex lg:flex-row"
          );
        }
      }
    }
  }, [windowDimension, isOpen]);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav class="relative">
      <div class="">
        <Image
          src="/images/index_header_bg_img.webp"
          alt="header background image"
          width={2000}
          height={200}
        />
      </div>

      <div class="absolute top-0 bg-black bg-opacity-35 backdrop-blur-sm backdrop-filter shadow-lg px-8 flex justify-between items-center w-full h-20">
        <div className="">
          <a href="#">
            <Image
              src="/images/eltomillo_header_img.svg"
              alt="home link image"
              width={70}
              height={70}
            />
          </a>
        </div>

        <div className="relative flex w-full justify-end">
          <ul class={navClasses}>
            <li>
              <Link
                href={"#"}
                className="text-caption text-white hover:underline"
              >
                {" "}
                Sobre mi{" "}
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-caption text-white hover:underline"
              >
                {" "}
                Servicios{" "}
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-caption text-white hover:underline"
              >
                {" "}
                Productos{" "}
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-caption text-white hover:underline"
              >
                {" "}
                Actividades{" "}
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex justify-center items-center border border-1 rounded-lg px-6 py-2 hover:border-primary hover:bg-secondary text-white text-caption hover:text-black"
              >
                {" "}
                Contacto{" "}
              </Link>
            </li>
          </ul>
        </div>

        <div className="block lg:hidden">
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
      </div>
    </nav>
  );
}
