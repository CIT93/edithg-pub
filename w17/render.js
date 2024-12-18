import {FORM, TBL} from "./global.js";
import {saveLS} from "./storage.js";

  const calcAverage = (data) => {
    const reduceTotal = data.reduce((sum, ea) => sum + ea.total, 0);
    const tableRef = document.getElementById("table-id");
    let newTR = tableRef.insertRow(-1);
    let newTD = newTR.insertCell(0);
    let newTD_1 = newTR.insertCell(0);
    let newTD_2 = newTR.insertCell(0);
    let newLabel = document.createTextNode(`Average Footprint`);
    let newText = document.createTextNode(`${Math.floor(reduceTotal/data.length)}`);
    newTD_1.appendChild(newLabel);
    newTD.appendChild(newText);
  }


const renderTblHeading = () => {
  const table = document.createElement("table");
  table.setAttribute("id", "table-id")
  const thead = document.createElement("thead");
  const tr = document.createElement("tr"); 
    const headingTextArr = ["First", "Last","Footprint Total", "Actions"];
  headingTextArr.forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

const onUpdate = (index,  data) => {
    data.splice(index, 1);
    saveLS(data);
    renderTbl(data); 
}

const renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Delete";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener('click', () => {
    onUpdate(index, data);
  });
  btnEdit.addEventListener('click', () => {
   FORM[1].value = obj.first;
   FORM[2].value = obj.last;
   FORM[3].value = obj.houseMembers;
   FORM[4].value = obj.houseSize;
   FORM[5].value = obj.foodChoice;
   FORM[6].value = obj.foodSource;
   FORM[7].value = obj.waterValue;
   FORM[8].checked = obj.both;
   FORM[9].value = obj.housePurchasesPoints.toString();
   FORM[10].value = obj.houseWastePoints.toString();
   FORM[12].checked = obj.recycle.glass;
   FORM[13].checked = obj.recycle.plastic;
   FORM[14].checked = obj.recycle.paper;
   FORM[15].checked = obj.recycle.aluminum;
   FORM[16].checked = obj.recycle.steel;
   FORM[17].checked= obj.recycle.food;
   FORM[19].value = obj.personalVehicle.toString();
   FORM[20].value = obj.publicTransport.toString();
   FORM[21].value = obj.flights.toString();
   onUpdate(index, data);
  })
  return td;
}

//Renders the body of the table
const renderTblBody = data => {
  const tbody = document.createElement("tbody");
  data.forEach ((obj, index) => {
  const tr = document.createElement("tr");
  const keys = ["first", "last", "total"]
    keys.forEach(key => {
      const td = document.createElement("td");
      td.textContent = obj[key];
      tr.appendChild(td);
    })
  
  const td = renderTblBtn(obj, index, data);
  tr.appendChild(td);
  tbody.appendChild(tr);
  });

  return tbody;
  };

             
const renderTbl =  data => {
  TBL.innerHTML = "";
  if(data.length !== 0){
    const table = renderTblHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
    calcAverage(data);
  }
};

export { renderTbl };