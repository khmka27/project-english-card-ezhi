'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ User, Learned, Card }) {
      this.belongsToMany(User, { through: Learned, foreignKey: 'themeId' });
      this.hasMany(Card, { foreignKey: 'themeId' });
    }
  }
  Theme.init({
    nameTheme: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};