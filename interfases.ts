/* Interfases */
/* Defines the  structure of a class or an object */

// Case 1
interface RectangleOptions {
    width: number;
    length: number;
    height?: number; // ? optional arg
}

function drawRectangle(options: RectangleOptions) {
    let width = options.width;
    let length = options.length;

    // Draw Rectangle
}

drawRectangle({
    width: 100,
    length: 50,
    height: 30
})

// Case 2
interface IsPerson {
	name: string;
	age: number;
	speak(a: string): void;
	spend(a: number): number;
}

const me: IsPerson = {
	name: 'Martin',
	age: 43,
	speak(text: string): void {
		console.log(text);
	},
	spend(amount: number): number {
		console.log('I spend', amount);
		return amount;
	}
}

// Case 3 (classes)
interface HasFormatter {

	// Method
	format(): string;
}

class Invoice implements HasFormatter {

	constructor(
		readonly client: string,
		private details: string,
		public amount: number,
	) {}

	// Must match the interface structure
	format() {
		return `${this.client} owes USD${this.amount} for ${this.details}`;
	}
}
