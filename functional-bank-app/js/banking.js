'use strict';
function doubleIt(num) {
  const result = num * 2;
  return result;
}
const fiveDouble = doubleIt(5);
const serverDouble = doubleIt(7);

function getInputValue(inputId) {
  const inputField = document.getElementById('inputId');
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);

  // clear input field
  inputField.value = '';
  return amountValue;
}

document
  .getElementById('deposit-button')
  .addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    // console.log(depositAmount);

    // get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;
    // console.log(depositTotalText);

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;
  });
// handle withdraw button
document
  .getElementById('withdraw-button')
  .addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);

    const withdrawAmount = getInputValue('withdraw-input');

    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    // clear withdraw input field
    // withdrawInput.value = '';
  });
