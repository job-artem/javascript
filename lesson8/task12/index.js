const getAdults = (obj) => {
    const returnObj = {};
    for (let key in obj) {
        if (obj[key] >= 18) {
            returnObj[key] = obj[key];
        }
    }
    return returnObj;
}