const container = document.querySelector(".container");

function createGrid(){
    function createRow(n){
        const row = document.createElement("div");
        row.classList.add("flex-row");
        for(let i=0; i<n; i++){
            let div = document.createElement("div");
            div.classList.add("grid-element");
            row.appendChild(div);
        }
        return row;
    };

    for(let i=0;i<16;i++){
        container.appendChild(createRow(16));
    };
};
createGrid();