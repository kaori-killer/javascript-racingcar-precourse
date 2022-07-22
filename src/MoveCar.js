export function MoveCar(carInfoList){
    for(const key in  carInfoList){
        const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
        if (RANDOM_NUMBER < 4){
          continue;
        }
        carInfoList[key]['roadStatus'] += '-'
        carInfoList[key]['roadCount'] += 1
      }
    return carInfoList
  }