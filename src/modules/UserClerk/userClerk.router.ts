import { Router } from 'express';
import * as userClerkController from './controller/userClerk'
const router = Router();


router.put("/createcourse/:userId", userClerkController.updateUser);


export default router