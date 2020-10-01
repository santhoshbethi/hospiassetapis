const controller = require("../controllers/Log.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/addLog", controller.Logs);
  app.get("/showlog", controller.showlog);
  app.post("/updatelog", controller.updatelog);
};