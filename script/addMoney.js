document.getElementById("add-money-btn").addEventListener("click", function () {

    // 1- Bank account get
    const bankAccount = getValueFromInput("add-money-bank");
    if (bankAccount === "Select back") {
        alert("Please select a back");
        return;
    }

    // 1- Get bank account number
    const accno = getValueFromInput("add-money-number");
    if (accno.length != 11) {
        alert("invalid acc no");
        return;
    }

    //3- get amount 
    const amount = getValueFromInput("add-money-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);

    const pin = getValueFromInput("add-money-pin");
    if (pin === "1230") {
        alert(`Add Money Success from 
            ${bankAccount} 
            at ${new Date()}`);
        setBalance(newBalance);

        // 1- history-container ke dhore niye ashbo
        const history = document.getElementById("history-container");

        // 2- new div create korbo
        const newHistory = document.createElement("div");
        // 3- new div a innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">

        Add Money Success from ${bankAccount} , acc no ${accno} at ${new Date()}
        
        </div>
        `;
        // 4- history-container a new div append korbo
        history.append(newHistory);
    }
    else {
        alert("invalid pin");
        return;
    }

});