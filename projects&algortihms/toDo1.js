// //Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

let myNumber = 42;
let myName = "ChatGPT";

[myNumber, myName] = [myName, myNumber];

console.log(myNumber, myName);

// // Print integers from -52 to 1066 using a FOR loop.

for (let i = -52; i <= 1066; i++) {
  console.log(i);
}

// // Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
function beCheerful() {
  console.log("good morning!");
}

for (let i = 1; i <= 98; i++) {
  beCheerful();
}

// // Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for (let i = -300; i <= 0; i++) {
  if (i === -3 || i === -6) {
    continue;
  }
  if (i % 3 === 0) {
    console.log(i);
  }
}

// // Print integers from 2000 to 5280, using a WHILE.

let i = 2000;

while (i <= 5280) {
  console.log(i);
  i++;
}

// //  If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...."
// let birthMonth = 3;
// let birthDay = 22;

function checkBirthday(a, b) {
  if (
    (a === birthMonth && b === birthDay) ||
    (a === birthDay && b === birthMonth)
  ) {
    console.log("How did you know?");
  } else {
    console.log("Just another day...");
  }
}

// // Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

// // Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
let count = 0;
for (let i = 512; i <= 4096; i++) {
  if (i % 5 === 0) {
    console.log(i);
    count++;
  }
}
// console.log("Count: " + count);

// // Print multiples of 6 up to 60,000, using a WHILE.

// let a = 6;

// while (a <= 60000) {
//   console.log(a);
//   a += 6;
// }

// // Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
for (let i = 1; i <= 100; i++) {
  if (i % 10 === 0) {
    console.log("Coding Dojo");
  } else if (i % 5 === 0) {
    console.log("Coding");
  } else {
    console.log(i);
  }
}

// // Your function will be given an input parameter incoming. Please console.log this value.
// function printValue(incoming) {
//   console.log(incoming);
// }
// // Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
let sum = 0;
for (let i = -300000; i <= 300000; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log(sum);

// // Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
let num = 2016;
while (num > 0) {
  console.log(num);
  num -= 4;
}

// // Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

function printMultiples(lowNum, highNum, mult) {
  for (let i = highNum; i >= lowNum; i--) {
    if (i % mult === 0) {
      console.log(i);
    }
  }
}

printMultiples(2, 9, 3);

// // This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

function flexibleCountdown(param1, param2, param3, param4) {
  let i = param2;
  while (i <= param3) {
    if (i === param4) {
      i += param1;
      continue;
    }
    if (i % param1 === 0) {
      console.log(i);
    }
    i += param1;
  }
}

flexibleCountdown(3, 5, 17, 9);

// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

function countdown(num) {
    let arr = [];
    for (let i = num; i >= 0; i--) {
        arr.push(i);
    }
    console.log(arr);
    console.log("Array length: " + arr.length);
}

// Your function will receive an array with two numbers. Print the first value, and return the second.
function printAndReturn(arr) {
    console.log(arr[0]);
    return arr[1];
}
//Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlusLength(arr) {
    return arr[0] + arr.length;
}

// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

function printGreater(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            console.log(arr[i]);
            count++;
        }
    }
    return count;
}

console.log(printGreater([1,3,5,7,9,13]));

// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

function greaterThanSecond(arr) {
    if (arr.length < 2) {
        console.log("Array is too short.");
        return;
    }
    let newArr = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            newArr.push(arr[i]);
            count++;
        }
    }
    console.log("New Array: " + newArr);
    console.log("Count: " + count);
    return newArr;
}

// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
function jinx(num1, num2) {
    if (num1 === num2) {
        console.log("Jinx!");
        return;
    }
    let arr = [];
    for (let i = 0; i < num1; i++) {
        arr.push(num2);
    }
    return arr;
}

//  Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

function sizeCheck(arr) {
    if (arr[0] > arr.length) {
        console.log("Too big!");
    } else if (arr[0] < arr.length) {
        console.log("Too small!");
    } else {
        console.log("Just right!");
    }
}

// Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
function fahrenheitToCelsius(fDegrees) {
    let celsius = (fDegrees - 32) * (5/9);
    console.log(celsius)
    return celsius;
}

fahrenheitToCelsius(3);

