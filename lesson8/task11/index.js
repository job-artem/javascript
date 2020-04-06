const pickProps = (obj, arr) => {
    
    obj_keys = Object.keys(obj);
    obj_ret = {};
    
    arr.forEach(key =>{
        obj_keys.forEach(el=> {
            if(el === key){
                obj_ret[key] = obj[key];
            }
            else{

            }
        })
    })
    return obj_ret;
}
