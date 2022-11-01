
function counter()
{
    var c = 0;
    return function ()
    {
        return ++c;
    }

}
var f = counter()
console.log(f())
console.log(f())
console.log(f())
console.log(f())
console.log(f())
