function getArrayBounds(arr) {
    if (Array.isArray(arr)) {
        boundsArr = [arr.length, arr[0], arr[arr.length - 1]];
        return boundsArr;
    } else {
        return null;
    }
}