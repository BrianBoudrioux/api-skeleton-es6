import Book from './model';

const bookController = {
    getAll: async ({ res, next }) => {
        try {
            const books = await Book.findAll();
            res.status(200).json(books);
        } catch (err) {
            next(err);
        }
    },
    add: async (req, res, next) => {
        try {
            const book = await Book.create({ ...req.body });
            res.status(201).json(book);
        } catch (err) {
            next(err);
        }
    },
};

export default bookController;
