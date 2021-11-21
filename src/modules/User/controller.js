import User from './model';

const userController = {
    getAll: async ({ res, next }) => {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (err) {
            next(err);
        }
    },
    register: async (req, res, next) => {
        try {
            const user = await User.create({ ...req.body });
            res.status(201).json(user);
        } catch (err) {
            next(err);
        }
    },
    login: async (req, res, next) => {
        try {
            const { email, password } = { ...req.body };
            const user = await User.findOne({
                where: { email, password },
            });
            res.status(200).json(user);
        } catch (err) {
            next(err);
        }
    },
};

export default userController;
