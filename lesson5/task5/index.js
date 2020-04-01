let getSum = (begin, end) => {
    sum = 0;
    for (let summator = begin; i <= end; i++) {
        if (summator % 2 === 0) {
            sum = sum + summator;
        } else {
            continue;
        }
    }
    return sum;
}