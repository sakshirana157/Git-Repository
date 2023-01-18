//js object to json object : JSON.stringify()
//json object to js object : JSON.parse()

let x={fname:'micky', empid:1, salary:900000, address:{hno:1, city:'New Delhi', state:'Delhi'}}
let y=JSON.stringify(x);
let z=JSON.parse(y);
x.address.hno=5;
console.log(z);