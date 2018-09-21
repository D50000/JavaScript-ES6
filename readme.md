# JavaScript ES6 overview
There are overrall ES6 concept. Check it below for details!!
reference: https://wesbos.com/

## 1 New Variables — Creation, Updating and Scoping
	Forget about "var"
	use "const" or "let"
	
## 2 Function Improvements: Arrows and Default Arguments
Common Arrow Functions In ES6
 - **filter**(item  => item.textContent.includes('Flexbox'))
 - **map**(item  => item.dataset.time)
 - **reduce**((runningTotal, seconds) =>  runningTotal + seconds, 0)

## 3 Template Strings
```
const sentence = `My dog ${name} is ${age * 7} years old.`;

const markup = `
<div class="beer">
    <h2>${beer.name}</h2>
	<p class="brewery">${beer.brewery}</p>
	${renderKeywords(beer.keywords)}
</div>
`;

<p>
	${song.name} — ${song.artist}
	${song.featuring ? `(Featuring ${song.featuring})` : ''}
</p>

const markup = `
<ul class="dogs">
	${dogs.map(dog => `
	<li>
		${dog.name}
		is
		${dog.age * 7}
	</li>`).join('')}
</ul>
`;
```
	
## 4 Additional String Improvements
New String Methods
```
.startsWith(searchvalue, index)
.endsWith(searchvalue, index)
.includes(searchvalue, start)
.repeat(count)
```

## 5 Destructuring
Duplicate data from Object to Object.
Destructuring Objects,  Arrays. Switching and Declaring the variable in Arrays.
	
	// destructuring syntax :
	// const first = person.first;
	// const last = person.last;
	// const twitter = person.twitter;
	const  person = {
		first: 'Wes',
		last: 'Bos',
		country: 'Canada',
		city: 'Hamilton',
		twitter: '@wesbos'
	};
	
	const {
		// it can be default
		test = 100,
		first,
		last,
		twitter
	} = person;
	


	//ES6 ...values, it will auto destructuring spread into the the Array.
	const  team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker'];
	const [captain, assistant, ...players] = team;

## 6 iterables & Looping
Using for of loop with Objects
```
const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];
// ps: It iterate over everything in the array.It just return index.
for (const  index in cuts) {
	console.log(cuts[index]);
}

//best way for iteration and support break, continue.
for (const  cut of cuts) {
	if(cut === 'Brisket') {
		continue;
	}
	console.log(cut);
}

// for of loop in Object
const  apple = {
	color: 'Red',
	size: 'Medium',
	weight: 50,
	sugar: 10
};

for (const  prop in apple) {
	const  value = apple[prop];
	console.log(prop, value);
}
```

MODULE #7 An Array of Array Improvements
	Array.from() and Array.of()
	Array. find() and .findIndex()
	Array .some() and .every()

MODULE #8 Say Hello to ...Spread and ...Rest
	Spread Operator Introduction
	Spread Exercise
	More Spread Examples
	Spreading into a function
	The ...rest param in Functions and destructuring

MODULE #9 Object Literal Upgrades
	Object Literal Upgrades
	
MODULE #10 Promises
	Promises
	Building your own Promises
	Chaining Promises + Flow Control
	Working with Multiple Promises

MODULE #11 Symbols
	All About Symbols

MODULE #12 Code Quality with ESLint
	Getting Started with ESLint
	Airbnb ESLint Settings
	Line and File Specific Settings
	ESLint Plugins
	ESLint inside Atom and Sublime Text
	Only Allow ESLint Passing Code into your git repos
	
MODULE #13 JavaScript Modules and Using npm
	JavaScript Modules and WebPack 2 Tooling Setup
	Creating your own Modules
	More ES6 Module Practice

MODULE #14 ES6 Tooling
	Tool-Free Modules with SystemJS (+bonus BrowserSync setup)
	All About Babel + npm scripts
	Polyfilling ES6 for Older Browsers

MODULE #15 Classes
	Prototypal Inheritance Review
	Say Hello to Classes
	Extending Classes and using super()
	Extending Arrays with Classes for Custom Collections

MODULE #16 Generators
	Introducing Generators
	Using Generators for Ajax Flow Control
	Looping Generators with for of

MODULE #17 Proxies
	What are Proxies?
	Another Proxy Example
	Using Proxies to combat silly errors

MODULE #18 ets and WeakSets
	Sets
	Understanding Sets with Brunch
	WeakSets

MODULE #19 Map and Weak Map
	Maps
	Map Metadata with DOM Node Keys
	WeakMap and Garbage Collection

MODULE #20 Async + Await Flow Control
	Async Await - Native Promises Review
	Async Await - Custom Promises Review
	All About Async + Await
	Async + Await Error Handling
	Waiting on Multiple Promises
	Promisifying Callback Based Functions

MODULE #21 ES7, ES8 + Beyond
	Class Properties
	padStart and padEnd
	ES7 Exponential Operator
	Function Arguments Trailing Comma
	Object.entries() and Object.values()
