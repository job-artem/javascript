function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let new_arr = [];
    for (let el of arr) {
        new_arr.push(el * el);
    }
    return new_arr;
}