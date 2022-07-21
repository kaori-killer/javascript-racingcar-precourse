export function MakeResult(carList, result){
    for(const KEY in carList){
        result += KEY + ":" + carList[KEY];
    }
    return result;
}
