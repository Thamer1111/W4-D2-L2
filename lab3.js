let students = ["Ali", "Sara", "Ahmed", "Lana", "Omar", "Noor"];

students.forEach(function (value) {
    if (value.startsWith("a") || value.startsWith("A")) {
        console.log(value);
    }
});

console.log("----------------------------------------------------------------------");

students.forEach(function (value) {
    if (value.length > 4) {
        console.log(value);
    }
});

console.log("----------------------------------------------------------------------");

let uppercase = students.map(function (value) {
    return value.toUpperCase();
});

console.log(uppercase);

console.log("----------------------------------------------------------------------");

let first_r = students.find(function (value) {
    return (value.includes("r") || value.includes("R"))
});

console.log(first_r);

console.log("----------------------------------------------------------------------");

console.log(students.sort());

console.log("----------------------------------------------------------------------");

console.log(students.includes('Omar'));

console.log("----------------------------------------------------------------------");

let total_char = students.reduce(function (total, value) {
    return total + value.length;
}, 0);

console.log(total_char);

console.log("----------------------------------------------------------------------");

let length_even = students.filter(function (value) {
    return value.length % 2 == 0;
});

console.log(length_even);

let revers_name = students.map(function(value){
    return value.split("").reverse().join("");
});

console.log(revers_name);

console.log("----------------------------------------------------------------------");

let without_o = students.filter(function (value) {
    return !(value.includes("o") || value.includes("O"));
});

console.log(without_o);

console.log("----------------------------------------------------------------------");


