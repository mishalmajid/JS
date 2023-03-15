//return keyword 
function sum  (a ,b) {
    let sum= a+b ;
    return sum;

};
const sumOfTwoNumbers= sum(1, 3);

//break and continue 
let array = [1, 2, 3, 4];
for (let index = 0; index < array.length; index++) {
    if (index == 2);
    break; 
};

let newArray= ['ayesha', 'mishal']
newArray.forEach(function(item) {
    console.log(item)
});

let objArray= [
    { name:'mishal', id: 1},
    {name: 'ayesha', id:2},];

    const namesArray= objArray.map(function (item) 
    {
    return item.name;
    });
