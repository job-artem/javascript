const flatArray = initArray => {
    let flattedArray = initArray
        .reduce((acc, elem) => {
            return acc.concat(elem);
        }, []);
    return flattedArray;
};