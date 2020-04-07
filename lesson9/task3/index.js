const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
};

const getCustomersList = (obj) => {
    const arrCustomers = Object.entries(obj);
    console.log(arrCustomers);

    const [key, ...rest] = arrCustomers[0];
    console.log(key);
    console.log(rest);
    const [objInRest] = rest;
    console.log(objInRest);
    const { name, age } = objInRest;
    console.log(name, age);
}

getCustomersList(customers);