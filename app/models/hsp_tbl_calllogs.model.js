module.exports=(sequelize,Sequelize) => {
    const callogs=sequelize.define("hsp_tbl_calllogs",{

    LOG_ID:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        
        primaryKey: true

    },
    TICKET_ID:
    {
        type:Sequelize.INTEGER
    },
    ASSET_ID:
    {
        type:Sequelize.STRING
    },
    ACTION:
    {
        type:Sequelize.INTEGER
    },
    CREATED_BY:
    {
          type:Sequelize.STRING
    },
    STATUS:
    {
           type:Sequelize.ENUM,
           values: [
            'A',
            'I',
        ],
        defaultValue: 'A'
    }
},{
    freezeTableName: true
    


    });
return callogs;
};