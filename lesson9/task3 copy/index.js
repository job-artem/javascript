const getCustomersList = (obj) => {
    if (Object.keys(obj).length === 0) {
        return [];
    }

    const formattedArray = [];
    for (let key in obj) {
        const id = key;
        const name = obj[key].name;
        const age = obj[key].age;
        formattedArray.push({ name, age, id });
    }

    const sortedArray = [];
    while (formattedArray.length > 0) {
        const minAgeIndex = findMinAgeIndex(formattedArray);
        sortedArray.push(formattedArray[minAgeIndex]);
        formattedArray.splice(minAgeIndex, 1);
    }
    return sortedArray;

}

const findMinAgeIndex = (arr) => {
    let min = arr[0].age;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age < min) {
            min = arr[i].age;
            index = i;
        }
    }
    return index;
}