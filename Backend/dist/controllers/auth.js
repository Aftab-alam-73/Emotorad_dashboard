"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../models/user"));
const generateToken_1 = require("../lib/generateToken");
class AuthController {
    constructor() {
        // Signup
        this.SignUp = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                const user = yield user_1.default.findOne({
                    email,
                });
                if (user)
                    return res.json({ success: false, message: "User already exists" });
                const salt = bcryptjs_1.default.genSaltSync(10);
                const hashPassword = bcryptjs_1.default.hashSync(password, salt);
                const newUser = yield user_1.default.create(Object.assign(Object.assign({}, req.body), { password: hashPassword }));
                return res.status(200).json({
                    success: true,
                    message: "User created successfully!",
                    newUser,
                });
            }
            catch (err) {
                return res
                    .status(501)
                    .json({ message: "Something went wrong", error: err.message });
            }
        });
        // Sign in with username and password
        this.SignIn = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                const user = yield user_1.default.findOne({
                    email,
                });
                if (user) {
                    const result = yield bcryptjs_1.default.compare(password, user.password);
                    if (result) {
                        const token = (0, generateToken_1.getToken)(user.id);
                        return res
                            .status(200)
                            .cookie("access_token", token, {
                            httpOnly: true,
                            sameSite: "none",
                            secure: true,
                            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                        })
                            .json({
                            success: true,
                            message: "User signed in successfully",
                            data: user,
                        });
                    }
                    else {
                        return res
                            .status(500)
                            .json({ success: false, message: "Password mismatch" });
                    }
                }
                else {
                    return res
                        .status(404)
                        .json({ success: false, message: "User not found" });
                }
            }
            catch (err) {
                return res.json({ success: false, message: err.message });
            }
        });
        // SignIn With Google Account
        this.GoogleSignIn = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, profile } = req.body;
            try {
                const user = yield user_1.default.findOne({
                    email,
                });
                if (user) {
                    const token = (0, generateToken_1.getToken)(user.id);
                    return res
                        .status(200)
                        .cookie("access_token", token, {
                        httpOnly: true,
                        sameSite: "none",
                        secure: true,
                        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                    })
                        .json({ success: true, data: user });
                }
                const newUser = yield user_1.default.create({ name, email, profile, isGoogle: true });
                const token = (0, generateToken_1.getToken)(newUser.id);
                return res
                    .status(200)
                    .cookie("access_token", token, { httpOnly: true })
                    .json({ success: true, data: newUser });
            }
            catch (err) {
                return res.json({ success: false, message: err.message });
            }
        });
        // Logout
        this.SignOut = (req, res) => {
            //  console.log("cookie Before: ", req.cookies.access_token)
            res
                .clearCookie("access_token", {
                secure: true,
                sameSite: "none",
            })
                .status(200)
                .json("User logged out successfully");
        };
        // Setting profile picture
        this.SetProfile = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id, profile } = req.body;
            try {
                const updatedProfile = yield user_1.default.findByIdAndUpdate({ _id: id }, { $set: { profile } });
                return res
                    .status(200)
                    .json({ success: true, message: "profile updated", updatedProfile });
            }
            catch (err) {
                return res.status(500).json({ success: false, message: err.message });
            }
        });
    }
}
exports.default = new AuthController();
//# sourceMappingURL=auth.js.map