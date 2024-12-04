'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Learned extends Model {
    static associate() {}
  }
  Learned.init({
    themeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Learned',
  });
  return Learned;
};