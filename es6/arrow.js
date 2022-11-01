function square(no)
{
    return no*no;
}

function message()
{
    console.log('some messages')
}

// arrow functions
// () => {}
var message = (desc) => {
    console.log(desc)
    console.log('some message delivered')
}
message('heres comes the description');

var square = (n) => {return n*n;}
var square = (n) => n*n;

function calculate(arr, func)
{
    for(var a of arr)
        console.log(func(a));
}

calculate([6,5,1,2,34], (v) => v*v)