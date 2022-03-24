module.exports = app => {
	const tratamiento = require("../controllers/tratamiento.controller.js");
	var router = require("express").Router();
	
	router.post("/", tratamiento.create);

	router.delete("/:id", tratamiento.delete);

	router.put("/:id", tratamiento.update);
	
	router.get("/", tratamiento.findAll);
	router.get("/:id", tratamiento.findOne);

	app.use('/api/tratamiento', router);
};
