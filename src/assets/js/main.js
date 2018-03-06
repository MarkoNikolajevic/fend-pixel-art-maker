const grid = document.querySelector("#pixel-canvas");

// Create grid function
function makeGrid() {
  let height = document.querySelector("#input-height").value;
  let width = document.querySelector("#input-width").value;

  // For loop to create the grid
  for (let i = 0; i < height; i++) {
    let row = grid.insertRow(i);

    for (let j = 0; j < width; j++) {
      let cell = row.insertCell(j);

      // Colore cell on click
      cell.addEventListener("click", function() {
        cell.style.backgroundColor = document.querySelector("#colorPicker").value;
        cell.style.transition = "all 400ms ease-in-out";
      });
    }
  }
}

// Crate grid on click
document.querySelector("#create").addEventListener("click", function(e) {
  e.preventDefault();
  makeGrid();
  grid.classList.add("fadeIn");
});

// Remove grid on click
document.querySelector("#reset").addEventListener("click", function(e) {
  if (grid.firstChild) {
    grid.removeChild(grid.firstChild);
    grid.classList.remove("fadeIn");
  }
});
