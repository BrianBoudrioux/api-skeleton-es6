import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class Book extends Model {
    static init(sequelize) {
        return super.init(
            {
                title: DataTypes.STRING,
                content: DataTypes.TEXT,
            },
            { sequelize, modelName: 'Book' }
        );
    }

    static associate(models) {
        // define association here
        this.belongsTo(models.User);
        return this;
    }
}

Book.init(db.sequelize);

export default Book;
