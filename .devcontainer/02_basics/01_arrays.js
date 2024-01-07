//arrays in js

const myArr=[1,2,3,4,5]
const myHeros=["krish","shakktiman","hatori"]

const myArr2=new Array(11,22,33,44,55)
// console.log(myArr2[2]);


//Array methods
// myArr.push(6)
// console.log(myArr);
// myArr.pop() //it will pop last element

myArr.unshift(9) //add 9 at first position and shift all element to right
myArr.shift()// remove first element and shift to left

// console.log(myArr);
myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr=myArr.join()
// console.log(myArr);
// console.log(typeof newArr)

//slice and splice method in array
// console.log("A ",myArr);
// const myn1=myArr.slice(1,3)

// console.log(myn1);
// console.log("B ",myArr);

//splice
console.log("A ",myArr);
const myn2=myArr.splice(1,3)

console.log(myn2);
console.log("B ",myArr);


