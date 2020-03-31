const m = 3;
const n = 10;
let result = 0;
for (let i = m; i <= n; i++) {
    if ((i % 2 == 0) && (i % 4 !== 0)) {
        if (i % 5 == 0) {
            console.log(i)
            continue;
        } else {
            result = result + i;
            continue;
        }
    } else if (i % 3 == 0) {
        if (i % 5 == 0) {
            console.log(i)
            continue;
        } else {
            result = result - i;
            continue;
        }

    } else if (i % 4 == 0) {
        if (i % 5 == 0) {
            console.log(i)
            continue;
        } else {
            result = result * i;
            continue;
        }

    } else if (i % 5 == 0) {
        console.log(i)
        continue;
    } else {
        continue;
    }
}