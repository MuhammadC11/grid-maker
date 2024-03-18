// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

// Add a row
function addR() {
  // add a new row to the table
  let table = document.getElementById("grid"); // get the table by id
  let row = table.insertRow(table.rows.length); // insert a new row at the end of the table
  for (let i = 0; i < table.rows[0].cells.length; i++) {
    // loop through the cells in the first row
    let cell = row.insertCell(i); // insert a new cell in the new row
    cell.onclick = function () {
      // add an event listener to the new cell
      cell.style.backgroundColor = colorSelected; // set the background color of the cell to the selected color
    };
  }
  numRows++; // increment the number of rows
  numCols = table.rows[0].cells.length; // set the number of columns to the number of cells in the first row
  console.log(numRows); // log the number of rows
  console.log(numCols); // log the number of columns
}

// Add a column
function addC() {
  // add a new column to the table
  let table = document.getElementById("grid"); // get the table by id
  for (let i = 0; i < table.rows.length; i++) {
    // loop through the rows
    let cell = table.rows[i].insertCell(table.rows[i].cells.length); // insert a new cell at the end of each row
    cell.onclick = function () {
      // add an event listener to the new cell
      cell.style.backgroundColor = colorSelected; // set the background color of the cell to the selected color
    };
  }
  numCols++; // increment the number of columns
  numRows = table.rows.length; // set the number of rows to the number of rows in the table
  console.log(numRows); // log the number of rows
  console.log(numCols); // log the number of columns
}

// Remove a row
function removeR() {
  // remove the last row from the table
  let table = document.getElementById("grid"); // get the table by id
  table.deleteRow(table.rows.length - 1); // delete the last row from the table
  numRows--; // decrement the number of rows
  numCols = table.rows[0].cells.length; // set the number of columns to the number of cells in the first row
  console.log(numRows); // log the number of rows
  console.log(numCols); // log the number of columns
}

// Remove a column
function removeC() {
  // remove the last column from the table
  let table = document.getElementById("grid"); // get the table by id
  for (let i = 0; i < table.rows.length; i++) {
    // loop through the rows
    table.rows[i].deleteCell(table.rows[i].cells.length - 1); // delete the last cell from each row
  }
  numCols--; // decrement the number of columns
  numRows = table.rows.length; // set the number of rows to the number of rows in the table
  console.log(numRows); // log the number of rows
  console.log(numCols); // log the number of columns
}

function selectColor() {
  // get the selected color from the dropdown
  colorSelected = document.getElementById("selectedColorId").value;
  console.log(colorSelected); // log the selected color
}

// Fill all uncolored cells
function fillU() {
  // fill all uncolored cells with the selected color
  let table = document.getElementById("grid"); // get the table by id
  for (let i = 0; i < table.rows.length; i++) {
    // loop through the rows
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      // loop through the cells in each row
      if (table.rows[i].cells[j].style.backgroundColor === "") {
        // check if the cell is uncolored
        table.rows[i].cells[j].style.backgroundColor = colorSelected; // set the background color of the cell to the selected color
      }
    }
  }

  console.log("Fill All Uncolored"); // log the action
}

// Fill all cells
function fillAll() {
  //fill all cells with the selected color regardless of their current color
  let table = document.getElementById("grid"); // get the table by id
  for (let i = 0; i < table.rows.length; i++) {
    // loop through the rows
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      // loop through the cells in each row
      table.rows[i].cells[j].style.backgroundColor = colorSelected; // set the background color of the cell to the selected color
    }
  }
  console.log("Fill All"); // log the action
}

// Clear all cells
function clearAll() {
  //clear all cells/restore all cells to their original/initial color and state
  let table = document.getElementById("grid"); // get the table by id
  for (let i = 0; i < table.rows.length; i++) {
    // loop through the rows
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      // loop through the cells in each row
      table.rows[i].cells[j].style.backgroundColor = ""; // set the background color of the cell to the initial color
    }
  }
  console.log("Clear All"); // log the action
}
