function determineHouseHoldPts (numberInHousehold) {
    console.log("Inside the function");
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
  
  //determineHouseHoldPts(3)
  determineHouseHoldPts(7)

  //Creating code to have a running total of points as questions are answered - Q1 tp = 2; Q2 tp =7; running total for console.log should be 9
  function determineHomeSizePts (homeSize) {
    if (homeSize === "large") {
      carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (homeSize === "medium") {
      carbonFootprintPoints = carbonFootprintPoints + 7;
    } else if (homeSize === "small") {
      carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (homeSize === "apartment") {
      carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log(`Based on living in a(n) ${homeSize} sized home. The new total for carbon footprint points would be ${carbonFootprintPoints}.`);
  }

  determineHomeSizePts ("medium")

  