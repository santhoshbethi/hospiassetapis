module.exports = (sequelize, Sequelize) => {
	const tbl_call_types = sequelize.define("hsp_tbl_call_types", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },
	CODE: {
      type: Sequelize.STRING
    },
    	NAME:{
			type: Sequelize.STRING
		}
  },{
	   freezeTableName: true,
	   timestamps:false
  });
  return tbl_call_types;
};
 
 


