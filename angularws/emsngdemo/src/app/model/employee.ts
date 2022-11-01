//https://codebunk.com/b/7481100535422/
export interface Employee{
    eid:number,
    ename:string,
    email:string,
    phone:string,
    password?:string,
    address:{
        city?:string,
        country:string,
        zipcode?:number
    }
}

// interface Employee{
//     name:string,
//     city?:string
// }

// function display(data:Employee)
// {
//     console.log(data.name)
// }
// display({name:''})