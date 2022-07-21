function Car(name, num) {
  let carList = {}
  for(let i = 0; i < name.length; i++){
    carList[name[i]] = '';
  }

  for(let i = 0; i < num; i++){
    carList = MoveCar(carList, name);
    printNow(carList);  
  }

//  console.log(carList);
  printReault(carList);
}

function MoveCar(carList, name){
  for(let i = 0; i < name.length; i++){
      const RANDOM_NUM = MissionUtils.Random.pickNumberInRange(1, 9);
      if (RANDOM_NUM < 4){
        continue;
      }
      carList[name[i]] += '-'
  }
  return carList
}

function printNow(){

}

function printReault(){
  
}

Car(['A', 'B', 'C', 'D', 'E'], 5);