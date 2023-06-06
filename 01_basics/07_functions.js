// A function is a block of code that performs a specific task

// const a = 12;
// const b = 4;

// function sum(a,b) {
//     const sum = a + b
//     console.log(`The sum of a and b is ${sum}`);
// }


// sum(a,b)

// calc

const n1 = 4;
const n2 = 6;

function sum(n1,n2) {
    console.log(`the sum is ${n1 + n2}`);
}

sum(n1,n2)

function sub(n1,n2) {
    console.log(`The difference is ${n1-n2}`);
}

sub(n1,n2)

function mul(n1,n2) {
    console.log(`The product is ${n1*n2}`);
}

mul(n1,n2)


function div(n1,n2) {
    console.log(`The division is ${n1/n2}`);
}

div(n1,n2)



// ------------------------------- Anonymous functions ------------------------------//

// A function declared without any name is called as Anonymous functions

//eg

const fun = function (para1, para2) {     // this is an anonymous function 
    //block of code
    return output
}


// the only difference between an function and function expression (anonymous function) is that a function supports 'Hoisting' but a function exp (anonymous function) doesnot support hoisting. 

// Hoisting - The declaration of functions can be moved to the top of their scope, prior to execution of the code. It would still work. 



// ------------------------------- Nested functions ------------------------------// 


function addSquares (a,b) {

    const squareA = square(a)
    const squareB = square(b)


    function square(num) {

        return num * num;

    }

    return squareA + squareB
}

console.log(addSquares(3,4));