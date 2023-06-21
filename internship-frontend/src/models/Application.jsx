const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/connection');
const Internship = require('./Internship');
const User = require('./User');

const Application = sequelize.define('Application', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  internshipId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Internship,
      key: 'id',
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  applicationDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
  feedback: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'applications',
  timestamps: true,
});

Application.belongsTo(Internship, { foreignKey: 'internshipId' });
Application.belongsTo(User, { foreignKey: 'userId' });

module.exports = Application;
