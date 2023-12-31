import express from 'express';
import StupidResponseHandler from './shit-for-the-app/utils/StupidResponseHandler.js';
import walletRoutes from './shit-for-the-app/routes/WalletRoutes.js';

const app = express();
const stupidResponseHandler = new StupidResponseHandler();

app.use('/api', walletRoutes);

app.get('/', (req, res) => {
  stupidResponseHandler.sendResponseAndLogShitToServer(req, res, {
    title: "blockweave-arweave-sdk-experiment"
  })
});

app.listen(12585, () => {
  console.log('Example app listening on port 12585!');
});