// ---------------------ARROW Functions---------------------

// function expression (normal function)
// function add(n,m) {
    // return n + m
// }

// console.log(add(2,3))   // 5


// Arrow Function  () => {}

const addition = (a , b) => {
    console.log( a + b    )
}

// addition(4,4)   // 8

// more ways to write a ArrowFunc

const square = (num) => num*num

// console.log(square(4))  // 16


// const sub = (n1, n2) => {
//     return n1 - n2;
// }

// console.log(sub(10,2));  // 8

// we can alos write arrow function as

const mul = (m1,m2) => {return m1 * m2}   

// console.log(mul(6,6))



// ---------------------CallBack Functions---------------------

//  A callback is a function passed as an argument to another function.

// eg1
function greet(name,callMe) {       // callMe is a callback function passed as an argument here
    console.log(`Hello ${name}. Welcome to GenZW`);
    callMe();
}

function callMe () {     // call back function
    console.log('How can we help you today');
}

// greet("satwik", callMe)    // calling function greet


// eg2

function details(name, totalMarks) {
    console.log(`Hey ${name} you have scored ${totalMarks()}`);
    totalMarks()

}

function totalMarks () {
    return 5 + 5 + 5 + 5
}

// details('Rohan', totalMarks)

// eg3

const calc = (a,b,operation) => {
    return operation(a,b)
}

const add = calc(4,2,function(n1,n2) {
    return n1 + n2;
})

console.log(add);

const sub = calc(4,1, function(a,b) {
    return a - b
})

console.log(sub);

