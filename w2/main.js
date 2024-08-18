// Calculatin my Carbon Footprint with method 1

// 1. Count the members of your household.
const myHhMembers = 2;
// 2. Consider the size of your home
const myHomeSize = 4;
// 3. Evaluate your food choices
const myFoodChoices = 6;
// 4. Examine your water consumption
const myWaterConsumption = 3;
// 5. Determine how many household purchases you make each year.
const myHhPurchases = 6;
// 6. Consider how much waste you produce
const myWaste = 40;
// 7. Identify the amount of waste that you recycle
const myRecycle = 8;
// 8. Tally up your annual transportation scores. 
const myTransportation = 10;
// 9. Add up your points
const carbonTotal = myHhMembers + myHomeSize + myFoodChoices + myWaterConsumption + myHhPurchases + myWaste + myRecycle + myTransportation;
// 10. Write JS to update the rendered html (index.html) with total footprint
const ctHeading = document.querySelector("h2");
ctHeading.textContent = carbonTotal