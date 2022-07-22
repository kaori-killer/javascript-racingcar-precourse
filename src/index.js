import { Car } from "./Car.js";

const carNamesForm = document.querySelector("#car-names-form");
const carNamesInput = document.querySelector("#car-names-input");
const racingCountForm = document.querySelector("#racing-count-form");
const racingCountInput = document.querySelector("#racing-count-input");
let carNamesList = [];

function carNamesBtnSubmit(event){
  event.preventDefault();
  carNamesList = carNamesInput.value.split(",");
}

function racingCountBtnSubmit(event){
  event.preventDefault();
  const racingCount = parseInt(racingCountInput.value);
  Car(carNamesList, racingCount);
}

carNamesForm.addEventListener("submit", carNamesBtnSubmit);
racingCountForm.addEventListener("submit", racingCountBtnSubmit)