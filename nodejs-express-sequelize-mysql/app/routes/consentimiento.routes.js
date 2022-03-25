module.exports = app => {
	const consentimiento = require("../controllers/consentimiento.controller.js");
	var router = require("express").Router();
	
	router.post("/", consentimiento.create);

	router.delete("/:id", consentimiento.delete);

	router.put("/:id", consentimiento.update);
	
	router.get("/", consentimiento.findAll);
	router.get("/:id", consentimiento.findOne);

	app.use('/api/consentimiento', router);
};