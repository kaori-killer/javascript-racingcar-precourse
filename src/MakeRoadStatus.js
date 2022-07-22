export function MakeRoadStatus(carInfoList){
    let roadStatusResult = ''
    for(const key in carInfoList){
        roadStatusResult += `${key}: ${carInfoList[key]['roadStatus']}\n`;
    }
    return roadStatusResult + "\n";
}
