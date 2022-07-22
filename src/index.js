import { MoveCar } from "./MoveCar.js";
import { MakeRoadStatus } from "./MakeRoadStatus.js";
import { printRoadStatus } from "./printRoadStatus.js";
import { MakeWinners } from "./MakeWinners.js";
import { PrintWinners } from "./PrintWinners.js";

function Car(name, num) {
  let carList = {}
  for(let i = 0; i < name.length; i++){
    carList[name[i]] = { 
      roadStatus: '',
      roadCount: 0,
    }
  }
  let roadStatusresult = "";
  for(let i = 0; i < num; i++){
    carList = MoveCar(carList, name);
    roadStatusresult += MakeRoadStatus(carList);  
  }
  printRoadStatus(carList, result);
  const WinnerList = MakeWinners(carList);
  PrintWinners(WinnerList);
}

Car(['A', 'B', 'C', 'D', 'E'], 5);
