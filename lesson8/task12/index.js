const getAdults = (obj) => {
    const returnObj = {};
    for (key in obj) {
        if (obj[key] >= 18) {
            returnObj[key] = obj[key];
        }
    }
    return returnObj;
}