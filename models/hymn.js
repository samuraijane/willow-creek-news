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
      Hymn.belongsToMany(models.Agenda, {
        as: 'agendas',
        foreignKey: {
          name: 'hymnId',
          allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        otherKey: {
          name: 'agendaId',
          allowNull: false
        },
        through: 'Agenda_Hymns'
      });
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