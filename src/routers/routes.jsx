import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importar las páginas a entrelazar 
import { Pagina1 } from '../pages/Pagina1';
import { Pagina2 } from '../pages/Pagina2';
import { Categorias } from '../pages/Categorias';
import { Contacto } from '../pages/Contacto';
import { PagNoVale } from '../pages/PagNoVale';
import { Nav } from '../components/Nav'; // CORREGIDO: apuntaba mal a components

export function MyRoutes(){
    return(
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Pagina1 />} />
                <Route path='/pagina2' element={<Pagina2 />} />
                <Route path='/categorias' element={<Categorias />} />
                <Route path='/contacto' element={<Contacto />} />
                {/* CORREGIDO: Se asigna la página de error correspondiente */}
                <Route path='*' element={<PagNoVale />} />
            </Routes>
        </BrowserRouter>
    );
}
