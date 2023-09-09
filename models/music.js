'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Music extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Music.belongsToMany(models.Agenda, {
        as: 'agendas',
        foreignKey: {
          name: 'musicId',
          allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        otherKey: {
          name: 'agendaId',
          allowNull: false
        },
        through: 'Agenda_Musics'
      });
    }
  };
  Music.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Music',
    tableName: 'Musics'  // without this, Sequelize looks for a table called "Music" because it stupidly puts grammar before logic since "Musics" isn't a word (see https://sequelize.org/master/manual/model-basics.html and the note about the "inflection" library)
  });
  return Music;
};