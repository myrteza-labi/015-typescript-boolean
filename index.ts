// NOT operator
const pending: boolean = true;
const notPending = !pending; // false

// AND operator
const hasError: boolean = false;
const completed: boolean = true;

// OR operator
let result = completed && hasError; 
console.log(result); // false

console.log(result); // true

const changeStatus = (status : boolean) : boolean => {
    return status; 
}; 

/*
TypeScript boolean type has two values true and false.
Use the boolean keyword to declare boolean variables.
Do not use Boolean type unless you have a good reason to do so.
 */