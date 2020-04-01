function removeDuplicates(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    let new_arr = [];
    for (let copy = 0; copy < array.length; copy++) {
        new_arr[copy] = array[copy];
    }
    for (let i = 0; i < new_arr.length - 1; i++) {
        for (let j = i + 1; j < new_arr.length; j++) {
            if (new_arr[i] === new_arr[j]) {
                new_arr.splice(j, 1);
                j--;
            }
        }
    }
    return new_arr;
}