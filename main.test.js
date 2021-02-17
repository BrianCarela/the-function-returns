/******************
 * YOUR CODE HERE *
 ******************/

let greeting = 'Hello';
let sum = 0;
let prod = 0;

function greet(person){
  greeting = 'Hello, ' + person;
}

function sumOfTwo(one, two){
  sum = one + two;
}

function multiply(one, two, three){
  prod = one * two * three;
}

function sayHi(p){
  return greeting + " " + p + "!";
};

function returnWhatISay(say){
  return say;
}

function divide(one, two){
  return one / two;
}

function remainder(one, two){
  return one%two;
}

/*********************************************************************************************************************

 * CODE BELOW HERE IS FOR INTERNAL USE ONLY! IT ENSURES THAT THE TESTING *
 * CAN READ AND EVALUATE YOUR CODE. *
 * DON'T CHANGE ANYTHING BELOW HERE, PLEASE! *

 *********************************************************************************************************************/

if (typeof greeting === 'undefined') {
  greeting = undefined;
}

if (typeof sum === 'undefined') {
  sum = undefined;
}

if (typeof prod === 'undefined') {
  prod = undefined;
}

if (typeof greet === 'undefined') {
  greet = undefined;
}

if (typeof sumOfTwo === 'undefined') {
  sumOfTwo = undefined;
}

if (typeof multiply === 'undefined') {
  multiply = undefined;
}

if (typeof sayHi === 'undefined') {
  sayHi = undefined;
}

if (typeof returnWhatISay === 'undefined') {
  returnWhatISay = undefined;
}

if (typeof divide === 'undefined') {
  divide = undefined;
}

if (typeof remainder === 'undefined') {
  remainder = undefined;
}

describe('greet', () => {
  it(`multiplies x by the given parameter'`, () => {
    greet('mess')
    expect(greeting).toBe('Hello mess')
  })
});

describe('sumOfTwo', () => {
  it(`runs a modulus operation on y`, () => {
    sumOfTwo(2, 4);
    expect(sum).toEqual(6);
  })
});

describe('multiply', () => {
  it(`sets z to the opposite of the given parameter`, () => {
    multiply(2, 2, 2);
    expect(prod).toBe(8);
  })
});

describe('returnWhatISay', () => {
  it(`makes_greeting_into_a_string_that_yells_the_greeting_at_someone`, () => {
    const returnValue = returnWhatISay('Colin')
    expect(returnValue).toEqual(`Colin`);
  })
});

describe('sayHi', () => {
  it(`makes_greeting_into_a_string_that_yells_the_greeting_at_someone`, () => {
    const returnValue = sayHi('Colin')
    expect(returnValue).toEqual(`Hello Colin!`);
  })
});

describe('divide', () => {
  it(`makes_greeting_into_a_string_that_yells_the_greeting_at_someone`, () => {
    const returnValue = divide(10, 5)
    expect(returnValue).toEqual(2);
  })
});

describe('remainder', () => {
  it(`makes_greeting_into_a_string_that_yells_the_greeting_at_someone`, () => {
    const returnValue = remainder(10, 3)
    expect(returnValue).toEqual(1);
  })
});
