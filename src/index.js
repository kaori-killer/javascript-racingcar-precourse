import { MoveCar } from "./MoveCar.js";
import { MakeResult } from "MakeResult.js";
import { printReault } from "./printReault.js";

function Car(name, num) {
  let carList = {}
  for(let i = 0; i < name.length; i++){
    carList[name[i]] = '';
  }

  let result = "📄 실행 결과";
  for(let i = 0; i < num; i++){
    carList = MoveCar(carList, name);
    result += MakeResult(carList, result);  
  }

  printResult(carList, result);
}

function printWinners(){
  
}

Car(['A', 'B', 'C', 'D', 'E'], 5);