import { Link } from 'react-router-dom';

export function Pagina2(){ // CORREGIDO: Inicial en mayúscula
    return(
        <div>
            <h1>Estoy en Pagina 2</h1>
            <Link to={"/"}>ir al Home</Link>
        </div>
    );
}
