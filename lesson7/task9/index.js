const withdraw = (clients, balances, client, amount) => {
    let curr = clients.indexOf(client)
    if (balances[curr] < amount) {
        return -1;
    }
    balances[curr] = balances[curr] - amount;
    return balances[curr];
}