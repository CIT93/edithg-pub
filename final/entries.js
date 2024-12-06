class Entries {
    constructor(dayOfWeek, stepsLogged, isExercised, height, dailyGoal =10000) {
        this.dayOfWeek = dayOfWeek;
        this.stepsLogged = stepsLogged;
        this.isExercised = isExercised;
        this.height = height;
        this.dailyGoal = dailyGoal;
        this.stepsRemaining = this.remainingSteps();
        this.distanceWalked = this.distance();
        this.outPutMessage = this.message();
    }
  
    remainingSteps(){
      return this.dailyGoal - this.stepsLogged;
   }

    distance(){
        const strideLength = this.height*0.413
        const distanceMi= (this.stepsLogged * strideLength) / 63360;
        return parseFloat(distanceMi.toFixed(2));
    }
      
  message() {
       let outPutMessage = '';
   
     if (!this.isExercised && this.stepsLogged ===0){
           outPutMessage = `It is ${this.dayOfWeek}, you have not exercised and step goal has not been met. Going for a walk or exercising would be a great start. `
       } else if(!this.isExercised && this.stepsLogged < this.dailyGoal){
           outPutMessage =`It is ${this.dayOfWeek}, you have not exercised but you have logged in ${this.stepsLogged} steps and walked approximately ${this.distanceWalked} miles. Keep going! You have ${this.stepsRemaining} steps remaining`
       } else if(this.stepsLogged >=  this.dailyGoal) { 
           outPutMessage = `It is ${this.dayOfWeek} and have logged in ${this.stepsLogged} steps for today. Based on information provided, you have walked approximately ${this.distanceWalked} miles. No need for a walk and rest has been earned.`
       } else {
           outPutMessage = `It is ${this.dayOfWeek}, you have exercised but step goal has not been met. Time for a walk, you have ${this.stepsRemaining} steps remaining and have walked approximately ${this.distanceWalked} miles. `
        } 
       return outPutMessage;
   }
   
  
   }
  
   export { Entries };