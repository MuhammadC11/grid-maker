// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected = "white";
let table = document.getElementById("grid"); // get the table by id

window.onload = function () {
  document.getElementById("selectedColorId").value = "SELECT";
};
// Add a row

function addR() {
  if (numRows == 0) {
    numCols = 0; //reset the number of columns to 0 if there are no rows
  }
  numRows++; // increment the number of rows
  let row = table.insertRow(); // insert a new row at the end of the table

  // If there are no columns, add a column
  if (numCols === 0) {
    // if there are no columns
    numCols++; // increment the number of columns
    let cell = row.insertCell(0); // insert a new cell at the end of the row
    cell.onclick = function () {
      // add an event listener to the new cell
      cell.style.backgroundColor = colorSelected;
    };
  } else {
    for (let i = 0; i < table.rows[0].cells.length; i++) {
      // loop through the cells in the first row
      let cell = row.insertCell(i); // insert a new cell at the end of the row
      cell.onclick = function () {
        // add an event listener to the new cell
        cell.style.backgroundColor = colorSelected; // set the background color of the cell to the selected color
      };
    }
  }
  console.log(numRows); // log the number of rows
  console.log(numCols); // log the number of columns
}

// Add a column
function addC() {
  if (numCols == 0) {
    numRows = 0; //reset the number of rows to 0 if there are no columns
  }
  // add a new column to the table, first check if there are no rows, then add a row and a cell to that row but after that, it will keep adding cells to the existing rows thus adding a new column.
  numCols++; // increment the number of columns
  if (numRows === 0) {
    // if there are no rows at the beginning
    numRows++; // increment the number of rows
    let row = table.insertRow(); // insert a new row at the beginning of the table
    let cell = row.insertCell(); // insert a new cell at the end of the row
    cell.onclick = function () {
      // add an event listener to the new cell
      cell.style.backgroundColor = colorSelected; // set the background color of the cell to the selected color
    };
  } else {
    for (let i = 0; i < table.rows.length; i++) {
      // loop through the rows
      let cell = table.rows[i].insertCell(-1); // insert a new cell at the end of the row
      cell.onclick = function () {
        // add an event listener to the new cell
        cell.style.backgroundColor = colorSelected; // set the background color of the cell to the selected color
      };
    }
  }
}

// Remove a row
function removeR() {
  if (numRows === 0) {
    numCols = 0; //reset the number of columns to 0 if there are no rows
    alert("There are no rows to remove"); // if there are no rows, alert the user
    return;
  }

  // remove the last row from the table
  table.deleteRow(-1); // delete the last row from the table
  numRows--; // decrement the number of rows
}

// Remove a column
function removeC() {
  if (numCols === 0) {
    numRows = 0; //reset the number of rows to 0 if there are no columns
    alert("There are no columns to remove"); // if there are no columns, alert the user
    return;
  }

  // remove the last column from the table
  for (let i = 0; i < table.rows.length; i++) {
    // loop through the rows
    table.rows[i].deleteCell(-1); // delete the last cell from the row
  }
  numCols--; // decrement the number of columns
}

function selectColor() {
  // get the selected color from the dropdown, this function is called when the user selects a color from the dropdown list
  colorSelected = document.getElementById("selectedColorId").value; // get the selected colors value so its important to give the colors in the dropdown list the same value as their name
  console.log(colorSelected); // log the selected color
}

// Fill all uncolored cells
function fillU() {
  if (colorSelected === "SELECT") {
    // if no color is selected
    alert("Please select a color first"); // alert the user to select a color first
    return; // exit the function
  }
  let changed = false; // flag to track if any cells were changed

  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      // loop through the cells in each row
      if (table.rows[i].cells[j].style.backgroundColor === "") {
        // if the cell is not colored (i.e. its background color is empty)
        table.rows[i].cells[j].style.backgroundColor = colorSelected; // set the background color of the cell to the selected color
        changed = true; // a cell was changed so set the flag to true
      }
    }
  }

  if (!changed) {
    // if no cells were changed
    alert("All cells are already colored!"); // alert to inform the user that all cells are already colored
  }

  console.log("Fill All Uncolored");
}

// Fill all cells
function fillAll() {
  //fill all cells with the selected color regardless of their current color
  if (colorSelected === "SELECT") {
    // if no color is selected
    alert("Please select a color first"); // alert the user to select a color first
    return; // exit the function
  }
  for (let i = 0; i < table.rows.length; i++) {
    // loop through the rows in the table
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      // loop through the cells in each row of the table
      table.rows[i].cells[j].style.backgroundColor = colorSelected; // set the background color of the cell to the selected color, regardless of its current color
    }
  }
  console.log("Fill All"); // log the action
}

// Clear all cells
function clearAll() {
  if (numRows === 0 && numCols === 0) {
    alert("There are no cells to clear");
    return;
  }

  let cellsCleared = 0; // counter for the number of cells cleared

  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      if (table.rows[i].cells[j].style.backgroundColor !== "") {
        table.rows[i].cells[j].style.backgroundColor = "";
        cellsCleared++;
      }
    }
  }

  if (cellsCleared === 0) {
    alert("All cells are already cleared!");
  }

  console.log("Clear All");
}
