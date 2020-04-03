const cloneArr = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.slice();
}
let arr = [1, 2, 3, 4];