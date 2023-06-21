const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/connection');
const Company = require('./Company');

const Subscription = sequelize.define('Subscription', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  companyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Company,
      key: 'id',
    },
  },
  subscriptionStartDate: {
    type: DataTypes.DATE,
  },
  subscriptionEndDate: {
    type: DataTypes.DATE,
  },
  paymentStatus: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  tableName: 'subscriptions',
  timestamps: true,
});

Subscription.belongsTo(Company, { foreignKey: 'companyId' });

module.exports = Subscription;
