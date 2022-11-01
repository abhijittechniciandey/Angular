// var no = 12;
// no = "akldjas"
// console.log(typeof(no))
// document.write('<p>this is a para</p>')

// var conele = document.getElementById('content')
// conele.innerHTML = `
// <h1>Javascript Trining</h1>
// <p>Let&apos;'s learn</p>

// `
// document.write("1=='1'" + (1=='1')+'<br/>')
// document.write("1==='1'"+ (1==='1')+'<br/>')
// var x;
// console.log(x)
// //alert('hey')
// console.log(4+parseInt('4.4'))

// var val1 = parseInt(prompt('enter a value'));
// console.log(val1)
// var val2 = (prompt('enter a value'));

// console.log(val2)

// console.log(val1+val2)
// console.log(val1-val2)
// console.log(val1*val2)
// console.log(val1/val2)
// console.log(val1**val2)

// arrays
var nos = [1,2,3,4,5,"akdha",true]

// console.log('normal for')
// for(var i=0;i<nos.length;i++)
//     console.log(nos[i])
// console.log('for of')

// // for-in
// for(var n in nos)
// console.log(n)

// // for-of
// for(var n of nos)
// console.log(n)
// console.log('for in')

nos[100] = 20;
console.log(nos)

var emp = {'c1':1,'c2':2,'c3':3,'c4':4};
var keys = Object.keys(emp)
console.log(keys)
console.log(Object.entries(emp))
console.log(emp['c1'])
console.log(emp.c2)
console.log(emp[keys[0]])

function greet(name)
{
    return "Wlecone "+name;
}
console.log(greet('Rebit','asdk','asjd',1));

// IIFE - immeidatley invoked function expression
(
    function()
    {
        alert('hey iife');
    }
)();

