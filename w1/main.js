console.log("Hello from inside the main.js file");

//let myVar;

const myVar = "edith";
const myVarType = typeof(myVar);
console.log("myVarType " + myVarType);
console.log(`myVarType ${myVarType}`);



function runNow () {
    if(myVarType === "number") {
        console.log('will line 11 run?');
    } else {
        console.log('will line 13 run?');
    }
}

runNow();
