const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/connection');
const Application = require('./Application');

const Document = sequelize.define('Document', {
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
  documentType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  filePath: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'documents',
  timestamps: true,
});

Document.belongsTo(Application, { foreignKey: 'applicationId' });

module.exports = Document;
