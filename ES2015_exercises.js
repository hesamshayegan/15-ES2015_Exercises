// Arrow functions 
// 1
const double = arr => arr.map(val => val * 2);

// 2
const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0)


// Rest & Spread
// 1

const filterOutodds = (...nums) => nums.filter( num => num % 2 === 0);



// 2 (use of rest and spread together)
const findMin = (...num) => Math.min(...num)
    //...num spread indivual element of the array num into Math.min as its argument  


// 3

const mergeObjects = (obj1,obj2) => ({...obj1, ...obj2})


// 4

const doubleAndReturnArgs = (arr,...nums) => [...arr,...nums.map (v => v * 2)];


// 5
/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length)
        return [...items.slice(0 , idx), ...items.slice( idx+1 )]
}

const extend = (array1, array2) => {
    return ([...array1, ...array2] )
}

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
        return newObj   
}

const  removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
        return newObj
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2}       
}

const update = (obj, key, val) => {
    const newObj = {...obj}
    newObj[key] = val
            return newObj
}

// Object Enhancements Exercise
// 1
function createInstructor(firstName, lastName){ 
    return {
            firstName,
            lastName
            }
}

// 2
const favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!" 
}

// 3
const instructor2 = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return this.firstName + " says bye!";
    }
  }


// 4
function createAnimal(species, verb, noise){
    return {
      species,
      [verb](){
        return noise;
      }
    }
  }

// Destructuring Exercise

// 1)
// 8
// 1846

// 2)
// {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// 3)
// 'Your name is Alejandro and you like purple'
// 'Your name is Melissa and you like green'
// 'Your name is undefined and you like green'

// 4)
// Maya
// Marisa
// Chi

// 5)
//  Raindrops on roses
//  whiskers on kittens
//  ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']

// 6)
// [10, 30, 20]

// 7)
const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };

const {numbers: {a}} = obj;
const {numbers: {b}} = obj;

// 8)
const arr = [1,2];
const temp = arr[0]

[arr[0], arr[1]] = [arr[1], arr[0]]

// 9)

// function raceResults([first, second, third, ...rest]) {
//     return {
//         first,
//         second,
//         third,
//         rest
//     }
// }

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
    

// Maps and Sets
// 1)
// {1,2,3,4}

// 2)
// "ref"

// 3)
// {[1,2,3]=> true, [1,2,3]=> false}

// 4)

const hasDuplicate = arr => new Set(arr).size !== arr.length

// 5)
function vowelCount(str) {
    const vowels = 'aeiou';
    const strV= new Map();
    
    for (let char of vowels) {
        for (let s of str) {
            if (s.indexOf(char) !== -1) {
                if (strV.has(char)) {
                    strV.set(char, strV.get(char) + 1) 
                }
                else {
                    strV.set(char, 1)
                }
            }
        }
    }
                return (strV);
}



