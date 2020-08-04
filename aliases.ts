/* Aliases */

// Define Aliases
type StringOrNumber = string|number;
type ObjWithName = {
	name: string,
	uid: StringOrNumber
};

// Use Aliases
const logDetails = (uid: StringOrNumber, item: string) => {
	console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: ObjWithName) => {
	console.log(`${user.name} says hello!`);
}
