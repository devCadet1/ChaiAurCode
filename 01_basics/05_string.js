const name = "satyam"   //declaration of string
const repoCount = 50

// console.log("My name is "+ name + " and I have " + repoCount + " repos on GitHub" );

// console.log(`Hey I am ${name} and there are ${repoCount} repos on my GitHub`);     //string interpolation



//declaration of string - another way

const portfolioName = new String ('devcadet')
// console.log(portfolioName);     // output [String: 'devcadet']

// console.log(portfolioName.length)
// console.log(portfolioName.toUpperCase()); 

//check different methods of String like toLowerCase, length etc

console.log(portfolioName.charAt(3))   // shows the char at index 3

console.log(portfolioName.indexOf('t'));

const newSrting = portfolioName.slice(0,3)
console.log(newSrting);  

const user = "     Satyam     "   //when you have to remove the unwanted spaces from String...use trim() method

console.log(user.trim());     // we can use trimStart and trimEnd too


const url = "https://satyam.com/satyam%20karn"

console.log(url.replace('%20' , '-'))   // replaces with hiphen(-)

// to check whether string inlcudes some particular char

console.log(url.includes('dev'))   //false

console.log(url.includes('karn'))  //true


// Learn more about Strings at 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'

