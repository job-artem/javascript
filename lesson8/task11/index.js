const pickProps = (obj, arr) => {
    
    obj_keys = Object.keys(obj);
    obj_ret = {};
    let count = 0;
    arr.forEach(key =>{
        obj_keys.forEach(el=> {
            if(el === key){
                obj_ret[key] = obj[key];
                count++
            }
        })
    })
    if(count === 0){
        return {};
    }
    return obj_ret;
}
