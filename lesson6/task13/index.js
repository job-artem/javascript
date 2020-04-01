function withdraw(clients, balances, client, amount) {
    if ((Array.isArray(clients)) && (Array.isArray(balances)) && (typeof(client) === 'string') && (typeof(amount) === 'number')) {
        for (let i = 0; i < clients.length; i++) {
            if (clients[i] !== client) {
                continue;
            } else {
                if (balances[i] >= amount) {
                    balances[i] = balances[i] - amount
                    return balances[i];
                } else {
                    return -1;
                }
            }
        }
    }
}