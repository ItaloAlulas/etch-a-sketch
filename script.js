// Grid default size (16x16)
let gridSize = 16;

// Container where the buttons are grouped
const buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("buttonsContainer");
document.body.append(buttonsContainer);

// Cleaner button
const gridCleaner = document.createElement("button");
gridCleaner.textContent = "Clean"
gridCleaner.classList.add("gridCleaner");
buttonsContainer.append(gridCleaner);

gridCleaner.addEventListener("click", () => {
    const allDivColumns = document.querySelectorAll(".divColumn");
    allDivColumns.forEach(cell => {
        cell.style.background = "white";
    })
});

// Set New Grid button
const setGrid = document.createElement("button");
setGrid.textContent = "Set a New Grid";
setGrid.classList.add("setGrid");
buttonsContainer.append(setGrid);

setGrid.addEventListener("click", () => {
    gridSize = parseInt(prompt("Insert an integer number between 1 and 100: "));

    if (gridSize < 1 || gridSize > 100 || isNaN(gridSize) === true) {
        alert("Invalid number");
        gridSize = 16;

    } else {
        createGrid();
    }
});

// On-Off grid lines button
const gridLines = document.createElement("button");
gridLines.textContent = "Grid Lines: On";
gridLines.classList.add("gridLines");
buttonsContainer.append(gridLines);

let gridKey = true;

gridLines.addEventListener("click", () => {
    const AllDivColumns = document.querySelectorAll(".divColumn");

    if (gridKey === true) {
        AllDivColumns.forEach(cell => {
            cell.style.border = "none";
        })
        gridKey = false;

    } else {
        AllDivColumns.forEach(cell => {
            cell.style.border = "1px solid black";
        })
        gridKey = true;
    }
});

// Container with the grid squares
const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");
document.body.appendChild(gridContainer);

// Grid elements (squares)
function createGrid() {
    gridContainer.innerHTML = "";
    
    for (let i = 1; i <= gridSize; i++) {
        const divRow = document.createElement("div");
            divRow.classList.add("divRow", `divRow${i}`, "gridElement");
            gridContainer.appendChild(divRow);

        for (let j = 1; j <= gridSize; j++) {
            const divColumn = document.createElement("div");
            divColumn.classList.add("divColumn", `divColumn${j}`, "gridElement");

            let cellSize = 650 / gridSize;
            divColumn.style.width = `${cellSize}px`;
            divColumn.style.height = `${cellSize}px`;

            divColumn.addEventListener("mouseover", () => {
                divColumn.style.background = "purple";
            })

            divRow.appendChild(divColumn);
        }
    }
}
// Generates the first grid
createGrid();