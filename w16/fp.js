class FP {
    constructor(first, last, houseMembers, houseSize, foodChoice, foodSource, waterConsume, washingMachine, housePurchases) {
      this.first = first;
      this.last = last;
      this.houseMembers = houseMembers;
      this.houseSize = houseSize;
      this.foodChoice = foodChoice;
      this.foodSource = foodSource;
      this.waterConsumePoints = waterConsume;
      this.washingMachine = washingMachine;
      this.housePurchasesPoints = housePurchases;
      this.calHouseHoldPoints();
      this.calHouseSizePoints();
      this.calFoodChoicePoints();
      this.calFoodSourcePoints();
      if(this.washingMachine){
      this.calWashingMachine();
      }
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
        } else if (this.foodSource === "freshBlance") {
          this.foodSourcePoints = 6;
        } else if (this.foodSource === "freshLocal") {
          this.foodSourcePoints = 2;
        } 
    }

    calWashingMachine() {
        if(this.washingMachine && this.waterConsumePoints > 0) {
          this.washingMachinePoints = this.waterConsumePoints * 2;
        } else {
          this.washingMachinePoints = 0;
      }
    }
 
  calTotal(){
      if(this.washingMachine) {
        this.total = this.houseHoldPoints + this.houseSizePoints + this.foodChoicePoints + this.foodSourcePoints + this.waterConsumePoints + this.washingMachinePoints + this.housePurchasesPoints
  } else {
        this.total = this.houseHoldPoints + this.houseSizePoints + this.foodChoicePoints + this.foodSourcePoints + this.waterConsumePoints + this.housePurchasesPoints
  }

  }
}

  export { FP };