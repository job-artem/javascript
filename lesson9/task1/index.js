const getAdults = (obj) => {
    return Object.entries(obj)
        .filter(el => el[1] >= 18)
        .map(el => el[0])
}