import Helper from "../utils/Helper.js";
import Arweave from "arweave";
import fetch from "node-fetch"

globalThis.fetch = fetch;
globalThis.Headers = fetch.Headers;

const helper = new Helper();

const arweave = Arweave.init({
  host: "127.0.0.1", // localhost:1984
  port: 1984,
  protocol: "http",
  logging: true,
});

export default class ArweaveController {
  constructor() { }

  // [WALLETS]
  async customGenerateWalletKey() {
    const key = await arweave.wallets.generate();
    return {
      jwk: key,
      walletAddress: await arweave.wallets.getAddress(key)
    };
  }

  async getWalletBalance(walletAddress) {
    // all balance will be showned in AR, i don't care about winston
    let [winston, ar] = ""
    await arweave.wallets.getBalance(walletAddress).then((balance) => {
      winston = balance
      ar = arweave.ar.arToWinston(balance)
    })
    return {
      walletAddress: walletAddress,
      balance: {
        inWinston: winston,
        inAr: ar
      }
    }
  }

  async mintBalance(walletAddress, arBalance) {
    // TODO - please make mint tmrw
  }

  // [TRANSACTIONS]
}
