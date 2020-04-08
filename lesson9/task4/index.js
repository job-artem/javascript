const getPeople = (obj) => {
    const resArray = [];
    Object.entries(obj).forEach(el => {
        el[1].forEach(inner => {
            resArray.push(inner.name)
        })
    })
    return resArray;
}