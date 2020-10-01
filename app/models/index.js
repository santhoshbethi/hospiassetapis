const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.login = require("../models/login.model.js")(sequelize, Sequelize);
db.tbllogs = require("../models/hsp_tbl_calllogs.model.js")(sequelize, Sequelize);
db.tblcalltypes = require("../models/hsp_tbl_call_types.model.js")(sequelize, Sequelize);
db.tblcallstatus = require("../models/hsp_tbl_callstatus.model.js")(sequelize, Sequelize);
db.tblltickets = require("../models/hsp_tbl_tickets.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
