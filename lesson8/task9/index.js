const mergeObjectsV1 = (obj1, obj2) => {
    let obj_res = Object.assign({}, obj1, obj2);
    return obj_res;
}

const mergeObjectsV2 = (obj1, obj2) => {
    let obj_res = Object.assign({}, obj2, obj1);
    return obj_res;
}

const mergeObjectsV3 = (obj1, obj2) => {
    let obj_res = {...obj1, ...obj2 };
    return obj_res;
}

const mergeObjectsV4 = (obj1, obj2) => {
    let obj_res = {...obj2, ...obj1 };
    return obj_res;
}