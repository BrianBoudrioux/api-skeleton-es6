import jwt from "jsonwebtoken";
import config from '../config/env';
import User from "../modules/User/model";

const isAuth = async (req, res, next) => {
    try {
        let access_token = req.headers.authorization.split(' ')[1];
        const refresh_token = req.cookies['refresh_token'];

        if (!refresh_token)
            return res.status(401).json('Access denied. Your session expired');

        let user = await User.findOne({ where: { access_token, refresh_token } });
        if (!user)
            return res.status(401).json('Access denied. Your session expired');


        await jwt.verify(access_token, config.jwt_secret);

        req.user = user;
        next();

    } catch (e) {
        return res.status(401).json(e.message);
    }
}

const refreshAccess = async (req, res, next) => {
    try {
        const refresh_token = req.cookies['refresh_token'];

        if (!refresh_token)
            return res.status(401).json('Access denied. Your session expired');

        const decoded = await jwt.verify(refresh_token, config.jwt_secret);
        const user = await User.findOne({ where: { id: decoded.id } });
        user.access_token = jwt.sign({ id: user.id, email: user.email }, config.jwt_secret, { expiresIn: '5m' });
        await user.save();

        res.status(200).json(user);
    } catch (e) {
        next(e);
    }
}

export default isAuth;
export {refreshAccess};