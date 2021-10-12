'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hymn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Hymn.init({
    title: DataTypes.STRING,
    hymnNo: DataTypes.INTEGER,
    isRestricted: DataTypes.BOOLEAN,
    href: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hymn',
  });
  return Hymn;
};