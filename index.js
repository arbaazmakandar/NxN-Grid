/* <div class="row">
            <div id = "00" class="cell"></div>
            <div id = "01" class="cell"></div>
            <div id = "02" class="cell"></div>
          </div> */
const gridEvent = () => {
  let gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = "";
  let dimension = document.getElementById("number").value;

  for (let i = 0; i < dimension; i++) {
    let row = document.createElement("div");
    row.className = "row";

    for (let j = 0; j < dimension; j++) {
      let cell = document.createElement("div");
      cell.id = i.toString() + j;
      cell.className = "cell";
      row.appendChild(cell);
    }

    gameContainer.appendChild(row);
  }
};
