import Card from "@/components/experiencias/Card";
import React from "react";
import Img1 from "../../../public/images/experiencias/img_card_1.png";
import Img2 from "../../../public/images/experiencias/img_card_2.png";
import Img3 from "../../../public/images/experiencias/img_card_3.png";
import Img4 from "../../../public/images/experiencias/img_card_4.png";
import Img5 from "../../../public/images/experiencias/img_card_5.png";

function Experiencia() {
  return (
    <main className="mx-5 sm:mx-10">
      <h1 className="mt-5 text-center ">
        Vive una experiencia punica con nuestros talleres
      </h1>

      <div className="flex justify-around border-2 rounded-2xl border-primary p-2  text-primary my-5">
        <div className="font-bold">Experiencias y talleres</div>
        <div>|</div>
        <div>Recursos online</div>
      </div>
      <div className="sm:grid md:grid-cols-2 md:gap-2 mb-5">
        <Card
          src={Img1}
          alt={"La naturaleza en mí"}
          title={"La naturaleza en mí"}
          text={
            "Experiencia vivencial que busca generar un contexto externo y emocional permitiéndote re-conectar y vivenciar la naturaleza que somos."
          }
        />
        <Card
          src={Img2}
          alt={"Realiza una Kokedama"}
          title={"Realiza una Kokedama"}
          text={
            "Aprende a realizar una Kokedama desde cero, en el taller aprenderás el arte de tener tu planta en una maceta completamente natural."
          }
        />
        <Card
          src={Img3}
          alt={"Jardinería y huertas"}
          title={"Jardinería y huertas"}
          text={
            "Experiencia vivencial que busca generar un contexto externo y emocional permitiéndote re-conectar y vivenciar la naturaleza que somos."
          }
        />
        <Card
          src={Img4}
          alt={"Pintura de macetas"}
          title={"Pintura de macetas"}
          text={
            "Aprende a realizar una Kokedama desde cero, en el taller aprenderás el arte de tener tu planta en una maceta completamente natural."
          }
        />
        <Card
          src={Img5}
          alt={"Mosaiquismo"}
          title={"Mosaiquismo"}
          text={
            "Aprende a realizar una Kokedama desde cero, en el taller aprenderás el arte de tener tu planta en una maceta completamente natural."
          }
        />
      </div>
      <div className="flex justify-center mb-10 mt-5">
        <a
          href="#"
          className="bg-white border border-primary rounded-2xl py-2 px-4 w-auto max-w-xs text-center"
        >
          Consulta grilla de talleres disponibles
        </a>
      </div>
    </main>
  );
}
export default Experiencia;
