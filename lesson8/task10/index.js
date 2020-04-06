const buildObject = (keysList, valuesList) => {
    const obj = {};
    for (let i = 0; i < keysList.length; i++) {
        obj[keysList[i]] = valuesList[i];
    }
    return obj;
}