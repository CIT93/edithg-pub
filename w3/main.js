function determineHouseHoldPts (numberInHousehold) {
    console.log("Inside the function");
    let carbonFootprintPoints = 0;

    if (numberInHousehold === 1) {
      carbonFootprintPoints = carbonFootprintPoints + 14;
    } else if (numberInHousehold === 2) {
      carbonFootprintPoints = carbonFootprintPoints + 12;
    } else if (numberInHousehold === 3) {
      carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (numberInHousehold === 4) {
      carbonFootprintPoints = carbonFootprintPoints + 8;
    } else if (numberInHousehold === 5) {
      carbonFootprintPoints = carbonFootprintPoints + 6;
    } else if (numberInHousehold === 6) {
      carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (numberInHousehold > 6) {
      carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log(`Based on the number of members of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`);
  }
  
  let carbonFootprintPoints = 0;
  //const numberInHousehold = 3;
  
  
  //global scope
  
  determineHouseHoldPts(3)
  determineHouseHoldPts(4)

  function determineHomeSizePts (homeSize) {
    console.log("Inside the function");
    let carbonFpPoints = 0;

    if (homeSize === "large") {
      carbonFpPoints = carbonFpPoints + 10;
    } else if (homeSize === "medium") {
      carbonFpPoints = carbonFpPoints + 7;
    } else if (homeSize === "small") {
      carbonFpPoints = carbonFpPoints + 4;
    } else if (homeSize === "apartment") {
      carbonFpPoints = carbonFpPoints + 2;
    }
    console.log(`Based on the size of the home. If you have live in a(n) ${homeSize} home, the points would be ${carbonFpPoints}.`);
  }

  let carbonFpPoints = 0;
  determineHomeSizePts ("large")