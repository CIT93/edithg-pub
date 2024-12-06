import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT, WATER, BOTH} from "./global.js";
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
      const fpObj = new FP(
        FNAME.value,
        LNAME.value,
        parseInt(e.target.housem.value),
        e.target.houses.value,
        e.target.foodChoice.value,
        e.target.foodSource.value,
        e.target.waterConsume.value,
        e.target.dish_washer.checked ? parseInt(e.target.waterConsume.value) * 2 : parseInt(e.target.waterConsume.value),
        e.target.dish_washer.checked,
        parseInt(e.target.housePurchases.value),
      );
      cfpData.push(fpObj);
      saveLS(cfpData);
      renderTbl(cfpData);
      FORM.reset();
      BOTH.disabled = false;
    } else {
      SUBMIT.textContent = "Form requires first name and last name"
    }
  
  });

  WATER.addEventListener("change", e => {
    if(parseInt(WATER.value) === 0){
      BOTH.disabled = true;
    } else {
      BOTH.disabled = false;
    }
  });