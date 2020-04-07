const getAdults = (obj) => {
    copyObj = {...obj };
    let returnObj = {};
    for (key in copyObj) {
        if (copyObj[key] >= 18) {
            returnObj[key] = copyObj[key];
        }
    }
    return returnObj;
}