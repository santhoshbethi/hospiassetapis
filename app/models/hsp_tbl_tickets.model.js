module.exports = (sequelize, Sequelize) => {
	const tbl_tickets = sequelize.define("hsp_tbl_tickets", {
		ID:{
			 type: Sequelize.INTEGER,
	         primaryKey: true,
			 autoIcrement:true 
			
		},
    TICKET_ID: {
      type: Sequelize.INTEGER
	  
    },
	TICKET_TYPE: {
      type: Sequelize.INTEGER
    },
		ORG_ID: {
      type: Sequelize.STRING
    },
	BRANCH_ID:{
		type: Sequelize.STRING
	},
    ASSET_ID: {
      type: Sequelize.STRING
    },
    DESCRIPTION: {
      type: Sequelize.STRING
    },
    ATTACHMENT: {
      type: Sequelize.STRING
    },
	CREATED_BY:{
		type: Sequelize.STRING
	},
	
    	STATUS:{
			type: Sequelize.ENUM,
			values:[
			'A',
			'I'],
			defaultValue:'A'
		}
		
  },{
	   freezeTableName: true,
	   timestamps:false,
	   createdAt:'CREATED_ON'
  });
  return tbl_tickets;
};
 
 


