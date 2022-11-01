var invoices =[
    {invno:1, invdate:'22/10/2002',invamt:100, custemail:'a@a.com'},
    {invno:2, invdate:'22/10/2002',invamt:800, custemail:'b@a.com'},
    {invno:3, invdate:'22/10/2002',invamt:500, custemail:'c@a.com'},
    {invno:4, invdate:'22/10/2002',invamt:250, custemail:'a@a.com'},
    {invno:5, invdate:'22/10/2002',invamt:50, custemail:'b@a.com'},
]

var totalamt = {}

for(var invoice of invoices)
{
    var email = invoice.custemail;
    if(totalamt[email] === undefined)
    {
        totalamt[email] = invoice.invamt;
    }
    else{
        var amt = totalamt[email]
        amt += invoice.invamt;
        totalamt[email] = amt;
    }
}
console.log(invoices)
console.log(totalamt)