import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import ListaLukes from '../pages/ListaLukes';
import Cadastrar from '../pages/Cadastrar';
import NotFound from '../pages/NotFound';
import ListaAdministrar from '../pages/ListaAdministrar';
import Editar from '../pages/Editar';
 


const Root = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <ListaLukes />} />
                <Route path="/administrar/cadastrar" element={ <Cadastrar />} />
                <Route path="/administrar" element={ <ListaAdministrar />} />
                <Route path="/administrar/editar/:id" element={ <Editar />} />
                <Route path="*" element={ <NotFound />} />
            </Routes>
        </Router>
    );
}

export default Root;