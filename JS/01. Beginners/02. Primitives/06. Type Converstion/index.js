let amount = 100;
let money = "100.123";
let floatValue = "99.5";

// - Convert string to number
 amount = parseInt(amount);
 amount =+ amount;
 amount = Number(amount)

//  - Convert number to string
money = money.toString();
money = String(money);

// - Change string to decimal
floatValue = parseFloat(floatValue);
console.log('parseFloat : ',floatValue);
console.log('parseInt : ',amount);

console.log('money : ',money);
