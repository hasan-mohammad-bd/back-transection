//check where the page is linked with the js file or not
//your have to check it often, where it is connected or not. 

//back Calculation

document.getElementById("deposit-button").addEventListener("click", function(){
    //get the amount deposited
    const depositInput = document.getElementById("deposit-input");

    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText)

    //update deposit total
    const depositTotal = document.getElementById("deposit-total");

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount+ newDepositAmount;

    depositTotal.innerText = newDepositTotal


    //update amount balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal =  previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    //clear the deposit input field
    depositInput.value = "";
})

document.getElementById("withdraw-button").addEventListener("click",function(){
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrewAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrewAmountText);


    //set withdraw total 
    const withdrawTotal = document.getElementById("withdraw-total")
    const previousWithDrawText = withdrawTotal.innerText
    const previousWithdrawTotal = parseFloat(previousWithDrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;


    //clear withdraw input;
    withdrawInput.value = "";

    
    //update total blance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText)
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    





})