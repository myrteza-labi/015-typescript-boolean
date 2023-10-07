// NOT operator
var pending = true;
var notPending = !pending; // false
// AND operator
var hasError = false;
var completed = true;
// OR operator
var result = completed && hasError;
console.log(result); // false
console.log(result); // true
var changeStatus = function (status) {
    return status;
};
/*
TypeScript boolean type has two values true and false.
Use the boolean keyword to declare boolean variables.
Do not use Boolean type unless you have a good reason to do so.
 */ 
