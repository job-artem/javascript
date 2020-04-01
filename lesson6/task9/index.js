function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    new_arr = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        new_arr.unshift(arr[i]);
    }
    return new_arr;

}