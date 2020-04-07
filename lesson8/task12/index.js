const getAdults = (obj) => {
    ret_obj = {};
    obj_keys = Object.keys(obj);

    obj_keys.forEach(key => {
        if (obj[key] >= 18) {
            ret_obj[key] = obj[key];
        }
    })
    return ret_obj;

}