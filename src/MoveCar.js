export function MoveCar(carList, name){
    for(let i = 0; i < name.length; i++){
        const RANDOM_NUM = MissionUtils.Random.pickNumberInRange(1, 9);
        if (RANDOM_NUM < 4){
          continue;
        }
        carList[name[i]]['roadStatus'] += '-'
        carList[name[i]]['count'] += 1
      }
    return carList
  }