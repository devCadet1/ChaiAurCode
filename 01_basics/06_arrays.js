//  An array is a object that can store multiple values at once. Eg

const arrayName = ['value1', 'value2', 'value3'];
// console.table(arrayName);   
/* output 
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │ 'value1' │
│    1    │ 'value2' │
│    2    │ 'value3' │
└─────────┴──────────┘
*/


const words = ['hello', 'satyam','welcome'];
// console.log(words)
/* output
[ 'hello', 'satyam', 'welcome' ]
*/

// Arrays in JavaScript can be of mixed datatypes

// const data = ['satyam', 24, 'Mumbai', 2023, false]   // array with Number and strings

// console.log(data);  
/* output
[ 'satyam', 24, 'Mumbai', 2023, false ]
*/

// -----------------Accessing the array through index ----------------------//

const myName = ['s','a','t','y','a','m']
// first element
// console.log(myName[0]);   //output-  s

// second element
// console.log(myName[1]);    //output- a


// ----------------------Objects in Arrays----------------------------------//

const info = [{
        name: 'satyam',
        age: 25
    },
    {
        name: 'anisha',
        age: 32
    },
    {
        name: 'saksi',
        age: 24
    }
]

// console.log(info);


/* 
output
    [
  { name: 'satyam', age: 25 },
  { name: 'anisha', age: 32 },
  { name: 'saksi', age: 24 }
]
*/

// console.log(info.length);   // 3

const array = [1,2,3,4,5,6]

array.push()

console.log(array);