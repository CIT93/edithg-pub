import { FORM, TBL } from './global.js';
import { saveLS } from './storage.js';

function renderTblHeading() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Day of the Week","Steps Logged", "Exercised Y/N", "Distance in Miles", "Message", "Action",];
    headingTextArr.forEach(function (text) {
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

  const renderTblBtn = function(entry, index, data){
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Delete";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener('click', function(){
      onUpdate(index, data);
    });
    btnEdit.addEventListener('click', function(){
     FORM[1].value = entry.dayOfWeek;
     FORM[2].checked = entry.isExercised;
     FORM[3].value = entry.stepsLogged;
     FORM[4].value = entry.height;
     onUpdate(index, data);
    })
    return td;
  }

  const renderTblBody = (data) => {
    const tbody = document.createElement("tbody");
    data.forEach((obj, index) => {
      const tr = document.createElement("tr");
 for (const [key, value] of Object.entries(obj)){
  if (key !== "stepsRemaining" && key !=="height" && key !== "dailyGoal") {
    const td = document.createElement("td");
    if (key === "isExercised") {
        td.textContent = value ? "Yes" : "No";
    } else {
        td.textContent = value;
    }
    tr.appendChild(td);
  }
 }
const td = renderTblBtn(obj, index, data);
tr.appendChild(td);
tbody.appendChild(tr);
  });
  return tbody;
}

  function renderTbl(data) {
    TBL.innerHTML = "";
    if(data.length !==0){
    const table = renderTblHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
    }


  }

  export { renderTbl, renderTblHeading};