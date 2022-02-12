import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface bad_wordsAttributes {
  word?: string;
  rating?: number;
}

export type bad_wordsOptionalAttributes = "word" | "rating";
export type bad_wordsCreationAttributes = Optional<bad_wordsAttributes, bad_wordsOptionalAttributes>;

export class default_bad_words extends Model<bad_wordsAttributes, bad_wordsCreationAttributes> implements bad_wordsAttributes {
  word?: string;
  rating?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof default_bad_words {
    return default_bad_words.init({
      word: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'default_bad_words',
      schema: 'public',
      timestamps: false
    });
  }
}
