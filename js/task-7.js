'use strict';

import users from './users.js';

const calculateTotalBalance = users => {
  return users.reduce((acc, {balance}) => acc + balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
