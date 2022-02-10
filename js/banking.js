'use strict';
// handle deposit button event
document
  .getElementById('deposit-button')
  .addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');

    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal =
      parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);

    depositTotal.innerText = newDepositTotal;

    // Update account balanace
    const balanceTotal = balanceTotal.innerText;
    const previousBalanceTotal =
      // clear the deposit input field
      (depositInput.value = '');
  });
