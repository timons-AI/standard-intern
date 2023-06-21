const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/connection');
const Company = require('./Company');

const Internship = sequelize.define('Internship', {
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
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  location: {
    type: DataTypes.STRING,
  },
  startDate: {
    type: DataTypes.DATE,
  },
  endDate: {
    type: DataTypes.DATE,
  },
  availabilityStatus: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'internships',
  timestamps: true,
});

Internship.belongsTo(Company, { foreignKey: 'companyId' });

module.exports = Internship;
