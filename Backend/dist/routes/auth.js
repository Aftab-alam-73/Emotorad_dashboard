"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../controllers/auth"));
const router = (0, express_1.Router)();
router.post('/signin', auth_1.default.SignIn);
router.post('/signup', auth_1.default.SignUp);
router.post('/logout', auth_1.default.SignOut);
router.post('/login/google', auth_1.default.GoogleSignIn);
exports.default = router;
//# sourceMappingURL=auth.js.map