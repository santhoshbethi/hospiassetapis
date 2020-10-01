module.exports = (sequelize, Sequelize) => {
	const tbl_call_status = sequelize.define("hsp_tbl_callstatus", {
    STATUS_ID: {
      type: Sequelize.INTEGER,
      autoIncrement:true,
	  primaryKey: true
    },
	STATUS_NAME: {
      type: Sequelize.INTEGER
    },
    	STATUS: {
			type: Sequelize.ENUM,
			values:[
			'A',
			'I'],
			defaultValue:'A'
		}
  },{
	   freezeTableName: true,
	   timestamps:false
  });
  return tbl_call_status;
};
 
 


