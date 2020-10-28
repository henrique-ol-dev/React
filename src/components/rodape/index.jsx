//mesma coisa que o using EntitiyFrameworkCore
import React from 'react';
import './index.css';

//Criada uma função pois somente renderiza somente html
function Rodape() {
    return(
        <footer className= 'background'>
            <h1>Senai Informatica 132</h1>
        </footer>
    )
}

//Deixa o webComponents visivel para outros webComponents
export default Rodape