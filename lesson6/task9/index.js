function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    if (Array.isArray(arr)) {
        new_arr = [];
        for (let i = 0; i <= arr.length - 1; i++) {
            new_arr.unshift(arr[i]);
        }
        return new_arr;
    }
}