var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array,element){

  return [element,...array];
}
console.log(addElementToBeginningOfArray(chocolateBars, "mars") );

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}
console.log(destructivelyAddElementToBeginningOfArray(chocolateBars,"mars"));

function addElementToEndOfArray(array, element){

  return [...array,element];
}
console.log(addElementToEndOfArray(chocolateBars, "mars") );

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array;
}
console.log(destructivelyAddElementToEndOfArray(chocolateBars,"mars"));

function accessElementInArray(array, index){
  return array[index];
}
console.log(accessElementInArray(chocolateBars,0));

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
console.log(destructivelyRemoveElementFromBeginningOfArray(chocolateBars));

function removeElementFromBeginningOfArray(array){
  return array;
}
console.log(removeElementFromBeginningOfArray(chocolateBars.slice(1,4));
