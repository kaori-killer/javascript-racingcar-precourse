import { MoveCar } from "./MoveCar.js";
import { MakeResult } from "./MakeResult.js";
import { printRoadStatus } from "./printRoadStatus.js";
import { printWinners } from "./printWinners.js";

function Car(name, num) {
  let carList = {}
  for(let i = 0; i < name.length; i++){
    carList[name[i]] = { 
      roadStatus: '',
      count: 0,
    }
  }
  let result = "";
  for(let i = 0; i < num; i++){
    carList = MoveCar(carList, name);
    result += MakeResult(carList);  
  }
  printRoadStatus(carList, result);
  printWinners(carList);
}

Car(['A', 'B', 'C', 'D', 'E'], 5);
