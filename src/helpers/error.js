import { logger } from '../config/middlewares';

class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}

const handleError = (err, req, res, next) => {
    const { message } = err;
    const statusCode = err.statusCode ? err.statusCode : 500;

    logger.log(statusCode, err);
    res.status(statusCode).json({
        statusCode,
        message,
    });
};

export { ApiError, handleError };
