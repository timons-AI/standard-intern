const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/connection');
const User = require('./User');

const ProfessionalInfo = sequelize.define('ProfessionalInfo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  education: {
    type: DataTypes.STRING,
  },
  workExperience: {
    type: DataTypes.STRING,
  },
  skills: {
    type: DataTypes.STRING,
  },
  certifications: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'professional_infos',
  timestamps: true,
});

ProfessionalInfo.belongsTo(User, { foreignKey: 'userId' });

module.exports = ProfessionalInfo;
