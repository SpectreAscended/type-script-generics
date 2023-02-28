// Functions

// const names: Array<string> = []; // string[]
// // names[0].split(' ')

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then(data =>{
//     data.split(' ')
// });

// Custom generic types

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
  // return {...objA, ...objB}
}

// Typically if you only have one generic you will use a T, although it can be anything, this is just a convention.
// Your second generic should be 'U'

// These essentially just tell typescript that these will be different types. These types are not set in stone when we define ht efunction, but they are when we CALL the function.

// console.log(merge({ name: 'Cory' }, { age: 35 }));

const mergedObj = merge({ name: 'Cory', hobbies: ['Guitar'] }, { age: 35 });
// const mergedObj2 = merge({ boats: 1 }, { boatMotors: 'two' });

// When we call this function with completely different looking objects, typescript still infers their types from the values we enter, because the type is not set in stone when the function is defined, only when it is called.
console.log(mergedObj);
// console.log(mergedObj2.boatMotors);

// Constraints

// In order to insure that we can only pass objects into this function we can use a constraint.  What this is, is we extend the generic type to, in this case object, to insure it is an object.
//example: merge<T extends object, U extends object>(){}

// Please note: These constraints can be anything. string, number, custom types, union types, etc.

// Another function example

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

// console.log(countAndDescribe('Hi there!'));
// console.log(countAndDescribe(['Sports', 'Cooking']));
// console.log(countAndDescribe([]));

// keyof Constraint

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

// console.log(extractAndConvert({ name: 'douglas' }, 'name'));

// Generic Classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Cory');
textStorage.addItem('Doug');
textStorage.removeItem('Cory');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();

// const coryObj = { name: 'Cory' };

// objStorage.addItem(coryObj);
// objStorage.addItem({ name: 'Doug' });
// objStorage.removeItem(coryObj);
// console.log(objStorage.getItems());
