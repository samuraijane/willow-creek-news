'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sunday extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Sunday.init({
    date: DataTypes.STRING,
    isFastSunday: DataTypes.BOOLEAN,
    is5thSunday: DataTypes.BOOLEAN,
    isWardConference: DataTypes.BOOLEAN,
    isStakeConference: DataTypes.BOOLEAN,
    isGeneralConference: DataTypes.BOOLEAN,
    isPrimaryProgram: DataTypes.BOOLEAN,
    isMeetingTimeChange: DataTypes.BOOLEAN,
    isDaylightSavingsChange: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Sunday',
  });
  return Sunday;
};