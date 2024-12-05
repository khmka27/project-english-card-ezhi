'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ Theme,User }) {
      this.belongsTo(Theme, { foreignKey: 'themeId' })
      this.belongsTo(User, { foreignKey: 'createdBy' })
    }
  }
  Card.init({
    engWord: DataTypes.STRING,
    rusWord: DataTypes.STRING,
    themeId: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};