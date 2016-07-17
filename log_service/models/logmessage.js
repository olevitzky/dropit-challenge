'use strict';
module.exports = function(sequelize, DataTypes) {
  var LogMessage = sequelize.define('LogMessage', {
    content: DataTypes.STRING,
    severity: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return LogMessage;
};