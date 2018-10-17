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
 - **setTimeout**(() => {
        console.log(this);
        this.classList.toggle(second);
     }, 500);

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

## 7 Array Improvements
Array methods.
 - Array.of( )
 - Array.from( )
 - Array.find( )
 - Array.findIndex( )
 - Array.some( )
 - Array.every( )


## 8 The Spread Operator 
The ...rest param in Functions and destructuring
[Spread example](https://d50000.github.io/JavaScript-ES6/08%20-%20Say%20Hello%20to%20...Spread%20and%20...Rest/jumping-letters-D5000.html)
	
	const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
	const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];
	//auto spread into a array, and you can insert elements in.
	const pizzas = [...featured, 'veg', ...specialty];
	
	const name = ['Wes', 'Bos'];
	function sayHi(first, last) {
		alert(`Hey there ${first} ${last}`);
	}
	//same as sayHi(name[0], name[1]);
	sayHi(...name);
	
	const runner = ['Wes Bos', 123, 5.5, 5, 3, 6, 35];
	const [name, id, ...runs] = runner;
	console.log(name, id, runs);
	//...rest_parameters auto declare the variables.


## 9 Object Literal Upgrades
Object Methods
	
	const first = 'snickers';
	const last = 'bos';
	const age = 2;
	const breed = 'King Charles Cav';
	const dog = {
		firstName: first,  //New property name.
		last,  //It mean the property name same as the value.
		age,
		breed,
		[`${breed}Opposite`]: invertColor(value),  //dynamic set property and value.
		pals: ['Hugo', 'Sunny'],  //Add new key and value.
		close(goodbye) {
		    //create: function(){} === create(){}
		}
	};
	
## 10 Promises
Chaining Promises, Flow Control Working with Multiple Promises.
Promise.ace(), Promise.all()

	//JS "fetch" will queue the request, but PHP will stop all the processes.
	const postsPromise = fetch('https://www.google.com.tw/');
	//callback function, run when response is back.
	postsPromise.then(data => data.json())
		.then(data => {console.log(data)})
		.catch((err) => {
			console.error(err);
	})

	// "New Promise" resolve => success, reject => fail
	const p = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve("success!");
			reject(Error('Err it isn\'t cool'));
		}, 1000);
	});
	p
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.error(err);
	});

## 11 Symbols
Symbols features
 - Symbol is a unique identifier, can't loop over the symbol.
 - getOwnPropertySymbols to get the symbol, and use these for object-key to access all the value.

## 12 Code Quality with ESLint
 - ESLint Airbnb configuration.
 - ESLint Plugins inside Atom and Sublime Text.
 - Only Allow ESLint Passing Code into your git repositories.
	
## 13 JavaScript Modules and Using npm
 - Implement JavaScript Modules need to install npm. npm initial the file(app.js), setup the package.json.
While install libraries to dependencies(node_modules). Then you can import some function from these libraries to app.js file.
 - You need to install webpack to bundle these modules together. Install babel, webpack to devDependencies. Setup webpack.config.js for "require"(npm can't use ES6) webpack modules and setup the entry file, bable loading.

## 14 ES6 Tooling Tool-Free Modules with SystemJS
Other way to bundle the package management(jspm). All About Babel + npm scripts Polyfilling ES6 for Older Browsers.

 - Simple way to bundle the web file, and npm libraries install free.
 - Babel is only work on syntax, need to import cdn.polyfill.io for new methods. (webpack include)
 
## 15 Classes Prototypal
 - Inheritance Review
 - Extending Classes and using super()
 - Extending Arrays with Classes for Custom Collections

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

## 20 Async + Await Flow Control
reference: [Async Await - Native Promises Review](https://wcc723.github.io/javascript/2017/12/30/javascript-async-await/)
	
	// The function will block until "await" finish.
	// When it error will block process.
	let mingRun = await runPromise('one', 2000)
	console.log('r1:', mingRun);
	let auntieRun = await runPromise('two', 2500);
	console.log('r2:', auntieRun);
	
	// Wrap "await" in "async", can use then() and catch().
	const asyncRunFail = async () => {
	  let mingRun = await runPromise('one', 2000, false);
	  let auntieRun = await runPromise('two', 2500);
	  return `${mingRun}, ${auntieRun}`
	}
	asyncRunFail().then(string => {
	  console.log(string);
	}).catch(response => {
	  console.log(response);
	  // one fail (rejected)
	})

MODULE #21 ES7, ES8 + Beyond
	Class Properties
	padStart and padEnd
	ES7 Exponential Operator
	Function Arguments Trailing Comma
	Object.entries() and Object.values()
