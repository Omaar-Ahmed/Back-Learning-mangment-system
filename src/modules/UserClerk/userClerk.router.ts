import { Router } from 'express';
import * as userClerkController from './controller/userClerk'
const router = Router();


router.post("/createcourse", userClerkController.updateUser);


export default router