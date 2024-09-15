function increaseBalance(x, y) {
  x = x + y;
  return x;
}

function decreaseBalance(x, y) {
  x = x - y;
  return x;
}

function divideBalanceByAccounts(x, y, z) {
  let balance = x + z;
  let x3 = balance / y;
  return x3;
}

function getRestAfterDivision(x, y) {
  x = x % y;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2, 4000));
console.log(getRestAfterDivision(7000, 3));
