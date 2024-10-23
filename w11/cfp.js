const determineHouseSizePts = (size = "apt") => {
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
  

  // //Calculate HH Member Points
  // class HHmemberpts {
  //   constructor(numberInHousehold, houseHoldPoints){
  //     this.numberInHousehold = numberInHousehold
  //     this.houseHoldPoints = houseHoldPoints
  //   }
  //   introduce(){
  //     console.log(`what is missing ${this.numberInHousehold} will equal ${this.houseHoldPoints}`)
  //   }
  // }

  // const determinePts = new HHmemberpts(1, 14)
  // determinePts.introduce();

  // // I was able to get the value pass through but I am not sure how to write the code to shorten my code


const determineHouseHoldPts = (numberInHousehold = 1) => {
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
    return houseHoldPoints;
  }

  export {determineHouseSizePts, determineHouseHoldPts}