const pickProps = (obj, arr) => {

    const obj_keys = Object.keys(obj);
    const obj_ret = {};
    arr.forEach(el => {
        if (obj_keys.includes(el)) {
            obj_ret[el] = obj[el];
        }
    })
    return obj_ret;
}