const getCustomersList = (obj) => {
    const arrEntries = Object.entries(obj);
    arrEntries.forEach(el => {
            el.push(el[1].name);
            el.push(el[1].age);
            el.splice(1, 1);
        }) // Получили двумерный массив
    arrEntries.sort((a, b) => a[2] - b[2]) //Отсортировали по age
    const resArr = [];
    arrEntries.forEach(el => {
        let id = el[0];
        let name = el[1];
        let age = el[2];
        resArr.push({ name, age, id }); // Получили обьект
    })
    return resArr; // вернули массив обьектов
}