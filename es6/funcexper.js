// named functions
function add(a,b)
{
    return a+b;
}
// function expressions

var f = function(s1, s2){
    return s1.length === s2.length;
}

console.log(f('hello','hello'))

function outer()
{
    console.log('in outer')
    var x = 1;
    function inner(x1)
    {
        console.log('x in inner '+x +' x1 '+x1 )
        return inner1;
    }
    function inner1()
    {
        console.log('x in inner '+x )
    }
    return inner;
}
outer()(10)();
console.log('**************\n')
var b = outer();

console.log(b());

function str()
{
    return "hello";
}
