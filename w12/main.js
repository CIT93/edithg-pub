const FORM = document.getElementById("form");
const TYPE = document.getElementById("exerciseType");
const REPS = document.getElementById("repNumber");
const TIME = document.getElementById("timeMinutes");
const OUTPUT = document.getElementById("output");
const SUBMIT = document.getElementById("submitError");

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
 TYPE.addEventListener("blur", validateField);

  const start = (exerciseType, reps, time) => {
    OUTPUT.innerHTML = `Start ${exerciseType} for ${time} minutes each rep.`

  setTimeout(()=>{
    OUTPUT.innerHTML += ` Start!`;
    setTimeout(()=> {
      OUTPUT.innerHTML += ` Timer stop.`;
    }, time*6000)
  }, 1000)
};

  FORM.addEventListener("submit", e => {
    e.preventDefault();
    if (TYPE.value !== "" && REPS.value !== "" && TIME.value !=="") {
      SUBMIT.textContent = '';
      start(TYPE.value, parseInt(REPS.value), parseInt(TIME.value));
      FORM.reset();
    } else {
      SUBMIT.textContent = "Form requires all fields.";
    }
  
  });
  