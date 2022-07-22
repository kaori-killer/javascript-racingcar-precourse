export function MakeRoadStatus(carList){
    let roadStatusResult = ''
    for(const key in carList){
        roadStatusResult += `${key}: ${carList[key]['roadStatus']}\n`;
    }
    return roadStatusResult + "\n";
}
