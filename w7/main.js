import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];



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


  FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstName, lastName, houseMembers, houseSize);
  OUTPUT.innerHTML = "";
  //displayOutput();
  renderTbl(cfpData);
  FORM.reset();
});

// the (data) referenced in the render.js will be used to bring in the data from our start function (CfpData)
// I am still processing what we just learned and the functionality for it. How are we able to change the refence name and somehow know what is referenced. 