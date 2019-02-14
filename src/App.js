import React, { Component } from 'react';
import './App.css';
import chocolate from './chocolate.jpeg';
import pomme from './pomme.jpeg';

// Number of person
// ----------------

let personCount = 4;

// Ingredient
// ----------

 let ingedient = 'pommes';
//let ingedient = 'chocolat';

let img = chocolate;

// Amount of ingredient
// --------------------

let amountOfIngredient;
let ingredientPreparation;

if (ingedient==='pommes') {
  amountOfIngredient = 150.5;
  ingredientPreparation = 'Couper les pommes en dés';
  img = pomme;
} else {
  amountOfIngredient = 25;
  ingredientPreparation = 'Faire fondre le chocolat dans une casserole';
  img = chocolate;
}

let pluralMark;
if (personCount > 1) {
  pluralMark = 's';
} else {
  pluralMark = '';
}

class App extends Component {

  render() {
    return (
      <div>
        <h1>Gâteau à base de</h1> <img src={img} className="recette-logo" alt="logo" />
        <h2>Pour {personCount} personne{pluralMark} :</h2>
        <h3>Ingrédients</h3>
        <ul>
          <li>{amountOfIngredient * personCount}g de {ingedient}</li>
          <li>{25 * personCount}ml d'huile</li>
          <li>{Math.round(0.4 * personCount)} oeufs</li>
          <li>{6 * personCount}g sucre</li>
        </ul>
        <h3>Préparation</h3>
        <p>
          Préchauffer le four à 180°.
        </p>
        <p>
          Mélanger l'huile, les oeufs et le sucre. Battre pour obtenir la pâte.
           {ingredientPreparation}. Incorporer et battre à nouveau.
        </p>
      </div>
    );
  }

}

export default App;
