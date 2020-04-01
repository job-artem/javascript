function checkSum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let sum = 0;
    for (let el of arr) {
        sum += el;
    }
    return sum > 100 ? true : false;
}