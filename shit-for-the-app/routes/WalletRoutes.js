import express from 'express';
import StupidResponseHandler from "../utils/StupidResponseHandler.js";
import ArweaveController from '../controllers/ArweaveController.js';

const walletRoutes = express.Router();
const stupidResponseHandler = new StupidResponseHandler();
const arweaveController = new ArweaveController();

// Add some middleware functions to the router
walletRoutes.use((req, res, next) => { next(); });

walletRoutes.get('/', async (req, res) => {
  null
})

walletRoutes.get('/new-wallet', async (req, res) => {
  // get back the key and data
  const data = await arweaveController.customGenerateWalletKey();
  await stupidResponseHandler.sendResponseAndLogShitToServer(req, res, data);
})

walletRoutes.get('/wallet-balance/:walletAddress', async (req, res) => {
  const data = await arweaveController.getWalletBalance(req.params.walletAddress)
  console.log(req.params.walletAddress)
  await stupidResponseHandler.sendResponseAndLogShitToServer(req, res, data)
})

export default walletRoutes;
