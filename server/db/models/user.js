'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Theme, Learned, Card }) {
      this.belongsToMany(Theme, { through: Learned, foreignKey: 'userId' });
      this.hasMany(Card, { foreignKey: 'createdBy' });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
