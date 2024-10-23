import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";

//Start function
const start = (firstName, lastName, houseHoldMembers, houseSize) => {
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

// const start = (...i) => {
//   const houseHoldPTS = determineHouseHoldPts(i[2]);
//   const HouseSizePTS = determineHouseSizePts(i[3]);
//   const total = houseHoldPTS + HouseSizePTS;
//   cfpData.push({
//     fName: i[0],
//     lName: i[1],
//     houseM: i[2],
//     houseS: i[3],
//     houseMPTS: houseHoldPTS,
//     houseSPTS: HouseSizePTS,
//     cfpTotal: total,
//   });
// }

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

//On submit event
FORM.addEventListener("submit", e => {
    e.preventDefault();
    if (FNAME.value !== "" && LNAME.value !== '') {
      SUBMIT.textContent = '';
      //start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
      const fpObj = new FP (FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.foodChoice.value);
      cfpData.push(fpObj);
      saveLS(cfpData);
      renderTbl(cfpData);
      FORM.reset();
    } else {
      SUBMIT.textContent = "Form requires first name and last name"
    }
  
  });

// // const me = {
// // name: "Edith",
// // haircolor: "Brown",
// // location: "office",
// // sleepScore: 44,
// // introduce: function () {
// //     console.log(this)
// //     console.log (`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now.`)
// // }
// // }

// //me.introduce ();
// //you.introduce ();

// class Human {
//     constructor(name, hairColor, location, sleepScore){
//         this.name = name
//         this.hairColor = hairColor
//         this.location = location
//         this.sleepScore = sleepScore
//     }
//     introduce(){
//         console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now.`)
//     }
// }

// const rio = new Human("Rio", "Red", "office", 95)
// const jane = new Human("Jan", "Brown", "home", 55)
// rio.introduce();