import { FORM, DOW, STEPS, EXERCISE, SUBMIT } from "./global.js";
import { renderTbl } from "./render.js";
import { saveLS, data } from "./storage.js";
import { Entries } from "./entries.js";

renderTbl(data);

const validateField = (event) => {
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
};

DOW.addEventListener("blur", validateField);
STEPS.addEventListener("blur", validateField);
EXERCISE.addEventListener("blur", validateField);

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  if (DOW.value !== "" && parseInt(STEPS.value) && EXERCISE.value !== "") {
    const entry = new Entries(
      DOW.value,
      parseInt(STEPS.value),
      EXERCISE.checked,
      e.target.height.value
    );
    data.push(entry);
    saveLS(data);
    renderTbl(data);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires valid entries";
  }
});
