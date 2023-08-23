import fetch from 'node-fetch';
import Arweave from "arweave";

global.Headers = fetch.Headers;
global.fetch = fetch;

const arweave = Arweave.init({
  host: "127.0.0.1", // localhost:1984
  port: 1984,
  protocol: "http",
  logging: true
});

// generate wallet Json Web Key
let walletJWK;
await arweave.wallets.generate().then((key) => { walletJWK = key })
// console.log(walletJWK)

// JWK to wallet Address; requires walletJWK;
let walletAddress;
await arweave.wallets.jwkToAddress(walletJWK).then((address) => { walletAddress = address })
console.log(walletAddress)

// get wallet balance; requires walletAddress;
await arweave.wallets.getBalance(walletAddress).then((balance) => {
  // winston reprsents the smallest unit in AR
  let winston = balance;
  console.log(winston)
  let ar = arweave.ar.winstonToAr(balance);
  console.log(ar)
})

// create transactions
let tx_a_data = {
  "payee": "ocbc",
  "payer": "dbs",
  "amount": 500000,
  "currency": "SGD"
}
tx_a_data = JSON.stringify(tx_a_data)

let transaction_A = await arweave.createTransaction({
  data: tx_a_data
}, walletJWK)

console.log(transaction_A)

let transaction_B = await arweave.createTransaction({
  target: walletAddress,
  quantity: arweave.ar.arToWinston(0.01),
  "data": JSON.stringify({
    "payee": "ocbc",
    "payer": "maybank",
    "amount": 10000,
    "currency": "MYR"
  })
}, walletJWK)

console.log(transaction_B)

await arweave.transactions.sign(transaction_A, walletJWK)

// get last transaction
await arweave.wallets.getLastTransactionID(walletAddress).then((transactionId) => {
  console.log(transactionId)
})
