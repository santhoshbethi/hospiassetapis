const db = require("../models");
const authJwt = require("./authJwt");
const login = db.login;

 checkExistence = (req, res, next) => {
  
  login.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
 

};

module.exports = {
  authJwt,
  checkExistence
};


