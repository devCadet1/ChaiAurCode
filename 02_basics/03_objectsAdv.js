//  const user = {}       // singleton object
//  or we can also write

const user = new Object() 

user.id = '123abc'
user.name = 'satyam'
user.isLoggedIn = false

// console.log(user);  // { id: '123abc', name: 'satyam', isLoggedIn: false }

//  declare objects in a object

const userDetails = {
    email: 'some@gmail.com',
    fullName: {         
        userFullName: {
            firstName: 'satyam',
            lastName: 'karn'
        }    
    }
}

console.log(userDetails.fullName);   // { userFullName: { firstName: 'satyam', lastName: 'karn' } }
console.log(userDetails.fullName.userFullName);     // { firstName: 'satyam', lastName: 'karn' }


// Combining two objects

const obj1 = {1: 'a' , 2: 'b'}
const obj2 = {3: 'c' , 4: 'd'}

const obj3 = Object.assign(obj1,obj2)
console.log(obj3);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }