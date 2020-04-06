const compareObjects = (obj1, obj2) => {
    const keys1_arr = Object.keys(obj1); //Get key arrays for both objects
    const keys2_arr = Object.keys(obj2);


    const values1_arr = [];
    const values2_arr = [];

    keys1_arr.forEach(el => values1_arr.push(obj1[el]));
    keys2_arr.forEach(el => values2_arr.push(obj2[el]));


    if (keys1_arr.length === keys2_arr.length) { // Comparing keys for both objects
        let counter = 0;
        for (let i = 0; i < keys1_arr.length; i++) {
            if (keys1_arr[i] !== keys2_arr[i]) {
                counter++
            }
            if (values1_arr[i] !== values2_arr[i]) {
                counter++
            }
        }
        if (counter === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}