'use strict';
module.exports = function(sequelize, DataTypes) {
  var Coordinate = sequelize.define('Coordinate', {
    lat: DataTypes.STRING,
    lng: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Coordinate;
};