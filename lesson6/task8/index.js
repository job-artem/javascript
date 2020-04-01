function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) {
        return null;
    }
    if (Array.isArray(arr)) {
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] % 2 === 0) {
                arr[i] = arr[i] + delta;
            } else {
                continue;
            }
        }
        return arr
    }

}