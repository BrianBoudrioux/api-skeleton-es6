import { Router } from 'express';
import userController from './controller';
import isAuth, {refreshAccess} from '../../middlewares/auth';

const entrypoint = '/users';
const userRouter = Router();

userRouter
    .route(entrypoint)
    .get(isAuth, userController.getAll)
    .post(userController.register);

userRouter.route(`${entrypoint}/auth`).post(userController.login);
userRouter.route(`${entrypoint}/auth/refresh`).get(refreshAccess);

export default userRouter;
