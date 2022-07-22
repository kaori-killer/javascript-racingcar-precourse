import { MoveCar } from "./MoveCar.js";
import { MakeRoadStatus } from "./MakeRoadStatus.js";
import { printRoadStatus } from "./printRoadStatus.js";
import { MakeWinners } from "./MakeWinners.js";
import { PrintWinners } from "./PrintWinners.js";

export function Car(carNamesList, num) {
    let carInfoList = {}
    for(let i = 0; i < carNamesList.length; i++){
    carInfoList[carNamesList[i]] = { 
        roadStatus: '',
        roadCount: 0,
    }
}

    let roadStatusResult = "📄 실행 결과\n\n";
    for(let i = 0; i < num; i++){
    carInfoList = MoveCar(carInfoList, carNamesList);
    roadStatusResult += MakeRoadStatus(carInfoList);  
    }
    printRoadStatus(roadStatusResult);
    const WinnerList = MakeWinners(carInfoList);
    PrintWinners(WinnerList);
}