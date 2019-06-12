import React from "react";
import Voiture from "./Voiture";

class Garage extends React.Component{

    //attributs


    //methods
    render(){
        const def="grise";
        const voit = {color:"grise", brand:"une voiture random",owner:"none", id:"XXXXXX"};
        //on ouvre des parentheses pour injecter de l'html via l'annotation JSX et on execute la variable dans les {}
        //C'est ici que l'on défini le contenue html affichable a l'appel de la balise <Garage />> dans l'index.js
        return(
            <div>
                <h1>Quelles sont les voitures que j'ai dans mon garage ?</h1>
                <Voiture color="verte" brand="une mustang" owner="Sylvain" id="N7894W2"/><br/>
                <Voiture color="rouge" brand="un 4x4 moche" owner="J-P" id="W5684F3"/><br/>
                <Voiture color="bleue" brand="une ferrari" owner="Pierre" id="J58RC1"/><br/>
                <Voiture color="jaune" brand="une clio" owner="Mira" id="H4548L5"/><br/>
                <Voiture color={voit.color} brand={voit.brand} owner={voit.owner} id={voit.id}/>
            </div>
        );
    }
}

export default Garage;