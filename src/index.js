import { Car } from "./Car.js";
import { IsValidInput } from "./IsValidInput.js";

const carNamesForm = document.querySelector("#car-names-form");
const carNamesInput = document.querySelector("#car-names-input");
const racingCountForm = document.querySelector("#racing-count-form");
const racingCountInput = document.querySelector("#racing-count-input");
let carNamesList = [];

function carNamesBtnSubmit(event){
  event.preventDefault();
  const carNamesInputValue = carNamesInput.value;
  carNamesList = IsValidInput(carNamesInput.value) ? carNamesInputValue.split(",") : carNamesInput.value = null;
}

function racingCountBtnSubmit(event){
  event.preventDefault();
  const racingCount = parseInt(racingCountInput.value);
  Car(carNamesList, racingCount);
}

carNamesForm.addEventListener("submit", carNamesBtnSubmit);
racingCountForm.addEventListener("submit", racingCountBtnSubmit)