function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let el of arr) {
        if (el % 2 === 0) {
            el = el + delta;
        } else {
            continue;
        }
    }
    return arr;
}