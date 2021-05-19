// Functions and Objects in TypeScript

// if we want to return a value oue function please do this:

function sum(x: number, y: number): number {
    return x + y;
}
let result: number = sum(5, 4);
console.log(result);

// when the parameters is obligatory, we can declare the type this way typescript take the parameter like obligatories

function mult( x: number, y: number ): number{
    return x * y;
}
console.log(mult(5, 4));

// Optional parameter, in TS we will indicate parameter with "?"  and the parameter is optional

function sayHello( name?: string): void{
    if( name != undefined ){
        console.log(`Hello ${name}`);
    }else {
        console.log("Hello world");
    }
}

sayHello();
sayHello("Jason");


// Objects in typescript
let customer: { name: string, buys:string[] } = {
    name: "Jose",
    buys: ["Tacos", "Soda"]
}
// we can change the values but we need use the same keys if we put the types 

customer = {
    name: "Jason",
    buys: ["Lemons","Apples"]
}
console.log(customer.name);


// Methods in my objects
let client:{ name:string, age:number, buys:string[], getFullName:()=>string } = {
    name: "Giovani",
    age: 26,
    buys: ["Tacos", "Chilaquiles"],
    getFullName(){
        return `${this.name} is ${this.age} years old`;
    }
}

console.log(client.getFullName());


// Now we have other way to declare a type expecifict

type myClient = {
    name: string,
    age: number,
}

// Now we can idnicate the type our object

let jake:myClient = {
    name : "Jake",
    age: 26
}
console.log(jake.name +" " +jake.age);

// If we want to multiple types in our variable even other things we can do this

let other: string | number;
other = "Clarck ken";
other = 200;
