'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agenda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Agenda.init({
    date: DataTypes.STRING,
    is5thSunday: DataTypes.BOOLEAN,
    isDaylightSavingsChange: DataTypes.BOOLEAN,
    isFastSunday: DataTypes.BOOLEAN,
    isGeneralConference: DataTypes.BOOLEAN,
    isMeetingTimeChange: DataTypes.BOOLEAN,
    isPrimaryProgram: DataTypes.BOOLEAN,
    isStakeConference: DataTypes.BOOLEAN,
    isWardConference: DataTypes.BOOLEAN,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Agenda',
  });
  return Agenda;
};