'use strict';
//bad code
// function withdraw(clients, balances, client, amount) {
//   for (let i = 0; i < clients.length; i++) {
//     if (clients[i] === client && balances[i] >= amount) {
//       return (balances[i] -= amount);
//     }
//     if (clients[i] === client && balances[i] < amount) {
//       return -1;
//     }
//   }
// }

//norm code but logic problem
// const withdraw = (clients, balances, client, amount) => {
//   const balance = balances[clients.indexOf(client)];
//   return balance > amount ? balance - amount : -1;
// };

//good cod
// const withdraw = (clients, balances, client, amount) => {
//   const indexClient = clients.indexOf(client);

//   if (amount > balances[indexClient]) {
//     return -1;
//   }

//     balances[indexClient] -= amount;
//     return balances[indexClient]
//   //return balances[indexClient] - amount;
// };

//bad
// function withdraw(clients, balances, client, amount) {
//   for (let i = 0; i < clients.length; i++) {
//     if (clients[i] === client && balances[i] >= amount) {
//       return (balances[i] -= amount);
//     } else if (clients[i] === client && balances[i] < amount) {
//       return -1;
//     }
//   }
// }

//my bad code
// const withdraw = (clients, balances, client, amount) => {
//   const indexClient = clients.indexOf(client);
//   return balances[indexClient] <= amount ? -1 : balances[indexClient] - amount;
// };

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));


// normal cod
// function withdraw(clients, balances, client, amount) {
//   let index = clients.indexOf(client);

//   if (balances[index] >= amount) {
//     return (balances[index] -= amount);
//   }

//   return -1;
// }



//very bad code
// const withdraw = (clients, balances, client, amount) => {
//   let result = 0;
//   clients.forEach(function (name, index) {
//     if (name.includes(client) && balances[index] >= amount) {
//       result = balances[index] - amount;
//     } else if (name.includes(client) && balances[index] < amount) {
//       result = -1;
//     }
//   });
//   return result;
// };