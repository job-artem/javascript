function removeDuplicates(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    if (Array.isArray(array)) {
        for (i = 0; i < array.length - 1; i++) {
            let count = 0;
            for (j = i + 1; j < array.length; j++) {
                if (array[i] === array[j]) {
                    array.splice(j, 1);
                    count++;
                    j--;
                }
            }
            if (count > 0) {
                array.splice(i, 1);
                i--;
            }
        }
        let new_array = [...rest] = array;
        return new_array;
    }
}