import { handleError } from '../helpers/error';

const Server = (http, middlewares, routes) => {
    const app = http();
    const initializeMiddlewares = (middlewares) => {
        for (const key in middlewares) {
            const mware = middlewares[key];
            app.use(mware);
        }
    };
    const initializeApplicationRouter = (routes) => {
        app.use(routes);
        app.use((err, req, res, next) => {
            handleError(err, res);
        });
    };

    initializeMiddlewares(middlewares);
    initializeApplicationRouter(routes);

    return {
        listen: (port) => {
            app.listen(port, async () =>
                console.log(`application started on port : ${port}`)
            );
        },
    };
};

export default Server;
