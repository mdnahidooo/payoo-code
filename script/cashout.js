// console.log('cash out functionality connected.');

//----------------------2. Alternative and easy way------------------------
document.getElementById("cashout-btn").addEventListener("click", function () {
    // 1- get the agent number and validate
    const cashoutNumber = getValueFromInput("cashout-number");

    if (cashoutNumber.length != 11) {
        alert("Invalid agent number");
        return;
    }


    // 2- get the amount, validate, convert to the number
    const cashoutAmount = getValueFromInput("cashout-amount");

    // 3- get the current balance, validate, convert to the number
    const currentBalance = getBalance();

    // 4- calculate new balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);

    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }


    // 5- get the pin and verify
    const cashoutPin = getValueFromInput("cashout-pin")

    if (cashoutPin === "1230") {
        // 5.1- true:::>> show the alert> set balance
        alert("Cashout successful.");
        setBalance(newBalance);

        
        // 1- history-container ke dhore niye ashbo
        const history = document.getElementById("history-container");

        // 2- new div create korbo
        const newHistory = document.createElement("div");
        // 3- new div a innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">

        Cashout ${cashoutAmount} TAKA Success to ${cashoutNumber} , at ${new Date()}
        
        </div>
        `;
        // 4- history-container a new div append korbo
        history.append(newHistory);
    }
    else {
        // 5.2- false:::>> show the error alert> return
        alert("Invalid Pin");
        return;
    }


});



//----------------------1. Long way for better understand-----------------------

// document.getElementById("cashout-btn").addEventListener("click", function () {
//     // logic:

//     // 1- get the agent number and validate
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);

//     if (cashoutNumber.length != 11) {
//         alert("Invalid agent number");
//         return;
//     }

//     // 2- get the amount, validate, convert to the number
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     // 3- get the current balance, validate, convert to the number
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     // 4- calculate new balance
//     const newBalance = Number(balance) - Number(cashoutAmount);

//     if (newBalance < 0) {
//         alert("Invalid Amount");
//         return;
//     }


//     // 5- get the pin and verify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const cashoutPin = cashoutPinInput.value;

//     if (cashoutPin === "1230") {
//         // 5.1- true:::>> show the alert> set balance
//         alert("CashOut successful.");
//         console.log("New Balance:", newBalance);
//         balanceElement.innerText = newBalance;
//     }
//     else {
//         // 5.2- false:::>> show the error alert> return
//         alert("Invalid Pin");
//         return;
//     }
// })