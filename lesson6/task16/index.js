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
                    j--;
                }
            }
        }
        return array;
    }
}