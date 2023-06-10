// arrays

const myArr = [0,1,2,3,4,5]

// console.log(myArr);    // [ 0, 1, 2, 3, 4, 5 ]

// console.table(myArr)  
/*
─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │   0    │
│    1    │   1    │
│    2    │   2    │
│    3    │   3    │
│    4    │   4    │
│    5    │   5    │
└─────────┴────────┘

*/

const myHeroes = ['iron-man', 'hulk', 'spider-man']

console.log(myHeroes[0]);  

//  Array methods

myHeroes.push('wonder-woman')   // push method will add element in the end

console.log(myHeroes);   // [ 'iron-man', 'hulk', 'spider-man', 'wonder-woman' ]

myHeroes.unshift('wakanda')  // unshift method will add element in the beginning 

console.log(myHeroes);   // [ 'wakanda', 'iron-man', 'hulk', 'spider-man', 'wonder-woman' ]

myHeroes.pop() // pop method will delete the last element in the array

console.log(myHeroes);  //  [ 'wakanda', 'iron-man', 'hulk', 'spider-man' ]

myHeroes.shift()  // shift method will delete the first element in the array

console.log(myHeroes);  // [ 'iron-man', 'hulk', 'spider-man' ]

console.log(myHeroes.includes('hulk'));   // true

console.log(myHeroes.indexOf('spider-man'));   // 2

console.log(myHeroes.indexOf('capt-america'));  // -1   as element is not in the array

