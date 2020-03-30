const m = 2;
const n = 24;
let res = 0;
for (let i = m; i <= n; i++) {

    if (i % 5 !== 0 && i % 2 !== 0 && i % 3 !== 0 && i % 4 !== 0) {
        continue;
    }
    if (i % 5 === 0) {
        console.log(i);
        continue;
    }
    if (i % 2 === 0 && i % 4 !== 0) {
        res = res + i;
    }
    if (i % 3 === 0) {
        res = res - i;
    }
    if (i % 4 === 0) {
        res = res * i;
    }
}
result = res;