class FP {
    constructor(first, last, houseMembers, houseSize, foodChoice, foodSource, waterValue, waterConsume, both, housePurchases, houseWaste, recycle, personalVehicle, publicTransport, flights) {
      this.first = first;
      this.last = last;
      this.houseMembers = houseMembers;
      this.houseSize = houseSize;
      this.foodChoice = foodChoice;
      this.foodSource = foodSource;
      this.waterValue = waterValue;
      this.waterConsumePoints = waterConsume;
      this.both = both;
      this.housePurchasesPoints = housePurchases;
      this.houseWastePoints = houseWaste;
      this.recycle = recycle;
      this.personalVehicle = personalVehicle;
      this.publicTransport = publicTransport;
      this.flights= flights;  
      this.calHouseHoldPoints();
      this.calHouseSizePoints();
      this.calFoodChoicePoints();
      this.calFoodSourcePoints();
      this.calTransportPoints();
      this.calTotal();
    }
    calHouseHoldPoints() {
      if (this.houseMembers === 1) {
        this.houseHoldPoints = 14;
      } else if (this.houseMembers === 2) {
        this.houseHoldPoints = 12;
      } else if (this.houseMembers === 3) {
        this.houseHoldPoints = 10;
      } else if (this.houseMembers === 4) {
        this.houseHoldPoints = 8;
      } else if (this.houseMembers === 5) {
        this.houseHoldPoints = 6;
      } else if (this.houseMembers === 6) {
        this.houseHoldPoints = 4;
      } else if (this.houseMembers > 6) {
        this.houseHoldPoints = 2;
      }
    }
    calHouseSizePoints() {
      if (this.houseSize === "large") {
        this.houseSizePoints = 10;
      } else if (this.houseSize === "medium") {
        this.houseSizePoints = 7;
      } else if (this.houseSize === "small") {
        this.houseSizePoints = 4;
      } else if (this.houseSize === "apt") {
        this.houseSizePoints = 2;
      }
    }
    calFoodChoicePoints() {
      if (this.foodChoice === "domesticDaily") {
        this.foodChoicePoints = 10;
      } else if (this.foodChoice === "domesticWeekly") {
        this.foodChoicePoints = 8;
      } else if (this.foodChoice === "vegetarian") {
        this.foodChoicePoints = 4;
      } else if (this.foodChoice === "veganOrWild") {
        this.foodChoicePoints = 2;
      }
    }
    calFoodSourcePoints() {
      if (this.foodSource === "prePackaged") {
        this.foodSourcePoints = 12;
      } else if (this.foodSource === "freshBalance") {
        this.foodSourcePoints = 6;
      } else if (this.foodSource === "freshLocal") {
        this.foodSourcePoints = 2;
      }
    }

    calTransportPoints() {
      this.tallyTransportPoints = this.personalVehicle + this.publicTransport + this.flights;
    }
  
    calTotal() {
      this.total =
        this.houseHoldPoints +
        this.houseSizePoints +
        this.foodChoicePoints +
        this.foodSourcePoints +
        this.waterConsumePoints +
        this.housePurchasesPoints +
        this.recycle.recyclePoints +
        this.houseWastePoints +
        this.tallyTransportPoints;
    }
  }
  
  export { FP };
  