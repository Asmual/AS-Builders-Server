import { Request, Response } from "express";
import { registerSchema } from "../services/auth/auth.validation.js";
import { registerUser } from "../services/auth/auth.service.js";

export const register = async (req: Request, res: Response) => {
  try {
    const validatedData = registerSchema.parse(req.body);

    const user = await registerUser(validatedData);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        success: false,
        message: error.message,
        data: null,
      });
      return;
    }

    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: null,
    });
  }
};