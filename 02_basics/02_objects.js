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