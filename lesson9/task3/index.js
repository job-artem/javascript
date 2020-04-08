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

const getCustomersList = (obj) => {

    if (Object.keys(obj).length === 0) {
        return [];
    }

    const arrCustomers = Object.entries(obj);
    const arrFormatted = [];
    arrCustomers.forEach(el => {
        name = el[1].name;
        age = el[1].age;
        id = el[0];
        arrFormatted.push({ name, age, id });
    });
    const arrCopy = [...arrFormatted];
    const sortedArray = [];
    while (arrCopy.length > 0) {
        const minAgeIndex = findMinAgeIndex(arrCopy);
        sortedArray.push(arrCopy[minAgeIndex]);
        arrCopy.splice(minAgeIndex, 1);
    }
    return sortedArray;
}