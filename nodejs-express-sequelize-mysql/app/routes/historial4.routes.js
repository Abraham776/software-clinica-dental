module.exports = app => {
	const evolucion = require("../controllers/historial4.controller.js");
	var router = require("express").Router();
	
	router.post("/", evolucion.create);

	router.delete("/:id", evolucion.delete);

	router.put("/:id", evolucion.update);
	
	router.get("/paciente/:id", evolucion.findAll);
	router.get("/:id", evolucion.findOne);

	app.use('/api/historial4', router);
};