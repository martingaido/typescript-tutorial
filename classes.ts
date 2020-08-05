/* Classes */

class Person {

	// Property
	private name: string;
	public age!: number; // public and can be empty !
	readonly gender!: string; // readonly and can be empty !

	// Constructor
    constructor(theName: string) {
        this.name = theName;
    }

	// Methods
    walk(distance: number) {
        console.log(`Hello, my name is ${this.name} and I'm walking ${distance} kilometers.`);
    }
}

let myPerson = new Person('Martin');
myPerson.walk(10);

class Baby extends Person {

    constructor(theName: string) {
        super(theName);
    }

    walk(distance: number) {
        console.log('Babies do not walk!');
    }
}
