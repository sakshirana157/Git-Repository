let x={fname:'micky', empid:1, salary:900000, address:{hno:1, city:'New Delhi', state:'Delhi'}}
let y={...x};
console.log(x);
console.log(y);
y.address.hno=2;
console.log(x.address);
console.log(y.address);