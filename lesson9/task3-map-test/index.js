const getCustomersList = (obj) => {
    const arrArr = [];
    Object.entries(obj).map(el => {
        let [id, { name, age }] = el;
        arrArr.push([name, age, id]);
    });
    arrArr.sort((a, b) => {
        let [, ageA, ] = a, [, ageB, ] = b;
        return ageA - ageB;
    });
    const resArr = [];
    arrArr.map(el => {
        let [name, age, id] = el;
        resArr.push({ name, age, id });
    });
    return resArr;
}