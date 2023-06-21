const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/connection');
const Company = require('./Company');

const CompanyAccount = sequelize.define('CompanyAccount', {
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
  tableName: 'company_accounts',
  timestamps: true,
});

CompanyAccount.belongsTo(Company, { foreignKey: 'companyId' });

module.exports = CompanyAccount;
