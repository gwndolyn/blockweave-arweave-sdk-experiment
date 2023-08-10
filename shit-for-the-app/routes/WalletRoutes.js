import express from 'express';
import StupidResponseHandler from "../utils/StupidResponseHandler.js";
import WalletController from '../controllers/WalletController.js';

const walletRoutes = express.Router();
const stupidResponseHandler = new StupidResponseHandler();
const walletController = new WalletController();

// Add some middleware functions to the router
walletRoutes.use((req, res, next) => { next(); });

// GET /route1 - its just for testing dumbass
walletRoutes.get('/route1', (req, res) => {
  stupidResponseHandler.sendResponseAndLogShitToServer(req, res, {
    message: "/route1 called, server responded with this data."
  })
});

export default walletRoutes;
