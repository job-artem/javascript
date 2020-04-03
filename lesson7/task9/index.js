const withdraw = (clients, balances, client, amount) => {
    if (Array.isArray(clients) && Array.isArray(balances) && (typeof(client) === 'string') && (typeof(amount) === 'number')) {

        if (balances[clients.indexOf(client)] < amount) {
            return -1;
        } else {
            let curr = clients.indexOf(client) 
            balances[curr] = balances[curr] - amount;
            return balances[curr];
        }
    }

}
