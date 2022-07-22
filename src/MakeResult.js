export function MakeResult(carList){
    let result = ''
    for(const KEY in carList){
        result += `${KEY}: ${carList[KEY]['roadStatus']}\n`;
    }
    return result + "\n";
}
