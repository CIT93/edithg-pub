const TBL = document.getElementById("tab-data");
let tableRendered = false;

function renderTblHeading() {
  TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr"); 
    const headingTextArr = ["Name", "Household", "HouseSize", "Footprint", "Action"];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

function renderTblBtn(index, data){
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Delete";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener('click', function(e){
    console.log('Hello from inside the delete button');
    console.log(e);
    data.splice(index, 1);
    renderTbl(data);
  });
  btnEdit.addEventListener('click', function(e){
    renderTblBody(data);
  })
  return td;
}

function renderTblBody(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
  const tr = document.createElement("tr");
  for (const [key, value] of Object.entries(obj)) {
    if (key !== "lName" && key !== "houseMPTS" && key !== "houseSPTS") {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    }
  }
  const td = renderTblBtn(index, data);
  tr.appendChild(td);
  tbody.appendChild(tr);
  });
  return tbody;
}

function renderTbl(data) {
  if(!tableRendered){
  const table = renderTblHeading();
  const tbody = renderTblBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
} else{
tableRendered = true;
}
}


export { renderTbl };