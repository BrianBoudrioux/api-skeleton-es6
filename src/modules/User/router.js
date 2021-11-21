import { Router } from 'express';
import userController from './controller';

const entrypoint = '/users';
const userRouter = Router();

userRouter
    .route(entrypoint)
    .get(userController.getAll)
    .post(userController.register);

userRouter.route(`${entrypoint}/auth`).post(userController.login);

export default userRouter;
