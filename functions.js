let testArray = [0,2,3,5,2,6];
function testFunction(num){
	console.log(num);
}

// forEach()

// Without using the native “Array.prototype.forEach” method of JavaScript, compose a function titled 
// “myEach” that will take in an array of elements and executes any callback function on each of those elements.


function myEach(array, callback){
	let i = 0;
	while (i < array.length){
		callback(array[i++]);
	}
}

// myEach(testArray, testFunction);

// map()

// Without using the native “Array.prototype.map” method of JavaScript, 
// compose a function titled “myMap” that will take in an array of elements and executes a callback function on each of those elements.

function myMap(array, callback){
	let newArray = [];
	let i = 0;
	while (i < array.length){
		myPush(newArray, callback(array[i++]));
	}
	return newArray;
}

//myEach(myMap(testArray, num => num * 2), testFunction);

// filter()

// Without using the native “Array.prototype.filter” method of JavaScript, 
// compose a function titled “myFilter” that will take in an array of elements and executes a callback function on each of those elements.

function myFilter(array, test){
	let newArray = [];
	let i = 0;
	while (i < array.length){
		if (test(array[i])){
			myPush(newArray, array[i]);
		}
		i++;
	}
	return newArray;
}

//myEach(myFilter(testArray, num => num < 5), testFunction);

//some() (aka any())

// Without using the native “Array.prototype.some” method of JavaScript, 
//compose a function titled “mySome” that will take in an array of elements and executes a callback function on each of those elements.

function mySome(array, test){
	let i = 0;
	while (i < array.length){
		if (test(array[i++])){
			return true;
		}
	}
	return false;
}

// if(mySome(testArray, num => num > 10)){
// 	testFunction(50);
// }

//every()

// Without using the native “Array.prototype.every” method of JavaScript, 
// compose a function titled “myEvery” that will take in an array of elements and executes a callback function on each of those elements.


// helper function from dofactory.com for negating functions as first-class objects
function negate(f){
	return function(i){
		return !f(i);
	};
}

function myEvery(array, test){
	return !mySome(array, negate(test));
}

// if (myEvery(testArray, num => num < 10)){
// 	testFunction(10);
// }

//reduce()

// Without using the native “Array.prototype.reduce” method of JavaScript, 
//compose a function titled “myReduce” that will take in an array of elements and executes a callback function on each of those elements.

function myReduce(array, reducer, init = 0){
	let i = 0;
	let sum = init;
	while(i < array.length){
		sum = reducer(sum, array[i++]);
	}
	return sum;
}

// let testreducer = (accumulator, currentValue) => accumulator * (1 + currentValue);
// testFunction(myReduce(testArray, testreducer, 1));

// includes()

// Without using the native “Array.prototype.includes” method of JavaScript, 
// compose a function titled “myIncludes” that will take in an array of elements and indicates whether or not a target element is contained within the input array. This returns a boolean.

function myIncludes(array, target){
	return mySome(array, element => element === target);
}

//testFunction(myIncludes(testArray, 2));

//indexOf()

// Without using the native “Array.prototype.indexOf” method of JavaScript, 
//compose a function titled “myIndexOf” that will take in an array of elements and returns the index of the first encounter of a target element (if it is found) or -1 if that element does not exist within the input array.
function myIndexOf(array, target){
	let i = 0;
	while (i < array.length){
		if (array[i] === target){
			return i;
		}
		else {
			i++;
		}
	}
	return -1;
}

// testFunction(myIndexOf(testArray, 6));

// push()

// Without using the native “Array.prototype.push” method of JavaScript, 
// compose a function titled “myPush” that will take in an array of elements as well as an elementToAdd and append that element to the end of the array.

function myPush(array, elementToAdd){
	array[array.length] = elementToAdd;
}


//lastIndexOf()

// Without using the native “Array.prototype.lastIndexOf” method of JavaScript, 
//compose a function titled “myUnshift” (typo) that will take in an array of elements and returns the index of the last encounter of a target element (if it is found) or -1 if that element does not exist within the input array.

function myUnshift(array, target){
	let i = array.length - 1;
	while (i >= 0){
		if (array[i] === target){
			return i;
		}
		else {
			i--;
		}
	}
	return -1;
}

//testFunction(myUnshift(testArray, 2));

// Object.keys()

// Without using the native “Object.keys()” method of JavaScript, 
// compose a function titled “grabKeys” that will take in an object and return all of the keys of the key:value pairs of that object.

function grabKeys(keyedObject){
	let returnKeys = [];
	for (const key in keyedObject){
		myPush(returnKeys, key);
	}
	return returnKeys;
}

//Object.values()

//Without using the native “Object.values()” method of JavaScript, 
//compose a function titled “grabValues” that will take in an object and return all of the values of the key:value pairs of that object.

function grabValues(keyedObject){
	let returnValues = [];
	for (const key in keyedObject){
		myPush(returnValues, keyedObject[key]);
	}
	return returnValues;
}
