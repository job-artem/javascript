const withdraw = (clients, balances, client, amount) => {
    if (Array.isArray(clients) && Array.isArray(balances) && (typeof(client) === 'string') && (typeof(amount) === 'number')) {
        let curr = clients.indexOf(client)
        if (balances[curr] < amount) {
            return -1;
        } else {
             
            balances[curr] = balances[curr] - amount;
            return balances[curr];
        }
    }

}
