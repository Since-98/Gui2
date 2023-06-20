var rowIndex;
var colIndex;

function makeTable() {
  var table = document.getElementById("table");
  var row = document.getElementById("row").value;
  var cols = document.getElementById("cols").value;

  for (rowIndex = 0; rowIndex < row; rowIndex++) {
    var tr = document.createElement("tr");
    for (colIndex = 0; colIndex < cols; colIndex++) {
      var td = document.createElement("td");
      tr.appendChild(td);
      td.setAttribute("id", "cell");
    }
  }

  table.appendChild(tr);
}
document.getElementById("make").addEventListener("click", makeTable);
