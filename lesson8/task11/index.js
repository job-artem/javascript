// Создайте функцию, которая будет выбирать указанные свойства из объекта
// Основные требования:
// 1.	Функция с именем pickProps должна принимать 2 аргумента
// 1.	Объект как первый аргумент
// 2.	Массив строк во втором аргументе. Массив содержит названия свойств, которые нужно достать из исходного массива
// 2.	Функция должна вернуть объект, который содержит только те свойства, которые перечислены в массиве (['а', 17.1, 'John Doe’] => {а: 'а', '17 Г: 17.1, 'John Doe': 'John Doe'})
// 3.	Пример работы: {а: 1, b: 2, с: 3}, ['а', 'с'] -> {а: 1, с: 3}
// 4.	Если свойство указанно в массиве, но пропущено в объекте, то его в итоговый объект не добавлять
// 5.	Если ф-ция не смогла добавить ни одного свойства, то вернуть пустой объект
// 6.	Исходный объект должен остаться неизменным





const pickProps = (obj, arr) => {

    obj_keys = Object.keys(obj);
    obj_ret = {};
    // let count = 0;
    // arr.forEach(key =>{
    //     obj_keys.forEach(el=> {
    //         if(el === key){
    //             obj_ret[key] = obj[key];
    //             count++
    //         }
    //     })
    // })
    // if(count === 0){
    //     return {};
    // }
    return obj_ret;
}