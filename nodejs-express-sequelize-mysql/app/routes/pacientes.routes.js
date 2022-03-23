module.exports = app => {
	const paciente = require("../controllers/pacientes.controller.js");
	var router = require("express").Router();
	
	router.post("/", paciente.create);

	router.delete("/", paciente.delete);

	router.put("/:id", paciente.update);
	
	router.get("/", paciente.findAll);
	router.get("/:id", paciente.findOne);

	app.use('/api/pacientes', router);
};
