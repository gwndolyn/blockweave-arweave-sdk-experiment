import express from 'express';
import WalletController from '../controllers/wallet/WalletController.js';

const router = express.Router();
const walletController = new WalletController()

router.get('/wallet/:id', walletController.getWallet);
// router.post('/wallet', WalletController.createUser);
// router.put('/wallet/:id', WalletController.updateUser);
// router.delete('/wallet/:id', WalletController.deleteUser);

export default router;
