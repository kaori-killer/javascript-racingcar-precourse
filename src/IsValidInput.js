export function IsValidInput(carNamesInputValue){
    const carNamesList = carNamesInputValue.split(",");
    let isValid = true;

    for(let i = 0; i < carNamesList.length; i++){
        if(carNamesList[i].length < 6)
            continue;
        
        isValid = false;
        alert("자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능합니다.");
    }
    return isValid;
}