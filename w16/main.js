import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";

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
      const washingMachineCheck = e.target.washingMachine.checked;
      const fpObj = new FP(
        FNAME.value,
        LNAME.value,
        parseInt(e.target.housem.value),
        e.target.houses.value,
        e.target.foodChoice.value,
        e.target.foodSource.value,
        parseInt(e.target.waterConsume.value),
        washingMachineCheck
      );
      cfpData.push(fpObj);
      saveLS(cfpData);
      renderTbl(cfpData);
      FORM.reset();
    } else {
      SUBMIT.textContent = "Form requires first name and last name"
    }
  
  });