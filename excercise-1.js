/**
 * @author Rokop, Luke (lrokop14@gmail.com)
 * @version 0.0.1
 * @summary Excercise 1 || created 11-15-19
 *@todo
 */
"use strict";
const Prompt = require ('readline-sync');

let lotNumber, bedrooms, bathrooms, cars, total;
const BASE = 50000;
const BED_PRICE = 17000;
const BATH_PRICE = 12500;
const CAR_PRICE = 6000;
function main(){
    setLotNumber();
    setBedrooms();
    setBathrooms();
    setCars();
    setTotal();
}
main();

function setLotNumber() {
    lotNumber = prompt.question('/n What is your lot number?')
}

function setBedrooms() {
    bedrooms = prompt.question('/n How many bedrooms are in your house?')
}

function setBathrooms() {
    bathrooms = prompt.question('/n How many bathrooms are in your house?')
}

function setCars () {
    cars = prompt.question('/n How many cars can fit in your garage?')
}

function setTotal (){
    total = BASE + (BED_PRICE * bedrooms) + (BATH_PRICE * bathrooms) + (CAR_PRICE * cars);
    console.log(`Your total is ${total}`)
}