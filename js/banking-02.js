'use strict';
// handle deposit button event
document
  .getElementById('deposit-button')
  .addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');

    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // Update deposit total
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    balanceTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input field
    depositInput.value = '';
  });

// withdraw event handler
document
  .getElementById('withdraw-button')
  .addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');

    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawText = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear the withdraw input field
    withdrawInput.value = '';
  });
