export function MakeWinners(carList){
    let maxCount = 0;
    let winners = [];
    for(const key in carList){
        const nowCount = carList[key]['roadCount'];
        if(maxCount == nowCount){
            winners.push(key);
        }
        else if(maxCount < nowCount){
            maxCount = nowCount;
            winners = [key];
        }
    }
    console.log(winners);
    return winners;
}   