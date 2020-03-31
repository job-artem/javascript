let sum = 0;
for (let i = 0; i <= 1000; i++) {
    sum = sum + i;
}
let ost = sum % 1234;
let natselo = (sum - ost) / 1234;
natselo > ost ? console.log(true) : console.log(false);