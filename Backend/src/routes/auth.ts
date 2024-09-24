import { Router } from "express";
import authController from "../controllers/auth";

const router=Router();

router.post('/signin',authController.SignIn);
router.post('/signup',authController.SignUp);
router.post('/logout',authController.SignOut);
router.post('/login/google',authController.GoogleSignIn)
export default router;