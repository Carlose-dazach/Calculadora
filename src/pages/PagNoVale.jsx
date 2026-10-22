import { Link } from 'react-router-dom';

export function PagNoVale(){
    return(
        <div>
            <h1>Error 404 - Página no encontrada</h1>
            <Link to={"/"}>ir al Home</Link> {/* CORREGIDO: apuntaba a pagina2 */}
        </div>
    );
}
