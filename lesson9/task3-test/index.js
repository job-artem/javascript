const getCustomersList = (obj) => {
    const arrEntries = Object.entries(obj);
    arrEntries.forEach(el => {
        el.push(el[1].name);
        el.push(el[1].age);
        el.splice(1, 1);
    })
    arrEntries.sort((a, b) => a[2] - b[2])
    const resArr = [];
    arrEntries.forEach(el => {
        id = el[0];
        name = el[1];
        age = el[2];
        resArr.push({ name, age, id });
    })
    return resArr;
}