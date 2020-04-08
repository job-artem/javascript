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
    const arrCustomers = Object.entries(obj);
    console.log(arrCustomers);
    const objElem = {};
    const arrFormatted = [];
    arrCustomers.forEach(el => {
        name = el[1].name;
        age = el[1].age;
        id = el[0];
        arrFormatted.push({ name, age, id });
    });
    // console.log(arrFinal);
    arrCopy = [...arrFormatted];
    const sortedArray = [];
    while (arrCopy.length > 0) {
        const minAgeIndex = findMinAgeIndex(arrCopy);
        sortedArray.push(arrCopy[minAgeIndex]);
        arrCopy.splice(minAgeIndex, 1);
    }
    console.log(sortedArray);
}