import { Link } from 'react-router-dom';

export function Pagina1(){ // CORREGIDO: Inicial en mayúscula
    return(
        <div>
            <h1>Estoy en el Home</h1>
            <Link to={"/pagina2"}>ir a la página 2</Link>
        </div>
    );
}
