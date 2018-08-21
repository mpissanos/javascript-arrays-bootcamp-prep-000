var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element ){
 var newArr = [...element, array]
   
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  var newArr = [array, ...element]
  
}


function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
}