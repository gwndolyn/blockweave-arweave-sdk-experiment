import Helper from "../utils/Helper.js";
import Arweave from "arweave";

const helper = new Helper();

const arweave = Arweave.init({
  host: "127.0.0.1", // localhost:1984
  port: 1984,
  protocol: "http",
  logging: true
});

export default class WalletController {
  constructor() { }

  async generateWalletKey() {
    const key = await arweave.wallets.generate();
    console.log("generated a new wallet key");
    console.log(`dumping key: \n${key}`);
    return key;
  }
}