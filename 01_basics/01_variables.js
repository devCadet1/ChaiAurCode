const accountId = 14452
let accountEmail = "devCadet@gmail.com" // let is used widely
var accountPassword = "devCadet"
accountCity = "Goa"  // this can be declared without var or let...but it is not recommended
let accountState;

// accountId = 45 // not allowed as it was declared using const
console.log(accountId);


accountEmail = "devCadet123@gmail.com"
accountPassword = 4587
accountCity = "Bombay"

console.table([accountEmail, accountId, accountPassword, accountCity,accountState])

/*
    Prefer not to use 'var' 
    because of issue in block scope and functional scope
*/