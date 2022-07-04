/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let richestCustomersMoney = 0;

  for (let i = 0; i < accounts.length; i++) {
    let currentWalletMoney = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      currentWalletMoney += accounts[i][j];
    }

    richestCustomersMoney = Math.max(richestCustomersMoney, currentWalletMoney);
  }
  return richestCustomersMoney;
};
