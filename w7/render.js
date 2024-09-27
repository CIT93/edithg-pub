const TBL = document.getElementById("tab-data");
let tableRendered = false;

function renderTblHeading() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name","Household", "HouseSize","Footprint","Action",];
    headingTextArr.forEach(function (text) {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
  }
  
  function renderTbl(data) {
    if(!tableRendered){
    const table = renderTblHeading()
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    TBL.appendChild(table);
    tableRendered = true;
     }

    const table= TBL.querySelector("table");
    const tbody= table.querySelector("tbody");
    const tr = document.createElement("tr");
    const newSubmit = data[data.length - 1];
    const trTextArr = [newSubmit.fName, newSubmit.houseM, newSubmit.houseS, newSubmit.cfpTotal]
    trTextArr.forEach (function(text){
      const td =document.createElement("td")
      td.textContent = text;
      tr.appendChild(td);
    });
  
    const td = document.createElement("td")
    const btnEdit = document.createElement("button");
    btnEdit.textContent ="Edit"
    const btnDel = document.createElement("button");
    btnDel.textContent = "Delete"
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    tr.appendChild(td);
    tbody.appendChild(tr)
    }



    export { renderTbl, renderTblHeading};