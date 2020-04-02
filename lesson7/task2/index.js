const sortDesc = numbers => {

    let new_numbers = [];
    for (let i = 0; i < numbers.length; i++) {
        new_numbers[i] = numbers[i];
    }
    new_numbers.sort((a, b) => b - a);
    return new_numbers;
}