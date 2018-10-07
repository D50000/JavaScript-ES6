// Named Export
//every module export can just has one default export, or multiple export. 
export const apiKey = 'abc123';

export const url = 'http://wesbos.com';

export function sayHi(name) {
  console.log(`Hello there ${name}`);
}

const age = 100;
const dog = 'snickers';

export { age as old, dog };
