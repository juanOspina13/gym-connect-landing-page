import "./Intro.css";
import LogoHeader from "../assets/logoHeader.png";
import { Parallax } from "react-scroll-parallax";
const Intro = () => {
  return (
    <div className="flex flex-col justify-center h-screen intro-container items-center">
      <div className="card w-4/5 flex">
        <Parallax className="flex" speed={-20}>
          <div className="card-logo bg-black w-1/3 flex justify-center items-center p-4">
            <img className="max-w-[250px]" src={LogoHeader} alt="logoHeader" />
          </div>
          <div className="card-content w-2/3 pl-8 pr-8 pt-16 pb-16">
            Potencia tu centro fitness, acércate más a tus clientes y mejora su
            experiencia de reserva. Mantén tu comunidad conectada y empieza a
            monetizar tus entrenamientos online. $130,000 COP / Mensual. Sin
            instalaciones. Sin cobros de licencias. Soporte en Colombia.
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Intro;
