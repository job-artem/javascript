const getAdults = (obj) => {
    ret_obj = {};
    obj_keys = Object.keys(obj);

    obj_values = [];
    for (let i = 0; i < obj_keys.length; i++) {
        obj_values.push(obj[obj_keys[i]]);
    }

    for (let j = 0; j < obj_keys.length; j++) {
        if (parseInt(obj_values[j]) >= 18) {
            ret_obj[obj_keys[j]] = obj_values[j];
        }
    }
    return ret_obj;

}