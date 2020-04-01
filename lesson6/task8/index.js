function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) {
        return null;
    }
    if (Array.isArray(arr)) {
        new_arr = [];
        for (let el of arr) {
            if (el % 2 === 0) {
                el = el + delta;
                new_arr.push(el);
            } else {
                new_arr.push(el);
            }
        }
        return new_arr;
    }

}