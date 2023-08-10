import Arweave from "arweave";
import express from 'express';
import Helper from "./utils/shutup-exceptions.js";
import StupidResponseHandler from "./utils/stupid-response-handler.js";

const app = express();
const helper = new Helper();
const stupidResponseHandler = new StupidResponseHandler();

import WalletRoutes from './shit-for-the-app/routes/WalletRoutes.js';

// Or manually specify a host
const arweave = Arweave.init({
  host: "127.0.0.1",
  port: 1984,
  protocol: "http",
});

app.get('/', (req, res) => {
  let data = { title: "blockweave-arweave-sdk-experiment" }
  stupidResponseHandler.sendResponseAndLogShitToServer(req, res, data)
});

app.use('/api', WalletRoutes);

app.listen(12585, () => {
  console.log('Example app listening on port 12585!');
});