const addPropertyV1 = (obj, key, value) => {
    obj[key] = value;
    return obj;
}

const addPropertyV2 = (obj, key, value) => {
    const copy = { key: value };
    obj = Object.assign(obj, copy);
    return obj;
}

const addPropertyV3 = (obj, key, value) => {
    const copy = { key: value };
    copy = Object.assign(obj, copy);
    return copy;
}

const addPropertyV4 = (obj, key, value) => {
    const objClone = {...obj };
    objClone[key] = value;
    return objClone;
}