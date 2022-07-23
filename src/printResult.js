function printResult(result, winnerList){
    const resultTag = document.querySelector("#result");
    const recingWinnersTag = document.querySelector("#racing-winners");

    resultTag.innerText = result;
    recingWinnersTag.innerHTML = winnerList.join(", ");
}

export default printResult;
