const filterNames = (arr, text) => {
    return arr.filter(el => el.length > 5).filter(el => -1 !== el.indexOf(text));
}