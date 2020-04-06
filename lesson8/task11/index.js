const pickProps = (obj, arr) => {
    
    arr_keys = Object.keys(obj);

    obj_ret = {};
    arr_keys.foreach(key =>{
        arr.foreach(el=> {
            if(el === key){
                obj_ret[key] = obj[key];
            }
        })
    })
    return obj_ret;
}