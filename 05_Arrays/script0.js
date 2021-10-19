// //object assignment example
// let per1 = { id: 1, name: 'Joe' }; 
// //per1 is an object variable
// // store memory address that point to object properties
// let per2 = per1;

// doSomething(per2); //hoisting, use only var scope
// function doSomething(p) { //p = per2 (memory address of per2 to p)
//   p.name = 'Mary'; //per2.name = 'Mary'
// }
// console.log(per1);
// per2.id = 3;
// console.log(per1);

// //primitive assignment example
// let num1 = 10 //primitive variable store value 10
// let num2 = num1
// doSomething(num2)//num2 = 10
// function doSomething(num){ //num=num2
//     num=20
// }
// console.log(num1) //num1=10
// console.log(num2) //num2=10
// console.log(num)

let arr1 = []
console.log(typeof arr1)
console.log(arr1.length)    

arr1 = [5,2,10,'student' ]//untyped $ unsized
console.log(arr1.length)
console.log(arr1[0])
console.log(arr1[arr1.length-1])
console.log(arr1[  arr1[1]  ]) //10 //[integer expression] //ทำในสุดได้ 2 แล้วเอาเลขออกมา จะเได้เป็น index ที่สอง

//array of objects
let arr2= [{id:1, name:"Adam"},{id:2, name:"Joe"}]
let arr3 = [[1,3,5,7],[2,4,6,8]
  // [(0,0) 1, (0,1) 3, (0,2) 5, (0,3) 7],

  // [(1,0)2, (1,1) 4, (1,2)6,  (1,3) 8]
]
console.log(arr3[1][1]) //เข้าถึง element ที่สองของ array ที่ 2
console.log(arr2[1].name) //เข้าถึง name Joe

let arr4=[0.5, ...arr3,100,...arr2];
console.log(arr4);

arr4[arr4.length - 1].id = 999;
console.log(arr2)

//------------------------------------------------------------------
let letters = [...'Hello world'];
let value = '';
// console.log(letters.entries());

for (let [index, letter] of letters.entries()) {
  console.log(`index: ${index}`);
  console.log(`letter: ${letter}`);
  // if (index % 2 === 0) value += letter; // letters at even indexes
}