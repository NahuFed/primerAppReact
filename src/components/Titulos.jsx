// rscgit add 

import React from 'react';

const Titulos = ({tituloNuevo,estadoNuevo}) => {
    return (
        <div>
        <h1>Ladrillitos</h1>
         {/* comentario dentro del html */}
        <h2>{tituloNuevo} : {estadoNuevo?'es verdadero': 'es falso'}</h2>
        </div>
    );
};

export default Titulos;