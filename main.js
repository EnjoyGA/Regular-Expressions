'use strict';

// new RegExp('pattern', 'flags');
// /pattent/f

// flags 
// i - as register (one element)
// g - global search
// m - multiline mode

// classes
// \d - number
// \w - word or letter
// \s - space
// \D - not number
// \W - not word or letter
// \S - not space

const px = prompt('size');
console.log(px.match(/\d/g));
// console.log(str.match(/\w\d\w\d/g)); - pattern

// methods
// .search() - search one element
// .match() - search more element
// .replace() - replace element

// const pass = prompt('Enter password');
// const reg = /n/ig;
// console.log(reg.test(pass)); - return bool
// console.log(pass.replace(/\./g, "*"));  /./ - means all elements

// console.log('12-34-56'.replace(/-/g, ':'));
