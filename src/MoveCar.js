export function MoveCar(carList, name){
    for(let i = 0; i < name.length; i++){
        const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
        if (RANDOM_NUMBER < 4){
          continue;
        }
        carList[name[i]]['roadStatus'] += '-'
        carList[name[i]]['roadCount'] += 1
      }
    return carList
  }