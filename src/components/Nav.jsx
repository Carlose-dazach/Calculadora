import { NavLink } from 'react-router-dom';
import './Nav.css';

export const Nav = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/pagina2'>Pagina2</NavLink></li>
                    <li><NavLink to='/categorias'>Categorias</NavLink></li>
                    <li><NavLink to='/contacto'>Contacto</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};
