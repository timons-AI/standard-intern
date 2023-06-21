const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/connection');
const Application = require('./Application');
const User = require('./User');
const Company = require('./Company');

const Communication = sequelize.define('Communication', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  applicationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Application,
      key: 'id',
    },
  },
  senderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  recipientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Company,
      key: 'id',
    },
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'unread',
  },
}, {
  tableName: 'communications',
  timestamps: true,
});

Communication.belongsTo(Application, { foreignKey: 'applicationId' });
Communication.belongsTo(User, { foreignKey: 'senderId' });
Communication.belongsTo(Company, { foreignKey: 'recipientId' });

module.exports = Communication;
