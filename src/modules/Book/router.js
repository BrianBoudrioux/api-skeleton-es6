import { Router } from 'express';
import bookController from './controller';

const entrypoint = '/books';
const bookRouter = Router();

bookRouter
    .route(entrypoint)
    .get(bookController.getAll)
    .post(bookController.add);

export default bookRouter;
