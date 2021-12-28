'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agenda_Hymn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Agenda_Hymn.init({
    agendaId: DataTypes.INTEGER,
    hymnId: DataTypes.INTEGER,
    hymnTagId: DataTypes.INTEGER,
    order: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Agenda_Hymn',
  });
  return Agenda_Hymn;
};