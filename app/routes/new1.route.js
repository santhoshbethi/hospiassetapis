const checkSignUp  = require("../middleware/checkSignUp");
const controller = require("../controllers/new1.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

	
	app.post('/user/all',checkSignUp.checkExistence, function(req, res){
 controller.signup
});

  app.post("/api/new/signin", controller.signin);
};
