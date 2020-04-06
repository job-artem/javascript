const addPropertyV1 = (obj, key, value) => {
    obj[key] = value;
    return obj;
}

const addPropertyV2 = (obj, key, value) => {
    const copy = {
        [key]: value,
    };
    obj = Object.assign(copy, obj);
    return obj;
}

const addPropertyV3 = (obj, key, value) => {
    let copy = {
        [key]: value,
    };
    copy = Object.assign(copy, obj);
    return copy;
}

const addPropertyV4 = (obj, key, value) => {
    const objClone = {...obj };
    objClone[key] = value;
    return objClone;
}