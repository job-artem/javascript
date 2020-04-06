function isEmpty(obj) {
    for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
    }
    return true;
  }

const getAdults = (obj) => {
    if(isEmpty(obj)){
        return {};
    }
    ret_obj = {};
    
    obj_keys = Object.keys(obj);
    obj_keys.forEach(key=> {
        if(obj[key] >= 18){
            ret_obj[key] = obj[key];
        }
    })
    return ret_obj;
    
}