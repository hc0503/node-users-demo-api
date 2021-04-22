import { UsersController } from "../controllers/users.controller";

export class Routes {
  public usersController: UsersController = new UsersController();

  public routes(app: any): void {
    app
      .route("/api/users")
      .get(this.usersController.index)
      .post(this.usersController.create);

    app
      .route("/api/users/:id")
      .get(this.usersController.show)
      .post(this.usersController.update)
  }
}