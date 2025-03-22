import { Router } from "express"
import * as TransactionsController from "./controller/transactions";
const router = Router();

router.post("/stripe/payment-intent", TransactionsController.createStripePaymentIntent);






export default router