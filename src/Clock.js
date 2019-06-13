import React from "react";


class Clock extends React.Component{
    //Premiere fonction qui s'execute pour creer le composant ----> C'est celle qui le construit
    constructor(props){
        super(props);
        this.state={
            date: new Date()
        };
    }
    //La fonction qui affiche l'HTML sur l'écran.
    render(){
        return(
            <div>
                <h1>Heure locale</h1>
                <h2>Il est actuellement {new Date().toLocaleTimeString()}</h2>
            </div>
        )
    }

    //Une fois que l'affichage render a lieu, la fonction suivante s'execute directement
    componentDidMount(){
        this.timerID = setInterval(()=>this.tictac(),1000)
    }

    //Voici une fonction qui permet de mettre a jour la date dans l'état (this.state.date)
    //ATT: qui dit mise à jour de l'etat dit : setState
    tictac(){
        this.setState({
            date: new Date()
        });
    }

    //juste avant de finir le lifecycle et de quitter le composant, nous effacons le contenu de l'interval entre temps

    componentWillMount(){
        clearInterval(this.timerID);
    }

}

export default Clock;