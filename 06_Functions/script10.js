const arr1=[5,4,3,2,1]
arr1[0] = 10 
console.log(arr1)

//function expression
const doSomething = function(n1, n2, n3){
    return n1 + n2 + n3
}

console.log(doSomething(5,2,1));



//named function expression
const findSum = function sum(n){
    if(n <=1 )
    return 1
    else return n + sum(n-1)//5 + sum(4) + sum(3) + sum(2) + sum(1) /// 5+4+3+2+1
} 

console.log(findSum(5)) //15


// function area(width, height){
//     return width*height
// }


// area => width * height
// console.log(area(3,6))

// function helloSomeone(name){
//     return `Hello, ${name}`;
// }


// const random = (param, param, ...) => {

//     statement 1

//     statement 2

//     statement 3

//     return value;

// }


//โจทย์
//all example function all function declaration
//1.
// function helloSomeone(name) {
//     return `Hello, ${name}`;
//   }

  
//   //2.
//   function area(width, height) {
//     return width * height;
//   }
  
//   //3.
//   function evenNum(num) {
//     if (num % 2 === 0) return true;
//     else return false;
//   }

const helloSomeone = name => `Hello, ${name}`;

console.log(helloSomeone('yok'));

const area = (width,height) => width*height;
console.log(area(5,4))

const evenNum = num => (num % 2 === 0) //? true : false;



//-----------------------------------------------------
function helloSomeone(name) {
    let greeting = `Hello`;
    return `${greeting} ${name}`;
  }
  //greeting and num are local variables, you can refer only inside function
