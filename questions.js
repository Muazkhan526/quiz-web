// Question 1
<<<<<<< Updated upstream

function findPair(numbers, target) {
  const seenNumbers = {};
  for (let i = 0; i < numbers.length; i++) {
 const difference = target - numbers[i];
if (seenNumbers[difference]) {
      return [difference, numbers[i]];
    }seenNumbers[numbers[i]] = true;
  }return null;
}
console.log(findPair([1, 2, 3, 4], 5));
  
  // Question 2

  let str = "hello";
  function reverseString(str) {
      return str.split("").reverse().join("");
    }
    console.log(reverseString(str));
    
  // Question 3

  function sumLargest(arr) {
    const sortedArr = arr.sort((a, b) => b - a);
    return sortedArr[0] + sortedArr[1];
  }
  console.log(sumLargest([1, 2, 3, 4]));
  
  // Question 4

  let name = ["hi", "hello", "hey", "howdy"];
  function filterStrings(name) {
    let filteredArr = [];
    for (let i = 0; i < name.length; i++) {
      if (name[i].length > 3) {
        filteredArr.push(name[i]);
      }
    }return filteredArr;
  }
  console.log(filterStrings(name));
    
  // Question 5

  let number = [1, 2, 3, 4, 5, 6];
  function filterEven(number) {
=======

let arr = ([1, 2, 3, 4],5);
function findPair(number, target) {
  let complement = new Set();
  for (let i = 0; i < number.length; i++) {
    if (complement.has(arr[i])) {
      return [number[i], target - number[i]];
    }
    complement.add(target - number[i]);
  } return null;
}
console.log(findPair(number, target));
  
  // Question 2

  let str = "hello";
  function reverseString(str) {
      return str.split("").reverse().join("");
    }
    console.log(reverseString(str));
    
  // Question 3

  let value = [1, 2, 3, 4];
  function sumLargest(value) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < value.length; i++) {
      if (value[i] > largest) {
        secondLargest = largest;
        largest = value[i];
      } else if (value[i] > secondLargest) {
        secondLargest = value[i];
      }
    }return largest + secondLargest;
  }
  console.log(sumLargest(value));
  
  // Question 4

  let name = ["hi", "hello", "hey", "howdy"];
  function filterStrings(name) {
    let filteredArr = [];
    for (let i = 0; i < name.length; i++) {
      if (name[i].length > 3) {
        filteredArr.push(name[i]);
      }
    }return filteredArr;
  }
  console.log(filterStrings(name));
    
  // Question 5
  let number = [1, 2, 3, 4, 5, 6];
  function filterEvenNumbers(number) {
>>>>>>> Stashed changes
    let filteredArr = [];
  
    for (let i = 0; i < number.length; i++) {
      if (number[i] % 2 === 0) {
        filteredArr.push(number[i]);
      }
    }return filteredArr;
  }
<<<<<<< Updated upstream
  console.log(filterEven(number));
  
  // Question 6
=======
  console.log(filterEvenNumbers(arr));
>>>>>>> Stashed changes

  function pluck(arrayOfObjects, keyName) {
    const pluckedValues = arrayOfObjects.map(function(obj) {
      return obj[keyName];
    });  
  console.log(pluckedValues);
  }
  pluck([{name: "John", age: 30}, {name: "Jane", age: 25}], "name");
  
  // Question 7

  function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
       return false;
      }
    }return true;
  }
  console.log(isPalindrome("racecar"));
  
  // Question 8
  
  function mostFrequent(str) {
    const charFrequencies = {};
    for (let i = 0; i < str.length; i++) {
      if (charFrequencies[str[i]]) {
        charFrequencies[str[i]]++;
      }else {
        charFrequencies[str[i]] = 1;}}
    let mostFrequentChar = null;
    let highestFrequency = 0;
    for (const char in charFrequencies) {
      if (charFrequencies[char] > highestFrequency) {
        mostFrequentChar = char;
        highestFrequency = charFrequencies[char];}}
    console.log(mostFrequentChar);
  }
  mostFrequent("hello world");
  
// Question 9

function stringLengths(arr) {
  const lengthsArr = [];
    for (let i = 0; i < arr.length; i++) {
      lengthsArr.push(arr[i].length);
    }return lengthsArr;
  }
  console.log(stringLengths(["hi","hello","hey","howdy"]));
  
  // Question 10

  function firstGreater(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 10) {
        return i;
      }
    }
  }
  console.log(firstGreater([1, 5, 15, 20]));

module.exports = {
  findPair,
  reverseString,
  sumLargest,
  filterStrings,
  filterEven,
  pluck,
  isPalindrome,
  mostFrequent,
  stringLengths,
  firstGreater    
}
