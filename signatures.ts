/* Function Signature */
/* Define the structure of a function */

// Case 1
let greets: (a: string, b: string) => void;

greets = (name: string, greeting: string) => {
	console.log(`${name} says ${greeting}`);
}

// Case 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
	if(action === 'add') {
		return numOne + numTwo; // returns a number
	} else {
		return numOne - numTwo;
	}
}

// Case 3
let logs: (obj: {name: string, age: number}) => void;

type personType = {name: string, age: number};

logs = (person: personType) => {
	console.log(`${person.name} is ${person.age} years old.`);
}
