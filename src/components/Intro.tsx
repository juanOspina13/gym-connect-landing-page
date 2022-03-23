import './Intro.css'
import LogoHeader from "../assets/logoHeader.png";
const Intro = () => {
    return (
        <div className="intro-container flex justify-center">
            <div className="card w-4/5 flex">
                <div className="card-logo bg-black w-1/3 flex justify-center items-center p-4">
                    <img className="max-w-[120px]" src={LogoHeader} alt="logoHeader" />
                </div>
                <div className="card-content w-2/3 p-4">Potencia tu centro fitness, acércate más a tus clientes y mejora su experiencia de reserva. Mantén tu comunidad conectada y empieza a monetizar tus entrenamientos online. $130,000 COP / Mensual. Sin instalaciones. Sin cobros de licencias. Soporte en Colombia.
                </div>
            </div>
        </div>)
}

export default Intro;