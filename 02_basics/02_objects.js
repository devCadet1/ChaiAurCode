//  singleton

// Object.create   // connstructor method creates a Singleton object

//  object literals


const JsUser = {
    name: "satyam",      // 'name' is a 'key' and 'satyam' is the 'value'     // here name is considered as a string.... i.e.  "name" : "satyam" 
    age: 25,
    sex: "male",
    city: "thane",
    isWorking: true,     // boolean values can be added in object
    lastLoginDays: ["monday", "Wednesday", "Friday"]    // we can also include arrays in the Object
}

console.log(JsUser.name)    // satyam
console.log(JsUser.age)     // 25
console.log(JsUser.city)    // thane
console.log(JsUser.sex)     // male
console.log(JsUser.isWorking);  // true
console.log(JsUser.lastLoginDays);      // [ 'monday', 'Wednesday', 'Friday' ]

// Another way to access the objects

console.log(JsUser["name"])    // satyam
console.log(JsUser["age"])     // 25
console.log(JsUser["city"]);   // thane
console.log(JsUser["isWorking"]);   // true
console.log(JsUser["sex"]);     // male
console.log(JsUser["lastLoginDays"]);     // [ 'monday', 'Wednesday', 'Friday' ]



// To overwrite the values of the object

JsUser.name = 'satyam karn'
console.log(JsUser.name);   // satyam karn


//  To add a value in the object 

JsUser.email = 'satyam@gmail.com'

console.log(JsUser)
//   {
//   name: 'satyam karn',
//   age: 25,
//   sex: 'male',
//   city: 'thane',
//   isWorking: true,
//   lastLoginDays: [ 'monday', 'Wednesday', 'Friday' ],
//   email: 'satyam@gmail.com'
// }

//  to freeze the object 

// Object.freeze(JsUser)

//  AFter freezing the Object, the further changes will not propogate in the object


// Adding a function into object

JsUser.greeting = function () {
    console.log("Hello JS User");
}

JsUser.greet = function () {
    console.log(`Hello JS User ${this.name}`)
}

JsUser.greet()  // Hello JS User satyam karn