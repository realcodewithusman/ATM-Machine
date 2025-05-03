let balanceInput = document.querySelector('#number');
let balanceDisplay = document.querySelector('#netbalance');
let net_balance = 0;

function deposit() {
    let amount = parseInt(balanceInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount to deposit');
    } else {
        net_balance += amount;
        balanceDisplay.innerHTML = net_balance;
        alert(`${amount} amount has been deposited successfully.`);
        balanceInput.value = '';
    }
}

function withdraw() {
    let amount = parseInt(balanceInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount to withdraw');
    } else if (amount > net_balance) {
        alert('Insufficient balance');
    } else {
        net_balance -= amount;
        balanceDisplay.innerHTML = net_balance;
        alert(`${amount} amount has been withdrawn successfully.`);
        balanceInput.value = '';
    }
}
