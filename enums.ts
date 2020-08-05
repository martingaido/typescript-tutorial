/* Enums */

// Each keword is associated with the array index
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON };

interface Resource1<T> {
	uid: number,
	resourceType: ResourceType;
	data: T;
}

const docFive: Resource1<object> = {
	uid: 1,
	resourceType: ResourceType.BOOK,
	data: { name: 'some name' } // object
}

const docSix: Resource1<string[]> = {
	uid: 1,
	resourceType: ResourceType.DIRECTOR,
	data: ['demo1', 'demo2', 'demo3'] // array
}

// See the value of 'resourceType'
console.log(docFive, docSix);
