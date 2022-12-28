//Importar módulos
import React from 'react';
import ReactDOM from 'react-dom';

//Importar componentes
import Componente01 from './componente01';
import Componente02 from './componente01';

//Componente do arquivo indexcomp.js
class Principal extends React.Component{
    render(){
        return(
            <div>
            <Componente01 />
            <Componente02 />
            </div>
        );
    }
}


//Render
ReactDOM.render(<Principal />, document.getElementById('root'));