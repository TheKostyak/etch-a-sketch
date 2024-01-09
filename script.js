const container = document.querySelector(".container");
const setNumberOfsquares = document.querySelector(".setNumberOfGrids");
function createGrid(n) {
    function createRow(n) {
        const row = document.createElement("div");
        row.classList.add("flex-row");
        for (let i = 0; i < n; i++) {
            let div = document.createElement("div");
            div.classList.add("grid-element");
            row.appendChild(div);
        }
        return row;
    };

    for (let i = 0; i < n; i++) {
        container.appendChild(createRow(n));
    };
};

function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
createGrid(16);

function addGridHover() {
    const gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach((gridElement) => {
        gridElement.addEventListener("mousemove", () => {
            gridElement.style.backgroundColor = "black";
        })
    });
};
addGridHover();

setNumberOfsquares.addEventListener("click", () => {
    let userSquares = +prompt("how many squares per side do you want?");
    deleteGrid();
    createGrid(userSquares);
    addGridHover();
});