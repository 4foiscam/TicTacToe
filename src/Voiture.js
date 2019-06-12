import React from "react";


// Création d'une classe voiture
// extends : On hérite de la classe component définie dans React
class Voiture extends React.Component{
    //attributs

    //methodes
    constructor(){
        super();  // Il prend le comportement du composant parent, execution du constructor qui est defini dans react.component

        // initialisation avec state
        this.state={color:"rouge"};
    }
    render(){
        // return <h2>Coucou, je suis {this.state.brand}, de couleur {this.state.color}, appartenant à {this.state.owner} et de plaque {this.state.id}</h2>
        return <h2>Coucou, je suis {this.props.brand}, de couleur {this.props.color}, appartenant à {this.props.owner} et de plaque {this.props.id}</h2>
    }
}

export default Voiture;