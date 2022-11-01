// // array
// var nos=[1,2,3,4,5]
// var a = nos[0];
// var [a,b,c,d,e,f] = nos;
// console.log(a,b,c,d,e,f)

// // json
// let employee = {name:'shalini',city:'Mumbai',phone:873483244}
// //let name = employee.name

// let {name:ename, city, phone} = employee;
// console.log(ename, city, phone)

let obj1 = {'k1':1}
let obj2 = {...obj1};
obj2['k1'] = 10;
console.log(obj1)
console.log(obj2)