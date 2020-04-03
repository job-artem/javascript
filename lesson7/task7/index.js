const increaseEvenEl = (arr, delta) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.map(el => el + delta);
}