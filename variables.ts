// Variables:
// for all variables after the : put the type
let isBatman: boolean = true;
let age:number = 25;
let lastName: string = "Limon";

// any, when we use any it's like in js vanilla because allows all types

let loky: any = "Hulk";
loky = 123;
loky = false;

// Arrays 

let arr: number[] = [0,1,2,3,4,5,6,7,8,9];
let arr2: string[] = ["Jason", "Giovani", "Limon", "Benito"];

// Tuples

let user:[string, number] = [ "Jason", 25 ];
let user2:[string, number, boolean] = ["Giovani", 32, true];

// ENUM in typescript

enum Gender{
    MALE = "Male",
    FAMELE = "Famele"
}

console.log(Gender.MALE);
console.log(Gender.FAMELE);

// Void we will use when need a function doesn't return nothing

function sing(): void{
    console.log("I am singing");
}

// so we can't do this
// let result = sing();
// only 
sing();

// never in functions

function error(msg: string): never{
    throw new Error(msg);
}

// error("Critical error in ........");

// assertions in typescript is like a casting in Java, example:

let goals: any = "Be better";
let len: number = (<string>goals).length;
console.log(len);
