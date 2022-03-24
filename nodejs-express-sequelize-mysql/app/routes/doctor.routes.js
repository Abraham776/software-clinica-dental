module.exports = app => {
	const doctor = require("../controllers/doctor.controller.js");
	var router = require("express").Router();
	
	router.post("/", doctor.create);
	router.delete("/:id", doctor.delete);
	router.get("/", doctor.findAll);

	app.use('/api/doctor', router);
};
