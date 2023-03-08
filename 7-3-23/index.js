let person= {
    name: "mishal",
    class: 12,
    isMarried: false,
    greet : function () {
        console.log(`Hellow ${this.name}`);
    },

};
//Object.keys - return all keys
 console.log(Object.keys(person));
 //Object.values - return all values
 console.log(Object.values(person));
 //Object.entries - return all key-value pairs as arrays
 console.log(Object.entries(person));
 //Object.assign 
 console.log(Object.assign(person, {
    age: 18,
    color: 'blue',
 }));