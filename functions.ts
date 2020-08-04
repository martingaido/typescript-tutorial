/* Functions */

// Explicit Declaration
let myFunc: Function;

// Case 1
function greetOne(firstName: string, lastName: string) : void {
    console.log(`Hello, ${firstName} ${lastName}`);
}

greetOne('Martin', 'Gaido');

// Case 2 (w/ optional args)
function greetTwo(firstName: string, lastName?: string) : void {
    console.log(`Hello, ${firstName} ${lastName}`);
}

greetTwo('Martin');

// Case 3 (w/ optional args)
function greetThree(firstName: string, lastName: string = 'Gaido') : void {
    console.log(`Hello, ${firstName} ${lastName}`);
}

greetTwo('Martin');

// Case 4 (arrow function)
class Greeter {
    firstName: string = 'Martin';

    sayHello() {
        setTimeout(() => {
            console.log(`Hello, ${this.firstName} (after 1 sec)`);
        }, 1000);
    }
}

let greeter = new Greeter();
greeter.sayHello();

// Case 5 (specify returned value)
const minus = (a: number, b: number): number => {
	return a + b;
}

const demoFunc = (a1: number, b1: number): void => {
	console.log(a1 + b1);
}
