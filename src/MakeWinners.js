export function MakeWinners(carInfoList){
    let maxCount = 0;
    let winners = [];
    for(const key in carInfoList){
        const nowCount = carInfoList[key]['roadCount'];
        if(maxCount == nowCount){
            winners.push(key);
        }
        else if(maxCount < nowCount){
            maxCount = nowCount;
            winners = [key];
        }
    }
    return winners;
}   