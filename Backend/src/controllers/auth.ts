import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/user";
import { getToken } from "../lib/generateToken";
import { GoogleUserType, UserType } from "../types/user";
class AuthController {
  // Signup
  SignUp = async (req: Request, res: Response) => {
    const { email, password } = req.body as UserType;
    try {
      const user = await User.findOne({
        email,
      });
      if (user)
        return res.json({ success: false, message: "User already exists" });

      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);
      const newUser = await User.create({
        ...req.body,
        password: hashPassword,
      });
      return res.status(200).json({
        success: true,
        message: "User created successfully!",
        newUser,
      });
    } catch (err: any) {
      return res
        .status(501)
        .json({ message: "Something went wrong", error: err.message });
    }
  };

  // Sign in with username and password

  SignIn = async (req: Request, res: Response) => {
    const { email, password } = req.body as UserType;

    try {
      const user = await User.findOne({
        email,
      });
      if (user) {
        const result = await bcrypt.compare(password, user.password!);

        if (result) {
          const token = getToken(user.id);
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
        } else {
          return res
            .status(500)
            .json({ success: false, message: "Password mismatch" });
        }
      } else {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }
    } catch (err: any) {
      return res.json({ success: false, message: err.message });
    }
  };

  // SignIn With Google Account

  GoogleSignIn = async (req: Request, res: Response) => {
    const { name, email, profile } = req.body as GoogleUserType;
    try {
      const user = await User.findOne({
        email,
      });

      if (user) {
        const token = getToken(user.id) as string;
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
      const newUser = await User.create(
        { name, email, profile,isGoogle: true});
      const token = getToken(newUser.id);
      return res
        .status(200)
        .cookie("access_token", token, { httpOnly: true })
        .json({ success: true, data: newUser });
    } catch (err: any) {
      return res.json({ success: false, message: err.message });
    }
  };

  // Logout
  SignOut = (req: Request, res: Response) => {
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
  SetProfile = async (req: Request, res: Response) => {
    const { id, profile } = req.body as { id: string; profile: string };

    try {
      const updatedProfile = await User.findByIdAndUpdate(
        { _id: id },
        { $set: { profile } }
      );
      return res
        .status(200)
        .json({ success: true, message: "profile updated", updatedProfile });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  };
}

export default new AuthController();
