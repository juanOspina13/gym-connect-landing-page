import { useState } from "react";
import FondoLunes from '../assets/lunes.png';
import FondoMartes from '../assets/martes.png';
import FondoMiercoles from '../assets/miercoles.png';
import FondoJueves from '../assets/jueves.png';
import FondoViernes from '../assets/viernes.png';
import FondoSabado from '../assets/sabado.png';
interface IDiaEntreno {
    fondo: string;
    titulo: string;
}
const Entrenamientos = () => {
    const [entrenos, setEntrenos] = useState([
        {
            fondo: FondoLunes,
            titulo: 'lunes',
            id: 'lunes',
        },
        {
            fondo: FondoMartes,
            titulo: 'martes',
            id: 'martes',
        },
        {
            fondo: FondoMiercoles,
            titulo: 'miercoles',
            id: 'miercoles',
        },
        {
            fondo: FondoJueves,
            titulo: 'jueves',
            id: 'jueves',
        },
        {
            fondo: FondoViernes,
            titulo: 'viernes',
            id: 'viernes',
        },
        {
            fondo: FondoSabado,
            titulo: 'sabado',
            id: 'sabado',
        }
    ])
    return (<div className="entrenamientos w-full flex flex-col items-center">
        <h1 className="title">
            Entrenamientos</h1>
        <div className="dia-entreno-container w-full flex gap-6">
            {entrenos.map(entreno => {
                return (<div className="dia-entreno flex w-1/6 h-64" style={{ backgroundImage: `url(${entreno.fondo})` }} key={entreno.id}>
                    <div className="bg-[#F2FF04] flex justify-center items-center font-bold w-full h-12 text-black uppercase">
                    {entreno.titulo}
                    </div>
                    
                </div>)
            })}
        </div>
    </div>)
}

export default Entrenamientos;