let add = (n1,n2) => n1+n2
let sum = add;

let addResult1 = add(10,20)
let addResult2 = sum(10,20)

console.log(`add result1: ${addResult1}`)
console.log(`add result2: ${addResult2}`)

function operator(n1,n2,fn){
    return fn(n1,n2)
}

function multiply(n1,n2){
    return n1*n2
}
let addResult3 = operator(5,3, add)
let multiplyResult = operator(5,3,multiply)

console.log(`add result3: ${addResult3}`)
console.log(`multiplyResult: ${multiplyResult}`)




