const db=require("../models");
const config = require("../config/auth.config");

const Log=db.tbllogs;
const calltypes=db.tblcalltypes;


exports.Logs = (req, res) => {
    Log.create({
        TICKET_ID:req.body.TICKET_ID,
        ASSET_ID:req.body.ASSET_ID,
        ACTION:req.body.ACTION,
        CREATED_BY:req.body.CREATED_BY,
        STATUS:req.body.STATUS


})
.then(Log => {
      
    res.send({ message: "User registered successfully!" });
  })
    .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };


exports.calltypes = (req, res) => {
  calltypes.findAll({
       
})
.then(showtypes => {
      
    res.status(200).send({ message: showtypes });
  })
    .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };  

  exports.updatelog=(req,res)=>{
    Log.update({ASSET_ID:"989878"},{where:{ASSET_ID:"988"}
  })
    .then(updatelog => {
        
      res.send({ message: "User registered successfully!" });
    })
      .catch(err => {
          res.status(500).send({ message: err.message });
        });
    };  