import { useState, useEffect } from 'react';
import { CrudForm } from './CrudForm';
import { CrudTable } from './CrudTable';

export const CrudApp = () => {
    // Variable de estado para el manejo de los datos de los equipos
    const [equipos, setEquipos] = useState([]);

    // Este useEffect sirve para llamar la url y escucha un arreglo vacio
    useEffect(() => {
        fetch("https://stunning-dollop-r499j94qr7pj25wv-3004.app.github.dev/equipos")
            .then((Response) => Response.json())
            .then((data) => {
                setEquipos(data);
            });
    }, []);

    return (
        <div>
            <h1>Crud de de Equipos de futbol</h1>
            {/* Formulario para cargar datos */}
            <CrudForm />
            <CrudTable equipos={equipos} />
        </div>
    );
};