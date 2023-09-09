'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Widget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Widget.belongsToMany(models.Agenda, {
        as: 'agendas',
        foreignKey: {
          name: 'widgetId',
          allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        otherKey: {
          name: 'agendaId',
          allowNull: false
        },
        through: 'Agenda_Widgets'
      });
    }
  };
  Widget.init({
    isHymn: DataTypes.BOOLEAN,
    order: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Widget',
  });
  return Widget;
};