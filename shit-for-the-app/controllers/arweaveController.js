import Helper from "../utils/Helper.js";
import Arweave from "arweave";
import fetch from "node-fetch";

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
  constructor() {}

  // [WALLETS]
  async customGenerateWalletKey() {
    const key = await arweave.wallets.generate();
    return {
      jwk: key,
      walletAddress: await arweave.wallets.getAddress(key),
    };
  }

  async getWalletBalance(walletAddress) {
    // all balance will be showned in AR, i don't care about winston
    let data;
    let [winston, ar] = "";
    await arweave.wallets.getBalance(walletAddress).then((balance) => {
      winston = balance;
      ar = arweave.ar.arToWinston(balance);
    });
    data = {
      walletAddress: walletAddress,
      balance: {
        inWinston: winston,
        inAr: ar,
      },
    };
    return data;
  }

  async mintWalletBalance(walletAddress, mintAmount) {
    let data = {
      parameters: {
        walletAddress: walletAddress,
        mintAmount: mintAmount,
      },
    };
    try {
      if (!walletAddress || !mintAmount) {
        throw "missing wallet address or mint amount values";
      }
      fetch(`http://localhost:1984/mint/${walletAddress}/${mintAmount}`)
    } catch (error) {
      console.log(error)
      data = { error: error };
    }
    return data;
  }

  // [TRANSACTIONS]
  async createTransaction(){

  }

  async createSignedTransaction(){
    
  }
}
