// Dates in Javascript - Date are objects created in JS 

let myDate = new Date()
// console.log(myDate);   // 2023-06-10T09:20:25.628Z     - complicated output
// console.log(myDate.toString());  //  Sat Jun 10 2023 09:21:38 GMT+0000 (Coordinated Universal Time)    - simple output

// console.log(myDate.toISOString());
 
// console.log(myDate.toLocaleString());    // 6/10/2023, 9:23:36 AM

// console.log(myDate.toDateString());     // Sat Jun 10 2023

// console.log(typeof myDate);  // ans - outpput    (Interview ques)

// -----------------------------------SPECIFIC FORMATS --------------------------------------------------

// let createdDate = new Date(2023,0,5);   // 2023 is year | 0 stands for January in Date | 5 is date  

// console.log(createdDate.toDateString());   // Thu Jan 05 2023    

//  we can speccify the format further by adding more parameters in the date ()...for eg

// let newDate = new Date(2023,2,6,4,30) // 2023 - year | 2 - Month(march) | 6 - date | 4 - hour | 30 min

// console.log(newDate.toLocaleString());   // 3/6/2023, 4:30:00 AM


// yyyy-mm-dd

let date = new Date ("2015-03-20")
// console.log(date.toDateString());  // Fri Mar 20 2015   here Jan starts from 1 and not 0

// mm-dd-yyyy

let date1 = new Date("07-08-1997")
// console.log(date1.toDateString()) // Tue Jul 08 1997

//----------------------------------------TIME STAMPS ---------------------------------------

let myTimeStamp = Date.now()

console.log(myTimeStamp);