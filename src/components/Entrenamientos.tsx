import { useState } from "react";

interface IDiaEntreno {
    fondo: string;
    titulo: string;
}
const Entrenamientos = () => {
    const [entrenos, setEntrenos] = useState([
        {
            fondo: '../assets/lunes.png',
            titulo: 'lunes',
            id: 'lunes',
        },
        {
            fondo: '../assets/martes.png',
            titulo: 'martes',
            id: 'martes',
        },
        {
            fondo: '../assets/miercoles.png',
            titulo: 'miercoles',
            id: 'miercoles',
        },
        {
            fondo: '../assets/jueves.png',
            titulo: 'jueves',
            id: 'jueves',
        },
        {
            fondo: '../assets/viernes.png',
            titulo: 'viernes',
            id: 'viernes',
        },
        {
            fondo: '../assets/sabado.png',
            titulo: 'sabado',
            id: 'sabado',
        }
    ])
    return (<div className="entrenamientos">
        <h1 className="title">
            Entrenamientos</h1>
        <div className="dia-entreno-container flex gap-4">
            {entrenos.map(entreno => {
                return (<div className="dia-entreno flex w-1/6" key={entreno.id}>
                    {entreno.titulo}
                </div>)
            })}
        </div>
    </div>)
}

export default Entrenamientos;