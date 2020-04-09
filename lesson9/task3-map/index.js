const getCustomersList = (obj) => {
    const resArr = [];
    const arrEntries = Object.entries(obj);
    arrEntries.map(el => {
            el.push(el[1].name);
            el.push(el[1].age);
            el.splice(1, 1);
        }) // Получили двумерный массив
    arrEntries.sort((a, b) => a[2] - b[2]) //Отсортировали по age
    arrEntries.forEach(el => {
        id = el[0];
        name = el[1];
        age = el[2];
        resArr.push({ name, age, id }); // Получили обьект
    })
    return resArr; // вернули массив обьектов
}