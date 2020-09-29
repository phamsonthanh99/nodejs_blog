const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.customers = require('../model/customer.model.js')(sequelize, Sequelize);
db.user = require('../model/user.model')(sequelize, Sequelize);

db.user.hasMany(db.customers, {foreignKey: 'userId', sourceKey: 'id'});
db.customers.belongsTo(db.user, {foreignKey: 'userId', targetKey: 'id'});

module.exports = db;