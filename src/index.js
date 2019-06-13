import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tick from "./Tick"
import Voiture from "./Voiture";
import Garage from "./Garage";
import Game from "./Game";
import Clock from "./Clock";
import * as serviceWorker from './serviceWorker';

//Syntaxe JSX - Javascript XML, elle nous permet d'écrire de l'html en React. C'est une simplification
// {execution de l'expression}

// const myelement= (<p>Coucou voici mon html {5+5}</p>);

//Sans syntax JSX     -----     Conseil : oubliez ça..

// const myelement2 = React.createElement("p",{}, 'Coucou voici mon html');


// function Tick2(){

//     const element=(
//         <div>
//             <h1>Heure locale</h1>
//             <h2>Il est actuellement {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('popo2'));
// }

//l'appelle à la fonction chaque seconde
// setInterval(Tick2, 1000);

ReactDOM.render(<Game />, document.getElementById('root'));
ReactDOM.render(<Clock />, document.getElementById('popo'));

//Ci dessous une manière d'appeler un composant à partir d'une fonction

// ReactDOM.render(myelement,document.getElementById("popo"))
// ReactDOM.render(<Garage color="rouge"/>,document.getElementById('popo'));






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
