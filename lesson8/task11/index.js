const pickProps = (obj, arr) => {
    
    arr_keys = Object.keys(obj);
    obj_ret = {};
    arr.forEach(key =>{
        arr_keys.forEach(el=> {
            if(el === key){
                obj_ret[key] = obj[key];
            }
        })
    })
    return obj_ret;
}
