const container = document.querySelector(".container");
const setNumberOfsquares = document.querySelector(".setNumberOfGrids");
const paintColor = document.querySelector(".paintColor");

const paintBlack = document.querySelector(".paintBlack");
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


const gridElements = document.querySelectorAll(".grid-element");

function addGridHover(color = "black") {
    const gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach((gridElement) => {
        gridElement.addEventListener("mouseenter", () => {
            changeCurrentColorField(gridElement.style.color);
            gridElement.style.backgroundColor = color;
        });
    });
};
addGridHover();

paintBlack.addEventListener("click", ()=>{
    addGridHover();
});

setNumberOfsquares.addEventListener("click", () => {
    let userSquares = +prompt("how many squares per side do you want?");
    deleteGrid();
    createGrid(userSquares);
    addGridHover();
});

function getRandomRGBValue() {
    let r = Math.floor(Math.random() * 257);
    let g = Math.floor(Math.random() * 257);
    let b = Math.floor(Math.random() * 257);
    return `rgb(${r},${g},${b})`;
}
const paintRGB = document.querySelector(".paintRGB");

paintRGB.addEventListener("click", () => {
    gridElements.forEach((gridElement) => {
        gridElement.addEventListener("mouseenter", () => {
            gridElement.style.backgroundColor = getRandomRGBValue();
            changeCurrentColorField(gridElement.style.backgroundColor);
        });
    });
});

function changeCurrentColorField(color){
    paintColor.style.backgroundColor = color;
};