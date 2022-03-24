module.exports = app => {
	const evolucion = require("../controllers/evolucion.controller.js");
	var router = require("express").Router();
	
	router.post("/", evolucion.create);

	router.delete("/:id", evolucion.delete);

	router.put("/:id", evolucion.update);
	
	router.get("/", evolucion.findAll);
	router.get("/:id", evolucion.findOne);

	app.use('/api/evolucion', router);
};