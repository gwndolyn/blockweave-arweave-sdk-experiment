import Arweave from "arweave";
const arweave = Arweave.init({
  host: "127.0.0.1", // localhost:1984
  port: 1984,
  protocol: "http",
  logging: true
});

// arweave.wallets.generate().then((key) => {
//   console.log(JSON.stringify(key))
// })