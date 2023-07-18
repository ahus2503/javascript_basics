console.log(true && true); // true
console.log(false && true); // false
console.log(10 > 0 && 10 < 50); // true

let value_1 = 10;
let value_2 = -10;
if(value_1 > 0 && value_2 > 0){
    console.log("Both values are positive");
    // some other code based on the decision.
}else{
    console.log("Either one or both the values are negative. Please enter the positive values only!");
}
// Output: Either one or both the values are negative. Please enter the positive values only!