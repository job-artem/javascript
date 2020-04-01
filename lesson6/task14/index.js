function getSubArray(arr, n) {
    let new_arr = [];
    for (let i = 0; i <= n - 1; i++) {
        new_arr[i] = arr[i];
    }
    return new_arr;
}