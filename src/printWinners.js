function PrintWinners(WinnerList){
    const tag = document.querySelector("#racing-winners");
    tag.innerHTML = WinnerList.join(", ");
}

export default PrintWinners;