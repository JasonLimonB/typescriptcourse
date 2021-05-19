// Variables:
// for all variables after the : put the type
var isBatman = true;
var age = 25;
var lastName = "Limon";
// any, when we use any it's like in js vanilla because allows all types
var loky = "Hulk";
loky = 123;
loky = false;
// Arrays 
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr2 = ["Jason", "Giovani", "Limon", "Benito"];
// Tuples
var user = ["Jason", 25];
var user2 = ["Giovani", 32, true];
// ENUM in typescript
var Gender;
(function (Gender) {
    Gender["MALE"] = "Male";
    Gender["FAMELE"] = "Famele";
})(Gender || (Gender = {}));
console.log(Gender.MALE);
console.log(Gender.FAMELE);
// Void we will use when need a function doesn't return nothing
function sing() {
    console.log("I am singing");
}
// so we can't do this
// let result = sing();
// only 
sing();
// never in functions
function error(msg) {
    throw new Error(msg);
}
// error("Critical error in ........");
// assertions in typescript is like a casting in Java, example:
var goals = "Be better";
var len = goals.length;
console.log(len);
