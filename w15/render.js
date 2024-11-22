import {FORM, TBL} from "./global.js";
import {saveLS} from "./storage.js";
import { calcAverage } from "./average.js";


const renderTblHeading = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr"); 
    const headingTextArr = ["Name", "Household", "HouseSize", "FoodChoice", "Footprint", "Action"];
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
   onUpdate(index, data);
  })
  return td;
}

//Renders the body of the table
const renderTblBody = data => {
  const tbody = document.createElement("tbody");
  data.forEach ((obj, index) => {
  const tr = document.createElement("tr");
  const keys = ["first", "houseMembers", "houseSize", "foodChoice", "total"]
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

  function avgRow(TBL, average) {
    let newRow = TBL.insertRow(-1);

    let newCell = newRow.insertCell(0);
    let newCell1= newRow.insertCell(1);
    let newCell2 = newRow.insertCell(2);
    let newCell3 = newRow.insertCell(3);
    let newText = document.createTextNode("Average:");
    newCell3.appendChild(newText);
    let newCell4 = newRow.insertCell(4);
    let newAvg = document.createTextNode(`${average}`);
    newCell4.appendChild(newAvg);
  }
             
const renderTbl =  data => {
  TBL.innerHTML = "";
  if(data.length !== 0){
    const table = renderTblHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    const average = calcAverage(data);
    avgRow(table, average);
    TBL.appendChild(table);
  }
};

export { renderTbl };