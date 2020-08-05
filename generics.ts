/* Generics */

const addUID = <T>(obj: T) => {
	let uid = Math.floor(Math.random() * 100);
	return {...obj, uid};
}

let docOne = addUID({ name: 'Martin', age: 43 });

console.log(docOne);
console.log(docOne.age);

// Generics in Interfaces
interface Resource<T> {
	uid: number;
	resourceName: string;
	data: T; // this prop could be any type specified
}

const docThree: Resource<object> = {
	uid: 1,
	resourceName: 'person',
	data: { name: 'some name' } // object
}

const docFour: Resource<string[]> = {
	uid: 1,
	resourceName: 'person',
	data: ['demo1', 'demo2', 'demo3'] // array
}
