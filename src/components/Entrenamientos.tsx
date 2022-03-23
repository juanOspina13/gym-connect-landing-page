import { useState } from "react";
import FondoLunes from "../assets/lunes.png";
import FondoMartes from "../assets/martes.png";
import FondoMiercoles from "../assets/miercoles.png";
import FondoJueves from "../assets/jueves.png";
import FondoViernes from "../assets/viernes.png";
import FondoSabado from "../assets/sabado.png";
import "./Entrenamientos.css";
import { Parallax } from "react-scroll-parallax";
interface IDiaEntreno {
  fondo: string;
  titulo: string;
}
const Entrenamientos = () => {
  const [entrenos, setEntrenos] = useState([
    {
      fondo: FondoLunes,
      titulo: "lunes",
      id: "lunes",
    },
    {
      fondo: FondoMartes,
      titulo: "martes",
      id: "martes",
    },
    {
      fondo: FondoMiercoles,
      titulo: "miercoles",
      id: "miercoles",
    },
    {
      fondo: FondoJueves,
      titulo: "jueves",
      id: "jueves",
    },
    {
      fondo: FondoViernes,
      titulo: "viernes",
      id: "viernes",
    },
    {
      fondo: FondoSabado,
      titulo: "sabado",
      id: "sabado",
    },
  ]);
  return (
    <div className="h-screen entrenamientos-container w-full flex flex-col justify-center items-center h-screen">
      <div className="w-4/5 ">
      <Parallax className="flex flex-col items-center" speed={-20}>
      <h1 className="title">Entrenamientos</h1>
      <div className="dia-entreno-container w-full flex gap-6">
        {entrenos.map((entreno) => {
          return (
            <div
              className="dia-entreno flex w-1/6 h-64 relative"
              style={{ backgroundImage: `url(${entreno.fondo})` }}
              key={entreno.id}
            >
              <div className="bg-[#F2FF04] flex justify-center items-center font-bold w-full h-16 text-black uppercase absolute top-[68%]">
                {entreno.titulo}
              </div>
            </div>
          );
        })}
        </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Entrenamientos;
