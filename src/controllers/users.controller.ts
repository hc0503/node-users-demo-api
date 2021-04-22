import { Request, Response } from "express";
import { User, UserInterface } from "../models/user.model";
import { UpdateOptions } from "sequelize";

export class UsersController {
  public index(_req: Request, res: Response) {
    User.findAll<User>({})
      .then((users: Array<User>) => res.json(users))
      .catch((err: Error) => res.status(500).json(err));
  }

  public create(req: Request, res: Response) {
    const params: UserInterface = req.body;
    User.create<User>(params)
      .then((user: User) => res.status(201).json(user))
      .catch((err: Error) => res.status(500).json(err));
  }

  public update(req: Request, res: Response) {
    const userId: string = req.params.id;
    const params: UserInterface = req.body;

    const options: UpdateOptions = {
      where: { id: userId },
      limit: 1,
    };

    User.update(params, options)
      .then(() => res.status(202).json({ data: "success" }))
      .catch((err: Error) => res.status(500).json(err));
  }

  public show(req: Request, res: Response) {
    const userId: string = req.params.id;

    User.findByPk<User>(userId)
      .then((user: User | null) => {
        if (user) {
          res.json(user);
        } else {
          res.status(404).json({ errors: ["User not found"] });
        }
      })
      .catch((err: Error) => res.status(500).json(err));
  }

}