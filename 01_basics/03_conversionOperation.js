let score = "25as"  //string
let age = 34

console.log(typeof(score)); // first way written using method method
console.log(typeof age)  // second way 


let scoreOfStudent = Number(score)  // here type is converted of Score from string to number
console.log(typeof scoreOfStudent); 

console.log(scoreOfStudent);  // output will be: NaN (not a number)



/*  
NOTES

"33" => 33
"33abc" => NaN
"satyam" => NaN
true => 1
false => 0

*/

// Number converted in to a String
let someNumber = 33 
let stringNumber =String (someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)