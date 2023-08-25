import express from "express";
import StupidResponseHandler from "../utils/StupidResponseHandler.js";
import ArweaveController from "../controllers/ArweaveController.js";

const walletRoutes = express.Router();
const stupidResponseHandler = new StupidResponseHandler();
const arweaveController = new ArweaveController();

// Add some middleware functions to the router
walletRoutes.use((req, res, next) => {
  next();
});

walletRoutes.get("/", async (req, res) => {
  null;
});

walletRoutes.get("/new-wallet", async (req, res) => {
  // get back the key and data
  const data = await arweaveController.customGenerateWalletKey();
  await stupidResponseHandler.sendResponseAndLogShitToServer(req, res, data);
});

walletRoutes.get("/wallet-balance/:walletAddress", async (req, res) => {
  const data = await arweaveController.getWalletBalance(
    req.params.walletAddress
  );
  await stupidResponseHandler.sendResponseAndLogShitToServer(req, res, data);
});

walletRoutes.get("/mint-wallet/:walletAddress/:mintAmount", async (req, res) => {
  let [walletAddress, mintAmount] = [req.params.walletAddress, req.params.mintAmount];
    try {
      console.log(walletAddress,"\n",mintAmount)
      if (!walletAddress) { throw "missing wallet address"; }
      if (!parseInt(mintAmount)) { throw "failed to parse integer from mint amount" } 
      const data = await arweaveController.mintWalletBalance(walletAddress, mintAmount);
      await stupidResponseHandler.sendResponseAndLogShitToServer(req, res, data);
    } catch (error) {
      await stupidResponseHandler.error(res, error)
    }
  }
);

export default walletRoutes;
