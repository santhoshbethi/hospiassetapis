module.exports = (sequelize, Sequelize) => {
	const Login = sequelize.define("login", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  }, {
    freezeTableName: true,
    timestamps: false,
     
  });
};
 
 


