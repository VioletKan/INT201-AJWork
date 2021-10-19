function printStudents(students) {
  let result = '';
  // iterate through arguments
  let separator = arguments[0];
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
console.log(printStudents('.', 'Adam', 'John', 'Danai'));


function printStudents(sep, students) {
  let result = '';
  // iterate through arguments
  let separator = sep;
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
console.log(printStudents('.', 'Adam', 'John', 'Danai'));

//
function printStudents(sep, firatStd, ...students) {
  let result = ''; //iterate through agruments
  // iterate through arguments
  let separator = sep;
  // for (i = 1; i < arguments.length; i++) {
  //   result += arguments[i] + separator;
  // }
  for(std of students){
    result += std + separator
  }
  return result;
}
console.log(printStudents('.', 'Adam',  'John', 'Danai')); 
console.log('\n');

