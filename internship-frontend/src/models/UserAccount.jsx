const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/connection');
const User = require('./User');

const UserAccount = sequelize.define('UserAccount', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  accountType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  verificationCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  tableName: 'user_accounts',
  timestamps: true,
});

UserAccount.belongsTo(User, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
});

module.exports = UserAccount;
