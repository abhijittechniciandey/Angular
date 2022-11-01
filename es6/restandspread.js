// // rest parameters => packs the values and used in function parameter only
// /*
//  rest parameter  have ... before variable
//  should be the last parameter and there can be only 1 rest parameter

//  */
// function placeorder(...order)
// {
//     console.log('1')
//    // console.log(order)
// }
// function placeorder()
// {
//     console.log('2')
//     //console.log(order)
// }

// placeorder('pizza')
// spread operator
var colors = ['red','green','blue']
var morecolors = ['violet','black']

colors.push(morecolors);
console.log(colors)

var colors1 = ['red','green','blue']
var morecolors1 = ['violet','black']

colors1.push(...morecolors1);
console.log(colors1)

var vowels = [...'AEIOU']
console.log(vowels)



