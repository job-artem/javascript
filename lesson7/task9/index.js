const withdraw = (clients, balances, client, amount) => {
    if (Array.isArray(clients) && Array.isArray(balances) && (typeof(client) === 'string') && (typeof(amount) === 'number')) {

        if (balances[clients.indexOf(client)] < amount) {
            return -1;
        } else {
            balances[clients.indexOf(client)] = balances[clients.indexOf(client)] - amount;
            return balances[clients.indexOf(client)];
        }
    }

}