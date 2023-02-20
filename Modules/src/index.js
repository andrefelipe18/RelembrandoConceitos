//IMPORTANDO MODULOS COM COMMONJS
const Planet = require('./planet'); //commonJS
const SolarSystem = require('./solar_system'); //commonJS
const Moment = require('moment'); //commonJS

let terra = new Planet("Terra", 510100000);
terra.rotate();

let marte = new Planet("Marte", 144800000);

SolarSystem.planets.push(terra);
SolarSystem.planets.push(marte);
     
console.log(SolarSystem.planets);

SolarSystem.planets.forEach(element => {
    console.log(element.nome, element.area);
});


console.log(Moment().format('MMMM Do YYYY, h:mm:ss a'));
/*-----------------------------------------------------------------*/ 
console.log("-------------------------------------------------")
/*-----------------------------------------------------------------*/ 
//IMPORTANDO MODULOS COM ES6
import Spaceship from './spaceship'; //ES6
import armamentos from './armaments'; //ES6

const nave = new Spaceship("Nave", "Capitão", armamentos.laser, armamentos.misseis);

nave.armamentos.forEach(element => {
    console.log(element);
});
nave.defesas.forEach(i => {
    console.log(i);
})
/*-----------------------------------------------------------------*/ 
console.log("-------------------------------------------------")
/*-----------------------------------------------------------------*/ 
//IMPORTANDO MODULOS NOMEADOS COM ES6
import { lasers, steelDefenses } from './defenses'; //ES6

lasers.forEach(elemento => {
    console.log("Lasers",elemento);
});
steelDefenses.forEach(elemento => {
    console.log("steeldefenses",elemento);
});










