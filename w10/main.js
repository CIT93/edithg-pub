import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

// const start = (firstName, lastName, ...addData) => {
//   const [houseHoldMembers, houseSize] = addData
//   const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
//   const HouseSizePTS = determineHouseSizePts(houseSize);
//   const total = houseHoldPTS + HouseSizePTS;
//   cfpData.push({
//     fName: firstName,
//     lName: lastName,
//     houseM: houseHoldMembers,
//     houseS: houseSize,
//     houseMPTS: houseHoldPTS,
//     houseSPTS: HouseSizePTS,
//     cfpTotal: total,
//   });
// }

const start = (...i) => {
  const houseHoldPTS = determineHouseHoldPts(i[2]);
  const HouseSizePTS = determineHouseSizePts(i[3]);
  const total = houseHoldPTS + HouseSizePTS;
  cfpData.push({
    fName: i[0],
    lName: i[1],
    houseM: i[2],
    houseS: i[3],
    houseMPTS: houseHoldPTS,
    houseSPTS: HouseSizePTS,
    cfpTotal: total,
  });
}


renderTbl(cfpData);

//Function to validate a single field
const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    event.target.classList.remove("invalid");
  }
}

//Attach blur event listeners
FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);


FORM.addEventListener("submit", e => {
  e.preventDefault();
  if (FNAME.value !== "" && LNAME.value !== '') {
    SUBMIT.textContent = '';
    start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name"
  }

});
