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

function merge<T extends {}, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
  // return {...objA, ...objB}
}

// Typically if you only have one generic you will use a T, although it can be anything, this is just a convention.
// Your second generic should be 'U'

// These essentially just tell typescript that these will be different types. These types are not set in stone when we define ht efunction, but they are when we CALL the function.

// console.log(merge({ name: 'Cory' }, { age: 35 }));

const mergedObj = merge({ name: 'Cory', hobbies: ['Guitar'] }, { age: 35 });
const mergedObj2 = merge({ boats: 1 }, { boatMotors: 'two' });

// When we call this function with completely different looking objects, typescript still infers their types from the values we enter, because the type is not set in stone when the function is defined, only when it is called.
console.log(mergedObj.age);
console.log(mergedObj2.boatMotors);
