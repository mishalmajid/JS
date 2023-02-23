
//less Than (>)
console.log("4 is less than 3", 4>3)

//logical operators

//logocal AND operator (&&)
//All conditions in and should be true to get a true answer
console.log(true&&true&&true&&false);

//logical OR operator (||)
//only one condition in OR should be true to get a true answer
console.log (false || true || true || false)

//logical NOT operator (!)
console.log(!true)

//Usage of Logical and Relational operator

let a = 10;
let b = 14;
let c = 15;
let d = 10;

//Return true only if all conditions are true
console.log(b===c && a===d);
//Return true if even is true
console.log (b===c || a===d);
//Reverse the result
console.log (!(a===d) && b === c);

//IF ELSE statement or conditional statement 

if(!(a===d) && b===c) {
    console.log('condition 1 is true')
} else if (a===b) {
    console.log('condition 2 is true')
} else {console.log('nothing is true')}

