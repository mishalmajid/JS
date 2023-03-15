//For in loop
const object = {
    name:'mishal',
    class: 11,
    color:'Blue'
}
for (const values in object) {
    console.log(`$(values): ${object[values]}`);
}

//For off loop
const array1= [1, 2, 3, 4]
for (const elements of array1) {
    console.log(elements)
}

//While loop
let a=1 ;
while (a<20) {
    a++ 
}
console.log(a);

//Arrow function
let names=[
    'mishal',
    'bareera',
    'ayesha',
];
console.log(names.map(names=>names.length));
