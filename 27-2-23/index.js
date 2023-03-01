//greet function 
function greet( ) {
    console.log("hello");
}

//function calling 
greet("how are you?");
 greet("hi there!");

//sum function
function sum(a , b) {
    console.log('the sum of these numbers is', a+b);
}

//sum function calling
sum(11, 12, 13)
sum(20000, 40000)

//custom function
function issmallerthan20(num) {
    if (num*5<20) {
        console.log('true')
    } else {
        console.log('false')
    }
}

//calling custom function
issmallerthan20(2)