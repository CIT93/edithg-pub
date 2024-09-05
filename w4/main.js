const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apt") {
    houseSizePoints = 2;
  }
  return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }
  return houseHoldPoints
}

function start(houseHoldMembers, houseSize) {
 const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
 const HouseSizePTS = determineHouseSizePts(houseSize);
 const total = houseHoldPTS + HouseSizePTS;
 cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, HouseSizePTS, total]);
}

function displayOutput () {
    for (arr of cfpData){
        console.log(arr);
        const output = document.getElementById("output");
        const newP = document.createElement("p");
        newP.textContent = `If your household consists of ${arr[0]} members, your score will be ${arr[2]}. If your house
        size is ${arr[1]} you will score ${arr[3]} points. Adding your Carbon Footprint Total is ${arr[4]}`;
        output.appendChild(newP)
    }
}

start(5, "apt");
start(4, "large");
start(3, "medium");
start(2, "small");
start(1, "aprt");
start(6, "large");
start(7, "medium");

displayOutput ()