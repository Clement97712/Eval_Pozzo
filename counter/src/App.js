import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
/*
Créer un compteur, avec une valeur de départ initialisée à 1.

Contraintes:
Si la valeur du compteur est égale et/ ou supérieur à 10 afficher WIN à la place de la valeur du compteur.
La valeur du compteur ne peut pas être inférieure à 0.
  */


  state={
    compteur:1,
    resultat:1
  }
    
  isPlus=()=>{
      let isCompteur =this.state.compteur;
      if(isCompteur>=9){
        this.setState({
          compteur:isCompteur+1,
          resultat:"Win"

        })
      }
      else{
        this.setState({
          compteur:isCompteur+1,
          resultat:isCompteur+1
        })
      }
  }


  isMoins=()=>{
    let isCompteur =this.state.compteur;
      if(isCompteur<=0){
        this.setState({
          compteur:0,
          resultat:0

        })
      }
      else{
        if(isCompteur>10){
        this.setState({
          compteur:isCompteur-1,
          resultat:"Win"

        })
      }
      else{
        this.setState({
          compteur:isCompteur-1,
          resultat:isCompteur-1

        })
      }
        }
      }
  

 

  render() {
    console.log(this.state.compteur);
    return (
      <div className="App">
        <h3>Exo: Compteur</h3>
        <p>Resultat compteur: {this.state.resultat}</p>
        <button className="bouton" onClick={this.isPlus}>Plus</button>
        <button  className="bouton" onClick={this.isMoins}>Moins</button>
      </div>
    );
  }
}

export default App;
