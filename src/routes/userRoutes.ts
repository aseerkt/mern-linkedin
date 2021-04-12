import { Router } from 'express';
import { registerUser } from '../controllers/userController';
import { checkError } from '../middlewares/checkError';
import { registerValidators } from '../validators/userValidator';

const router = Router();

router.post('/register', registerValidators, checkError, registerUser);

export default router;
