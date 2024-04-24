import React from "react";
import Card from "../../components/recuros/Card";
import Img1 from "../../../public/images/recursos/image_card_1.png";
import Img2 from "../../../public/images/recursos/image_card_2.png";
import Img3 from "../../../public/images/recursos/image_card_3.png";

const Recursos = () => {
  return (
    <main className="mx-5 sm:mx-10">
      <h1 className="mt-5 text-center ">
        Descarga recursos gratis para nuca dejar de aprender
      </h1>

      <div className="flex justify-around border-2 rounded-2xl border-primary p-2  text-primary my-5">
        <div>Experiencias y talleres</div>
        <div>|</div>
        <div className="font-bold">Recursos online</div>
      </div>
      <div className="">
        <Card
          src={Img1}
          alt={"Cómo comenzar a compostar"}
          title={"Cómo comenzar a compostar"}
          text={"lorem ipsum dolor sit amet, consectetur adip"}
          pdf={
            "https://drive.google.com/file/d/1aykN5OTwBPPaLq1DM2x6HCFIMl0FhpkH/view?usp=sharing"
          }
        />
        <Card
          src={Img2}
          alt={"Huerta Fácil"}
          title={"Huerta Fácil"}
          text={"lorem ipsum dolor sit amet, consectetur adip"}
          pdf={
            "https://drive.google.com/file/d/1vKqMqUGDtJjYDO-izeQrV3OoNwBngUUU/view?usp=sharing"
          }
        />
        <Card
          src={Img3}
          alt={"Cambio de estación en la huerta"}
          title={"Cambio de estación en la huerta"}
          text={"lorem ipsum dolor sit amet, consectetur adip"}
          pdf={
            "https://drive.google.com/file/d/1Za-juAet17FrE57a691VflSEWeerWGA3/view?usp=sharing"
          }
        />
      </div>
    </main>
  );
};

export default Recursos;
