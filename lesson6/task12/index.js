function sortAsc(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    if (Array.isArray(array)) {
        while (true) {
            let count = 0;
            for (let i = 0; i < array.length; i++) {
                if (i + 1 > array.length - 1) {
                    break;
                }
                if (array[i] > array[i + 1]) {
                    let temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                    count++;
                }
            }
            if (count === 0) {
                break;
            }
        }
        return array;
    }
}

function sortDesc(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    if (Array.isArray(array)) {
        while (true) {
            let count = 0;
            for (let i = 0; i < array.length; i++) {
                if (i + 1 > array.length - 1) {
                    break;
                }
                if (array[i] < array[i + 1]) {
                    let temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                    count++;
                }
            }
            if (count === 0) {
                break;
            }
        }
        return array;
    }
}