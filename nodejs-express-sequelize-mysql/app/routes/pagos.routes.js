module.exports = app => {
	const paciente = require("../controllers/pagos.controller.js");
	var router = require("express").Router();
	
	router.post("/", paciente.create);

	router.delete("/:id", paciente.delete);

	router.put("/:id", paciente.update);
	
	router.get("/", paciente.findAll);
	router.get("/:id", paciente.findOne);

	app.use('/api/pagos', router);
};
