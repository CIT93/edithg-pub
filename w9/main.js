import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import {FORM, firstname, lastname, errorElement} from "./global.js";
import {saveLS, cfpData} from "./storage.js"

function start(firstName, lastName, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const HouseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + HouseSizePTS;
  cfpData.push({
    fName: firstName,
    lName: lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: HouseSizePTS,
    cfpTotal: total,
  });
}

renderTbl (cfpData);

  FORM.addEventListener('submit', (e) => {
    let messages = [];
    errorElement.innerText = '';
    if(firstname.value.trim() === ''){
        messages.push('First name is required');
        console.log ('first name required')
    }
    if(lastname.value.trim() === ''){
        messages.push('Last name is required')
    }
    if(messages.length > 0){
  e.preventDefault();
  errorElement.innerText = messages.join(', ')
    }
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstName, lastName, houseMembers, houseSize);
  saveLS(cfpData);
  renderTbl(cfpData);
  FORM.reset();

});