function removeDuplicates(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    if ((Array.isArray(array)) && (array.length > 0)) {
        for (i = 0; i < array.length - 1; i++) {
            for (j = i + 1; j < array.length; j++) {
                if (array[i] === array[j]) {
                    array.splice(j, 1);
                    i--;
                    j--;
                }
            }
        }
        let new_array = [...rest] = array;
        return new_array;
    }
}