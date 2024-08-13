import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async register(req: Request, res: Response) {
    try {
      const user = await this.authService.register(req.body);
      res.status(201).send("User registered");
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error for create user, please verify README.md" });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const token = await this.authService.login(
        req.body.username,
        req.body.password
      );
      res.status(201).json(token);
    } catch (error) {
      res.status(400).json({
        message:
          "Existe Algun problema, verifique que los datos de entrada sean correctos",
      });
    }
  }
}
