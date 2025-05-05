characters = [
    ["Luke Skywalker", 177, "male", 77, "brown",],
    ["Leia Organa", 160, "female", 56, "blue",],
    ["Han Solo", 180, "male", 80, "brown",],
    ["Chewie", 222, "male", 190, "black",],
    ["kevien", 106, "male", 32.2, "red",],
];

let names = characters.map(function (value) {
    return value[0];
});

console.log(names);

console.log("----------------------------------------------------------------------");

let haights = characters.map(function (value) {
    return value[1];
});

console.log(haights);

console.log("----------------------------------------------------------------------");

let total_haight = haights.reduce(function (total, value) {
    return total + value;
});

console.log(total_haight);

console.log("----------------------------------------------------------------------");

let char_lass_200 = characters.filter(function (value) {
    return value[1] < 200;
});

console.log(char_lass_200);

console.log("----------------------------------------------------------------------");

let males = characters.filter(function (value) {
    return value[2] == 'male';
});

console.log(males);


console.log("----------------------------------------------------------------------");

console.log(characters.sort(function(a, b){return a[3] - b[3]}));

console.log("----------------------------------------------------------------------");

console.log(characters.sort(function(a, b){return a[1] - b[1]}));

console.log("----------------------------------------------------------------------");

let isMoreOf40 = characters.every(function (value) {
    return value[3] > 40;
});

console.log(isMoreOf40);


console.log("----------------------------------------------------------------------");

let isShortOf200 = characters.every(function (value) {
    return value[1] < 200;
});

console.log(isShortOf200);


console.log("----------------------------------------------------------------------");

let blue_eyes = characters.some(function (value) {
    return value[4] == "blue";
});

console.log(blue_eyes);

console.log("----------------------------------------------------------------------");

let taller_210 = characters.some(function (value) {
    return value[1] > 210;
});

console.log(taller_210);
