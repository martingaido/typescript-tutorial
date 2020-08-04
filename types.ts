/* Types */

// Boolean
let thisIsBoolean: boolean = false;

// Numbers
let myAge: number = 30;

// Text, String
let myName: string = 'Martin';

// Template Strings
let greeting: string = `Hello, ${myName}`;

// Arrays
let coune1: number[] = [1, 2, 3];
let somearr: string[] = [];
let count2: Array<number> = [1, 2, 3];
let count3: Array<string> = ['Martin', 'Juan', 'Sara'];

// Any (don't know what kind of data will store)
let any1: any[] = [1, 'Martin', true];
let ant2: any = 'Some text';

// Return Nothing using 'void'
function greetTwo(name: string) : void {
    console.log(`Hello, ${name}`);
}

// Enums
let joystickStatus = 1;
enum Directions{ Up, Down, Left, Right };

if(joystickStatus === Directions.Left) {
    // Move the player to the left
} else if(joystickStatus === Directions.Right) {
    // Move the player to the right
}

// Objects
let payload = {
	name: 'Martin',
	age: 43
};

payload.age = 50; // good
payload.age = 'Martin'; // bad
payload.arr = [1, 3, 'Juan']; // bad

// Explicit Objects
let myObjectOne: object;
let myObjectTwo: {
	name: string,
	age: number,
	status: boolean
};

// Union Types
let arrayOne: (string|number|boolean|object)[] = [];
arrayOne = [12, 33, 'Testing Union Types', true];

let myVariable: string|number|boolean;
