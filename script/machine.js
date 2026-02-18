console.log("Machine added.");

// Machine id -> input value
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);

    return value;
}

// Machine -> balance
function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("Current Balance:", Number(balance));

    return Number(balance);
}


// Machine value -> set balance
function setBalance(value) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

// Machine id > hide all > show id
function showOnly(id) {
    const addMoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    // console.log(`Add Money- ${addMoney} , Cashout- ${cashout}`);

    //sobay ke hide kore dew
    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");

    // id wala element ta ke show koro
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}