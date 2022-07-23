import MoveCar from "./MoveCar.js";
import MakeRoadStatus from "./MakeRoadStatus.js";
import FindWinners from "./FindWinners.js";
import printResult from "./printResult.js";

function Car(carNamesList, num) {
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
    const winnerList = FindWinners(carInfoList);
    printResult(roadStatusResult, winnerList);
}

export default Car;